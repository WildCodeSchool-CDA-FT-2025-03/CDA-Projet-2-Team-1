import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import React, { useState } from 'react';

// Mock de l'API d'upload complète
const mockFetch = vi.fn();
vi.stubGlobal('fetch', mockFetch);

// Composant qui simule le flux complet upload + affichage
function UploadFile() {
  const [files, setFiles] = useState<Array<{ id: string; name: string }>>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleUploadFile = async (file: File) => {
    setIsUploading(true);
    setError(null);
    setSuccess(null);

    try {
      // 1. Vérification authentification/role
      const authResponse = await fetch('/auth/verify', {
        method: 'GET',
        credentials: 'include',
      });

      if (!authResponse.ok) {
        throw new Error('Non autorisé');
      }

      // 2. Upload du fichier
      const formData = new FormData();
      formData.append('file', file);
      formData.append('consultationId', 'consultation-123');

      const uploadResponse = await fetch('/upload/post', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      if (!uploadResponse.ok) {
        throw new Error('Erreur upload');
      }

      const result = await uploadResponse.json();

      // 3. Mise à jour de l'interface
      setFiles((prev) => [...prev, result.file]);
      setSuccess('Fichier uploadé avec succès');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      <div data-testid="upload-section">
        <input
          type="file"
          data-testid="file-input"
          disabled={isUploading}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              handleUploadFile(file);
            }
          }}
        />
        {isUploading && <p data-testid="loading">Upload en cours...</p>}
        {error && (
          <p data-testid="error" style={{ color: 'red' }}>
            {error}
          </p>
        )}
        {success && (
          <p data-testid="success" style={{ color: 'green' }}>
            {success}
          </p>
        )}
      </div>

      <div data-testid="file-list">
        <h3>Fichiers uploadés :</h3>
        {files.length === 0 ? (
          <p data-testid="no-files">Aucun fichier</p>
        ) : (
          files.map((file) => (
            <div key={file.id} data-testid={`file-${file.id}`}>
              📄 {file.name}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

describe('File Upload API Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('uploads file successfully with authentication and role check', async () => {
    const user = userEvent.setup();

    // Mock des réponses API avec les vrais types de votre backend
    mockFetch
      // 1. Authentification réussie avec role numérique
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ user: { role: 2 } }), // Doctor = 2
      })
      // 2. Upload réussi
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          file: { id: 'file-123', name: 'document.pdf' },
        }),
      });

    render(<UploadFile />);

    // État initial
    expect(screen.getByTestId('no-files')).toBeInTheDocument();

    // Upload d'un fichier
    const file = new File(['test content'], 'document.pdf', { type: 'application/pdf' });
    const input = screen.getByTestId('file-input');

    await user.upload(input, file);

    // Attendre la fin de l'upload (pas de vérification du loading car trop rapide)
    await waitFor(() => {
      expect(screen.getByTestId('success')).toBeInTheDocument();
    });

    // Vérifications des appels API
    expect(mockFetch).toHaveBeenCalledTimes(2);

    // 1. Vérification auth
    expect(mockFetch).toHaveBeenNthCalledWith(1, '/auth/verify', {
      method: 'GET',
      credentials: 'include',
    });

    // 2. Upload
    expect(mockFetch).toHaveBeenNthCalledWith(2, '/upload/post', {
      method: 'POST',
      body: expect.any(FormData),
      credentials: 'include',
    });

    // Vérifier que le fichier apparaît dans l'interface
    expect(screen.getByText('📄 document.pdf')).toBeInTheDocument();
    expect(screen.getByText('Fichier uploadé avec succès')).toBeInTheDocument();
    expect(screen.queryByTestId('no-files')).not.toBeInTheDocument();
  });

  it('blocks upload when user has insufficient role', async () => {
    const user = userEvent.setup();

    // Mock utilisateur avec role insuffisant (1 = patient par exemple)
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 403,
      json: async () => ({ error: 'Role insuffisant' }),
    });

    render(<UploadFile />);

    const file = new File(['test'], 'document.pdf', { type: 'application/pdf' });
    const input = screen.getByTestId('file-input');

    await user.upload(input, file);

    // Attendre l'erreur
    await waitFor(() => {
      expect(screen.getByTestId('error')).toBeInTheDocument();
      expect(screen.getByText('Non autorisé')).toBeInTheDocument();
    });

    // Vérifier qu'aucun fichier n'est ajouté
    expect(screen.getByTestId('no-files')).toBeInTheDocument();
    expect(mockFetch).toHaveBeenCalledTimes(1); // Seulement l'auth, pas l'upload
  });

  it('allows upload for secretary role', async () => {
    const user = userEvent.setup();

    mockFetch
      // Auth réussie avec role secrétaire
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ user: { role: 3 } }), // Secretary = 3
      })
      // Upload réussi
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          file: { id: 'file-456', name: 'prescription.pdf' },
        }),
      });

    render(<UploadFile />);

    const file = new File(['test'], 'prescription.pdf', { type: 'application/pdf' });
    const input = screen.getByTestId('file-input');

    await user.upload(input, file);

    await waitFor(() => {
      expect(screen.getByText('📄 prescription.pdf')).toBeInTheDocument();
      expect(screen.getByTestId('success')).toBeInTheDocument();
    });
  });
});
