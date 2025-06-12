import {
  CREATE_DOCTOR,
  DELETE_DOCTOR,
  GET_ACTIVE_DOCTORS,
  GET_ACTIVE_DOCTORS_BY_SERVICE,
  GET_DOCTORS,
  GET_DOCTOR_BY_ID,
  SEARCH_DOCTORS,
  UPDATE_DOCTOR,
} from '../schemas/user.schema';
import { CreateDoctorInput, DoctorUser, UpdateDoctorInput } from '../types/doctor.types';
import { useMutation, useQuery, useQueryClient } from '@apollo/client';

export const useDoctors = () => {
  const { data, loading, error } = useQuery(GET_DOCTORS);

  return {
    doctors: data?.doctors || [],
    loading,
    error,
  };
};

export const useActiveDoctors = () => {
  const { data, loading, error } = useQuery(GET_ACTIVE_DOCTORS);

  return {
    doctors: data?.activeDoctors || [],
    loading,
    error,
  };
};

export const useActiveDoctorsByService = (serviceId: string) => {
  const { data, loading, error } = useQuery(GET_ACTIVE_DOCTORS_BY_SERVICE, {
    variables: { serviceId },
    skip: !serviceId,
  });

  return {
    doctors: data?.activeDoctorsByService || [],
    loading,
    error,
  };
};

export const useDoctor = (id: string) => {
  const { data, loading, error } = useQuery(GET_DOCTOR_BY_ID, {
    variables: { id },
    skip: !id,
  });

  return {
    doctor: data?.doctor as DoctorUser | null,
    loading,
    error,
  };
};

export const useSearchDoctors = (searchTerm: string, serviceId?: string) => {
  const { data, loading, error } = useQuery(SEARCH_DOCTORS, {
    variables: { searchTerm, serviceId },
    skip: !searchTerm,
  });

  return {
    doctors: data?.searchDoctors || [],
    loading,
    error,
  };
};

export const useCreateDoctor = () => {
  const queryClient = useQueryClient();

  const [createDoctor, { loading, error }] = useMutation(CREATE_DOCTOR, {
    onCompleted: () => {
      // Invalider les caches pour recharger les listes
      queryClient.invalidateQueries(['getDoctors']);
      queryClient.invalidateQueries(['getActiveDoctors']);
    },
  });

  const handleCreateDoctor = async (input: CreateDoctorInput) => {
    return createDoctor({ variables: { input } });
  };

  return {
    createDoctor: handleCreateDoctor,
    loading,
    error,
  };
};

export const useUpdateDoctor = () => {
  const queryClient = useQueryClient();

  const [updateDoctor, { loading, error }] = useMutation(UPDATE_DOCTOR, {
    onCompleted: () => {
      queryClient.invalidateQueries(['getDoctors']);
      queryClient.invalidateQueries(['getActiveDoctors']);
      queryClient.invalidateQueries(['getDoctor']);
    },
  });

  const handleUpdateDoctor = async (id: string, input: UpdateDoctorInput) => {
    return updateDoctor({ variables: { id, input } });
  };

  return {
    updateDoctor: handleUpdateDoctor,
    loading,
    error,
  };
};

export const useDeleteDoctor = () => {
  const queryClient = useQueryClient();

  const [deleteDoctor, { loading, error }] = useMutation(DELETE_DOCTOR, {
    onCompleted: () => {
      queryClient.invalidateQueries(['getDoctors']);
      queryClient.invalidateQueries(['getActiveDoctors']);
    },
  });

  const handleDeleteDoctor = async (id: string) => {
    return deleteDoctor({ variables: { id } });
  };

  return {
    deleteDoctor: handleDeleteDoctor,
    loading,
    error,
  };
};
