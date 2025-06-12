import { ArrowLeft, Plus, Users } from 'lucide-react';
import React, { useState } from 'react';

import { DoctorAvailabilityCalendar } from '../components/availability/DoctorAvailabilityCalendar';
import { DoctorForm } from '../components/doctor/DoctorForm';
import { DoctorList } from '../components/doctor/DoctorList';
import { Button } from '../components/ui/button';
import { DoctorUser } from '../types/doctor.types';

type ViewMode = 'list' | 'form' | 'availability';

export const DoctorsPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorUser | null>(null);

  const handleAddDoctor = () => {
    setSelectedDoctor(null);
    setViewMode('form');
  };

  const handleEditDoctor = (doctor: DoctorUser) => {
    setSelectedDoctor(doctor);
    setViewMode('form');
  };

  const handleViewAvailabilities = (doctor: DoctorUser) => {
    setSelectedDoctor(doctor);
    setViewMode('availability');
  };

  const handleFormSuccess = () => {
    setViewMode('list');
    setSelectedDoctor(null);
  };

  const handleBackToList = () => {
    setViewMode('list');
    setSelectedDoctor(null);
  };

  const renderHeader = () => {
    switch (viewMode) {
      case 'form':
        return (
          <div className="flex items-center gap-4 mb-6">
            <Button variant="outline" onClick={handleBackToList}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à la liste
            </Button>
            <h1 className="text-2xl font-bold">
              {selectedDoctor ? 'Modifier le docteur' : 'Nouveau docteur'}
            </h1>
          </div>
        );
      case 'availability':
        return (
          <div className="flex items-center gap-4 mb-6">
            <Button variant="outline" onClick={handleBackToList}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à la liste
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Disponibilités</h1>
              {selectedDoctor && (
                <p className="text-gray-600">
                  Dr. {selectedDoctor.firstname} {selectedDoctor.lastname}
                </p>
              )}
            </div>
          </div>
        );
      default:
        return (
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold">Gestion des docteurs</h1>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleAddDoctor} className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Nouveau docteur
              </Button>
            </div>
          </div>
        );
    }
  };

  const renderContent = () => {
    switch (viewMode) {
      case 'form':
        return (
          <DoctorForm
            doctor={selectedDoctor || undefined}
            onSuccess={handleFormSuccess}
            onCancel={handleBackToList}
          />
        );
      case 'availability':
        return selectedDoctor ? <DoctorAvailabilityCalendar doctor={selectedDoctor} /> : null;
      default:
        return (
          <DoctorList
            onAdd={handleAddDoctor}
            onEdit={handleEditDoctor}
            onViewAvailabilities={handleViewAvailabilities}
          />
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {renderHeader()}
      {renderContent()}
    </div>
  );
};
