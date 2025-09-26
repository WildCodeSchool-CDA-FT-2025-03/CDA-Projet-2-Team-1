import { Response } from 'express';
import { AuthenticatedRequest } from '../middlewares/authRole.middleware';

export const uploadFile = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response | void> => {
  const file = req.file as Express.Multer.File;

  if (!file) {
    return res.status(422).json({ message: 'No file uploaded' });
  }

  const { consultationId, isConfidential } = req.body;

  if (!consultationId) {
    return res.status(400).json({ message: 'consultationId is required' });
  }

  const mutation = `
    mutation UploadFile($consultationId: String!, $name: String!, $path: String!, $isConfidential: Boolean) {
      uploadFile(consultationId: $consultationId, name: $name, path: $path, isConfidential: $isConfidential) {
        id
        name
        path
        created_at
        is_confidential
      }
    }
  `;

  const fileUrl = `/upload/files/${file.filename}`;

  const variables = {
    consultationId,
    name: file.originalname,
    path: fileUrl,
    isConfidential: isConfidential === 'true' || isConfidential === true,
  };

  try {
    // Récupérer le token depuis la requête authentifiée
    const userToken = req.cookies?.jwtTokenServerCarePlan;

    if (!userToken) {
      return res.status(401).json({ message: 'Token manquant' });
    }

    const response = await fetch(`http://appointment-service:4000/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`, // ✅ Transmission du token
      },
      body: JSON.stringify({
        query: mutation,
        variables,
      }),
    });

    const result = await response.json();
    if (result.errors) {
      return res.status(500).json({
        message: 'Error saving file to database',
        errors: result.errors,
      });
    }
    return res.status(200).json({
      message: 'File uploaded successfully',
      file: result.data.uploadFile,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error saving file to database',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
