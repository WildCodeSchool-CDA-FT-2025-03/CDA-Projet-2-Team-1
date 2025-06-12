import { Repository } from 'typeorm';
import RoleEntity from '../entities/role.entity';
import ServiceEntity from '../entities/service.entity';
import UserEntity from '../entities/user.entity';

export interface CreateDoctorData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone?: string;
  specialization?: string;
  serviceId: number;
  genre: string;
}

export interface UpdateDoctorData {
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  specialization?: string;
  serviceId?: number;
  is_active?: boolean;
}

export class UserService {
  constructor(
    private userRepository: Repository<UserEntity>,
    private roleRepository: Repository<RoleEntity>,
    private serviceRepository: Repository<ServiceEntity>
  ) {}

  // Récupérer tous les docteurs (users avec role 'médecin')
  async getAllDoctors(): Promise<UserEntity[]> {
    return this.userRepository.find({
      where: {
        role: { name: 'médecin' },
      },
      relations: ['service', 'role'],
    });
  }

  // Récupérer les docteurs actifs
  async getActiveDoctors(): Promise<UserEntity[]> {
    return this.userRepository.find({
      where: {
        role: { name: 'médecin' },
        is_active: true,
      },
      relations: ['service', 'role'],
    });
  }

  // Récupérer un docteur par ID
  async getDoctorById(id: string): Promise<UserEntity | null> {
    return this.userRepository.findOne({
      where: {
        id,
        role: { name: 'médecin' },
      },
      relations: ['service', 'role', 'availabilities'],
    });
  }

  // Récupérer les docteurs par service
  async getDoctorsByService(serviceId: number): Promise<UserEntity[]> {
    return this.userRepository.find({
      where: {
        role: { name: 'médecin' },
        service: { id: serviceId },
      },
      relations: ['service', 'role'],
    });
  }

  // Récupérer les docteurs actifs par service
  async getActiveDoctorsByService(serviceId: number): Promise<UserEntity[]> {
    return this.userRepository.find({
      where: {
        role: { name: 'médecin' },
        service: { id: serviceId },
        is_active: true,
      },
      relations: ['service', 'role'],
    });
  }

  // Rechercher des docteurs
  async searchDoctors(searchTerm: string, serviceId?: number): Promise<UserEntity[]> {
    const queryBuilder = this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.service', 'service')
      .leftJoinAndSelect('user.role', 'role')
      .where('role.name = :roleName', { roleName: 'médecin' })
      .andWhere('user.is_active = :isActive', { isActive: true })
      .andWhere(
        '(LOWER(user.firstname) LIKE LOWER(:searchTerm) OR LOWER(user.lastname) LIKE LOWER(:searchTerm) OR LOWER(user.specialization) LIKE LOWER(:searchTerm))',
        { searchTerm: `%${searchTerm}%` }
      );

    if (serviceId) {
      queryBuilder.andWhere('user.service_id = :serviceId', { serviceId });
    }

    return queryBuilder.getMany();
  }

  // Créer un nouveau docteur
  async createDoctor(data: CreateDoctorData): Promise<UserEntity> {
    // Récupérer le rôle 'médecin'
    const doctorRole = await this.roleRepository.findOne({
      where: { name: 'médecin' },
    });

    if (!doctorRole) {
      throw new Error('Doctor role not found');
    }

    // Récupérer le service
    const service = await this.serviceRepository.findOne({
      where: { id: data.serviceId },
    });

    if (!service) {
      throw new Error('Service not found');
    }

    const user = this.userRepository.create({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password, // Devrait être hashé dans un vrai projet
      phone: data.phone,
      specialization: data.specialization,
      genre: data.genre,
      service: service,
      role: doctorRole,
      is_active: true,
    });

    const savedUser = await this.userRepository.save(user);

    // Retourner avec les relations
    return this.userRepository.findOne({
      where: { id: savedUser.id },
      relations: ['service', 'role'],
    }) as Promise<UserEntity>;
  }

  // Mettre à jour un docteur
  async updateDoctor(id: string, data: UpdateDoctorData): Promise<UserEntity | null> {
    const user = await this.userRepository.findOne({
      where: {
        id,
        role: { name: 'médecin' },
      },
      relations: ['service', 'role'],
    });

    if (!user) {
      return null;
    }

    // Mettre à jour les champs
    if (data.firstname !== undefined) user.firstname = data.firstname;
    if (data.lastname !== undefined) user.lastname = data.lastname;
    if (data.email !== undefined) user.email = data.email;
    if (data.phone !== undefined) user.phone = data.phone;
    if (data.specialization !== undefined) user.specialization = data.specialization;
    if (data.is_active !== undefined) user.is_active = data.is_active;

    // Mettre à jour le service si nécessaire
    if (data.serviceId) {
      const service = await this.serviceRepository.findOne({
        where: { id: data.serviceId },
      });
      if (service) {
        user.service = service;
      }
    }

    await this.userRepository.save(user);

    return this.userRepository.findOne({
      where: { id },
      relations: ['service', 'role'],
    });
  }

  // Supprimer un docteur (soft delete)
  async deleteDoctor(id: string): Promise<boolean> {
    const result = await this.userRepository.update(
      {
        id,
        role: { name: 'médecin' },
      },
      { is_active: false }
    );

    return result.affected !== undefined && result.affected > 0;
  }
}
