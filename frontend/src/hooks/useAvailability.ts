import {
  CREATE_AVAILABILITY,
  DELETE_AVAILABILITY,
  GET_DOCTOR_AVAILABILITIES,
  GET_DOCTOR_AVAILABILITIES_BY_DAY,
  UPDATE_AVAILABILITY,
} from '../schemas/availability.schema';
import { CreateAvailabilityInput, UpdateAvailabilityInput } from '../types/doctor.types';
import { useMutation, useQuery, useQueryClient } from '@apollo/client';

export const useDoctorAvailabilities = (doctorId: string) => {
  const { data, loading, error } = useQuery(GET_DOCTOR_AVAILABILITIES, {
    variables: { doctorId },
    skip: !doctorId,
  });

  return {
    availabilities: data?.doctorAvailabilities || [],
    loading,
    error,
  };
};

export const useDoctorAvailabilitiesByDay = (doctorId: string, dayOfWeek: number) => {
  const { data, loading, error } = useQuery(GET_DOCTOR_AVAILABILITIES_BY_DAY, {
    variables: { doctorId, dayOfWeek },
    skip: !doctorId || dayOfWeek === undefined,
  });

  return {
    availabilities: data?.doctorAvailabilitiesByDay || [],
    loading,
    error,
  };
};

export const useCreateAvailability = () => {
  const queryClient = useQueryClient();

  const [createAvailability, { loading, error }] = useMutation(CREATE_AVAILABILITY, {
    onCompleted: () => {
      queryClient.invalidateQueries(['getDoctorAvailabilities']);
      queryClient.invalidateQueries(['getDoctorAvailabilitiesByDay']);
    },
  });

  const handleCreateAvailability = async (input: CreateAvailabilityInput) => {
    return createAvailability({ variables: { input } });
  };

  return {
    createAvailability: handleCreateAvailability,
    loading,
    error,
  };
};

export const useUpdateAvailability = () => {
  const queryClient = useQueryClient();

  const [updateAvailability, { loading, error }] = useMutation(UPDATE_AVAILABILITY, {
    onCompleted: () => {
      queryClient.invalidateQueries(['getDoctorAvailabilities']);
      queryClient.invalidateQueries(['getDoctorAvailabilitiesByDay']);
    },
  });

  const handleUpdateAvailability = async (id: string, input: UpdateAvailabilityInput) => {
    return updateAvailability({ variables: { id, input } });
  };

  return {
    updateAvailability: handleUpdateAvailability,
    loading,
    error,
  };
};

export const useDeleteAvailability = () => {
  const queryClient = useQueryClient();

  const [deleteAvailability, { loading, error }] = useMutation(DELETE_AVAILABILITY, {
    onCompleted: () => {
      queryClient.invalidateQueries(['getDoctorAvailabilities']);
      queryClient.invalidateQueries(['getDoctorAvailabilitiesByDay']);
    },
  });

  const handleDeleteAvailability = async (id: string) => {
    return deleteAvailability({ variables: { id } });
  };

  return {
    deleteAvailability: handleDeleteAvailability,
    loading,
    error,
  };
};
