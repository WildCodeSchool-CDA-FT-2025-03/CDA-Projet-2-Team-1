import { Arg, Field, ID, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { Doctor } from '../entities/Doctor';
import { DoctorService } from '../services/DoctorService';
import { dataSource } from '../services/client.service';

// Input types
@InputType()
class CreateDoctorInput {
  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  specialization?: string;

  @Field(() => ID)
  serviceId: string;

  @Field({ nullable: true })
  isActive?: boolean = true;
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

@Resolver(Doctor)
export class DoctorResolver {
  private doctorService: DoctorService;

  constructor() {
    this.doctorService = new DoctorService(dataSource.getRepository(Doctor));
  }

  @Query(() => [Doctor])
  async doctors(): Promise<Doctor[]> {
    return this.doctorService.getAllDoctors();
  }

  @Query(() => [Doctor])
  async activeDoctors(): Promise<Doctor[]> {
    return this.doctorService.getActiveDoctors();
  }

  @Query(() => Doctor, { nullable: true })
  async doctor(@Arg('id', () => String) id: string): Promise<Doctor | null> {
    return this.doctorService.getDoctorById(id);
  }

  @Query(() => [Doctor])
  async doctorsByService(@Arg('serviceId', () => String) serviceId: string): Promise<Doctor[]> {
    return this.doctorService.getDoctorsByService(serviceId);
  }

  @Query(() => [Doctor])
  async activeDoctorsByService(
    @Arg('serviceId', () => String) serviceId: string
  ): Promise<Doctor[]> {
    return this.doctorService.getActiveDoctorsByService(serviceId);
  }

  @Query(() => [Doctor])
  async searchDoctors(
    @Arg('searchTerm') searchTerm: string,
    @Arg('serviceId', () => String, { nullable: true }) serviceId?: string
  ): Promise<Doctor[]> {
    return this.doctorService.searchDoctors(searchTerm, serviceId);
  }

  @Mutation(() => Doctor)
  async createDoctor(@Arg('input') input: CreateDoctorInput): Promise<Doctor> {
    return this.doctorService.createDoctor(input);
  }

  @Mutation(() => Doctor, { nullable: true })
  async updateDoctor(
    @Arg('id', () => String) id: string,
    @Arg('input') input: UpdateDoctorInput
  ): Promise<Doctor | null> {
    return this.doctorService.updateDoctor(id, input);
  }

  @Mutation(() => Boolean)
  async deleteDoctor(@Arg('id', () => String) id: string): Promise<boolean> {
    return this.doctorService.deleteDoctor(id);
  }
}
