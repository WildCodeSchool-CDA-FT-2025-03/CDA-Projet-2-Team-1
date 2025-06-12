import { Arg, Field, ID, InputType, Mutation, Query, Resolver } from 'type-graphql';
import RoleEntity from '../entities/role.entity';
import ServiceEntity from '../entities/service.entity';
import UserEntity from '../entities/user.entity';
import { dataSource } from '../services/client.service';
import { UserService } from '../services/user.service';
import { DoctorUser } from '../types/doctor.types';

// Input types
@InputType()
class CreateDoctorInput {
  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  genre: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  specialization?: string;

  @Field(() => ID)
  serviceId: string;
}

@InputType()
class UpdateDoctorInput {
  @Field({ nullable: true })
  firstname?: string;

  @Field({ nullable: true })
  lastname?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  specialization?: string;

  @Field(() => ID, { nullable: true })
  serviceId?: string;

  @Field({ nullable: true })
  isActive?: boolean;
}

@Resolver(() => DoctorUser)
export class UserResolver {
  private userService: UserService;

  constructor() {
    this.userService = new UserService(
      dataSource.getRepository(UserEntity),
      dataSource.getRepository(RoleEntity),
      dataSource.getRepository(ServiceEntity)
    );
  }

  @Query(() => [DoctorUser])
  async doctors(): Promise<DoctorUser[]> {
    const users = await this.userService.getAllDoctors();
    return users.map((user) => DoctorUser.fromUserEntity(user));
  }

  @Query(() => [DoctorUser])
  async activeDoctors(): Promise<DoctorUser[]> {
    const users = await this.userService.getActiveDoctors();
    return users.map((user) => DoctorUser.fromUserEntity(user));
  }

  @Query(() => DoctorUser, { nullable: true })
  async doctor(@Arg('id', () => String) id: string): Promise<DoctorUser | null> {
    const user = await this.userService.getDoctorById(id);
    return user ? DoctorUser.fromUserEntity(user) : null;
  }

  @Query(() => [DoctorUser])
  async doctorsByService(@Arg('serviceId', () => String) serviceId: string): Promise<DoctorUser[]> {
    const users = await this.userService.getDoctorsByService(parseInt(serviceId, 10));
    return users.map((user) => DoctorUser.fromUserEntity(user));
  }

  @Query(() => [DoctorUser])
  async activeDoctorsByService(
    @Arg('serviceId', () => String) serviceId: string
  ): Promise<DoctorUser[]> {
    const users = await this.userService.getActiveDoctorsByService(parseInt(serviceId, 10));
    return users.map((user) => DoctorUser.fromUserEntity(user));
  }

  @Query(() => [DoctorUser])
  async searchDoctors(
    @Arg('searchTerm') searchTerm: string,
    @Arg('serviceId', () => String, { nullable: true }) serviceId?: string
  ): Promise<DoctorUser[]> {
    const users = await this.userService.searchDoctors(
      searchTerm,
      serviceId ? parseInt(serviceId, 10) : undefined
    );
    return users.map((user) => DoctorUser.fromUserEntity(user));
  }

  @Mutation(() => DoctorUser)
  async createDoctor(@Arg('input') input: CreateDoctorInput): Promise<DoctorUser> {
    const user = await this.userService.createDoctor({
      ...input,
      serviceId: parseInt(input.serviceId, 10),
    });
    return DoctorUser.fromUserEntity(user);
  }

  @Mutation(() => DoctorUser, { nullable: true })
  async updateDoctor(
    @Arg('id', () => String) id: string,
    @Arg('input') input: UpdateDoctorInput
  ): Promise<DoctorUser | null> {
    const updateData = {
      ...input,
      serviceId: input.serviceId ? parseInt(input.serviceId, 10) : undefined,
      is_active: input.isActive,
    };
    const user = await this.userService.updateDoctor(id, updateData);
    return user ? DoctorUser.fromUserEntity(user) : null;
  }

  @Mutation(() => Boolean)
  async deleteDoctor(@Arg('id', () => String) id: string): Promise<boolean> {
    return this.userService.deleteDoctor(id);
  }
}
