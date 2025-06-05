import { Repository } from 'typeorm';
import { Service } from '../entities/Service';

export class ServiceService {
  constructor(private serviceRepository: Repository<Service>) {}

  async getAllServices(): Promise<Service[]> {
    return this.serviceRepository.find({
      relations: ['doctors'],
      order: { name: 'ASC' },
    });
  }

  async getActiveServices(): Promise<Service[]> {
    return this.serviceRepository.find({
      where: { isActive: true },
      relations: ['doctors'],
      order: { name: 'ASC' },
    });
  }

  async getServiceById(id: string): Promise<Service | null> {
    return this.serviceRepository.findOne({
      where: { id },
      relations: ['doctors'],
    });
  }

  async createService(serviceData: {
    name: string;
    description?: string;
    isActive?: boolean;
  }): Promise<Service> {
    const service = this.serviceRepository.create(serviceData);
    return this.serviceRepository.save(service);
  }

  async updateService(
    id: string,
    updateData: {
      name?: string;
      description?: string;
      isActive?: boolean;
    }
  ): Promise<Service | null> {
    await this.serviceRepository.update(id, updateData);
    return this.getServiceById(id);
  }

  async deleteService(id: string): Promise<boolean> {
    const result = await this.serviceRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }

  async getServicesWithDoctorCount(): Promise<Service[]> {
    return this.serviceRepository
      .createQueryBuilder('service')
      .leftJoinAndSelect('service.doctors', 'doctor', 'doctor.isActive = :isActive', {
        isActive: true,
      })
      .where('service.isActive = :isActive', { isActive: true })
      .orderBy('service.name', 'ASC')
      .getMany();
  }
}
