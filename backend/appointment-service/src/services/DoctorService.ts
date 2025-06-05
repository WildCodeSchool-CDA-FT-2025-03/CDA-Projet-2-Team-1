import { Doctor } from '../entities/Doctor';
import { Repository } from 'typeorm';

export class DoctorService {
  constructor(private doctorRepository: Repository<Doctor>) {}

  async getAllDoctors(): Promise<Doctor[]> {
    return this.doctorRepository.find({
      relations: ['service'],
      order: { lastname: 'ASC', firstname: 'ASC' },
    });
  }

  async getActiveDoctors(): Promise<Doctor[]> {
    return this.doctorRepository.find({
      where: { isActive: true },
      relations: ['service'],
      order: { lastname: 'ASC', firstname: 'ASC' },
    });
  }

  async getDoctorById(id: string): Promise<Doctor | null> {
    return this.doctorRepository.findOne({
      where: { id },
      relations: ['service'],
    });
  }

  async getDoctorsByService(serviceId: string): Promise<Doctor[]> {
    return this.doctorRepository.find({
      where: {
        service: { id: serviceId },
      },
      relations: ['service'],
      order: { lastname: 'ASC', firstname: 'ASC' },
    });
  }

  async getActiveDoctorsByService(serviceId: string): Promise<Doctor[]> {
    return this.doctorRepository.find({
      where: {
        service: { id: serviceId },
        isActive: true,
      },
      relations: ['service'],
      order: { lastname: 'ASC', firstname: 'ASC' },
    });
  }

  async createDoctor(doctorData: {
    firstname: string;
    lastname: string;
    email?: string;
    phone?: string;
    specialization?: string;
    serviceId: string;
    isActive?: boolean;
  }): Promise<Doctor> {
    const doctor = this.doctorRepository.create({
      ...doctorData,
      service: { id: doctorData.serviceId } as { id: string },
    });
    return this.doctorRepository.save(doctor);
  }

  async updateDoctor(
    id: string,
    updateData: {
      firstname?: string;
      lastname?: string;
      email?: string;
      phone?: string;
      specialization?: string;
      serviceId?: string;
      isActive?: boolean;
    }
  ): Promise<Doctor | null> {
    const updatePayload: Record<string, unknown> = { ...updateData };
    if (updateData.serviceId) {
      updatePayload.service = { id: updateData.serviceId };
      delete updatePayload.serviceId;
    }

    await this.doctorRepository.update(id, updatePayload);
    return this.getDoctorById(id);
  }

  async deleteDoctor(id: string): Promise<boolean> {
    const result = await this.doctorRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }

  async getDoctorByEmail(email: string): Promise<Doctor | null> {
    return this.doctorRepository.findOne({
      where: { email },
      relations: ['service'],
    });
  }

  async searchDoctors(searchTerm: string, serviceId?: string): Promise<Doctor[]> {
    const query = this.doctorRepository
      .createQueryBuilder('doctor')
      .leftJoinAndSelect('doctor.service', 'service')
      .where('doctor.isActive = :isActive', { isActive: true })
      .andWhere(
        '(LOWER(doctor.firstname) LIKE LOWER(:searchTerm) OR LOWER(doctor.lastname) LIKE LOWER(:searchTerm) OR LOWER(doctor.specialization) LIKE LOWER(:searchTerm))',
        { searchTerm: `%${searchTerm}%` }
      );

    if (serviceId) {
      query.andWhere('service.id = :serviceId', { serviceId });
    }

    return query.orderBy('doctor.lastname', 'ASC').addOrderBy('doctor.firstname', 'ASC').getMany();
  }
}
