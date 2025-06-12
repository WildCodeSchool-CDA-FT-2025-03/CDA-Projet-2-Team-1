import { Arg, Field, ID, InputType, Int, Mutation, Query, Resolver } from 'type-graphql';
import DoctorAvailabilityEntity from '../entities/doctor-availability.entity';
import UserEntity from '../entities/user.entity';
import { AvailabilityService } from '../services/availability.service';
import { dataSource } from '../services/client.service';

// Input types
@InputType()
class CreateAvailabilityInput {
  @Field(() => ID)
  doctorId: string;

  @Field(() => Int)
  dayOfWeek: number;

  @Field()
  startTime: string;

  @Field()
  endTime: string;
}

@InputType()
class UpdateAvailabilityInput {
  @Field(() => Int, { nullable: true })
  dayOfWeek?: number;

  @Field({ nullable: true })
  startTime?: string;

  @Field({ nullable: true })
  endTime?: string;

  @Field({ nullable: true })
  isActive?: boolean;
}

@Resolver(DoctorAvailabilityEntity)
export class AvailabilityResolver {
  private availabilityService: AvailabilityService;

  constructor() {
    this.availabilityService = new AvailabilityService(
      dataSource.getRepository(DoctorAvailabilityEntity),
      dataSource.getRepository(UserEntity)
    );
  }

  @Query(() => [DoctorAvailabilityEntity])
  async doctorAvailabilities(
    @Arg('doctorId', () => ID) doctorId: string
  ): Promise<DoctorAvailabilityEntity[]> {
    return this.availabilityService.getDoctorAvailabilities(doctorId);
  }

  @Query(() => [DoctorAvailabilityEntity])
  async doctorAvailabilitiesByDay(
    @Arg('doctorId', () => ID) doctorId: string,
    @Arg('dayOfWeek', () => Int) dayOfWeek: number
  ): Promise<DoctorAvailabilityEntity[]> {
    return this.availabilityService.getDoctorAvailabilitiesByDay(doctorId, dayOfWeek);
  }

  @Mutation(() => DoctorAvailabilityEntity)
  async createAvailability(
    @Arg('input') input: CreateAvailabilityInput
  ): Promise<DoctorAvailabilityEntity> {
    return this.availabilityService.createAvailability(input);
  }

  @Mutation(() => DoctorAvailabilityEntity, { nullable: true })
  async updateAvailability(
    @Arg('id', () => ID) id: string,
    @Arg('input') input: UpdateAvailabilityInput
  ): Promise<DoctorAvailabilityEntity | null> {
    return this.availabilityService.updateAvailability(id, input);
  }

  @Mutation(() => Boolean)
  async deleteAvailability(@Arg('id', () => ID) id: string): Promise<boolean> {
    return this.availabilityService.deleteAvailability(id);
  }
}
