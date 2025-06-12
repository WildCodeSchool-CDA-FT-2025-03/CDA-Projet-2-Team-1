import { Repository } from 'typeorm';
import ServiceEntity from '../entities/service.entity';

export class ServiceService {
  constructor(private serviceRepository: Repository<ServiceEntity>) {}

  async getAllServices(): Promise<ServiceEntity[]> {
    return this.serviceRepository.find({
      relations: ['user'],
      order: { name: 'ASC' },
    });
  }

  async getActiveServices(): Promise<ServiceEntity[]> {
    return this.serviceRepository.find({
      where: { isActive: true },
      relations: ['user'],
      order: { name: 'ASC' },
    });
  }

  async getServiceById(id: number): Promise<ServiceEntity | null> {
    return this.serviceRepository.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  async createService(serviceData: {
    name: string;
    description?: string;
    isActive?: boolean;
  }): Promise<ServiceEntity> {
    const service = this.serviceRepository.create(serviceData);
    return this.serviceRepository.save(service);
  }

  async updateService(
    id: number,
    updateData: {
      name?: string;
      description?: string;
      isActive?: boolean;
    }
  ): Promise<ServiceEntity | null> {
    await this.serviceRepository.update(id, updateData);
    return this.getServiceById(id);
  }

  async deleteService(id: number): Promise<boolean> {
    const result = await this.serviceRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }

  async getServicesWithUserCount(): Promise<ServiceEntity[]> {
    return this.serviceRepository
      .createQueryBuilder('service')
      .leftJoinAndSelect('service.user', 'user', 'user.is_active = :isActive', {
        isActive: true,
      })
      .where('service.isActive = :isActive', { isActive: true })
      .orderBy('service.name', 'ASC')
      .getMany();
  }
}
