import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import ServiceEntity from '../entities/service.entity';
import { ServiceService } from '../services/service.service';
import { dataSource } from '../services/client.service';

// Input types
@InputType()
class CreateServiceInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  isActive?: boolean = true;
}

@InputType()
class UpdateServiceInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  isActive?: boolean;
}

@Resolver(ServiceEntity)
export class ServiceResolver {
  private serviceService: ServiceService;

  constructor() {
    this.serviceService = new ServiceService(dataSource.getRepository(ServiceEntity));
  }

  @Query(() => [ServiceEntity])
  async services(): Promise<ServiceEntity[]> {
    return this.serviceService.getAllServices();
  }

  @Query(() => [ServiceEntity])
  async activeServices(): Promise<ServiceEntity[]> {
    return this.serviceService.getActiveServices();
  }

  @Query(() => ServiceEntity, { nullable: true })
  async service(@Arg('id', () => String) id: string): Promise<ServiceEntity | null> {
    return this.serviceService.getServiceById(parseInt(id, 10));
  }

  @Mutation(() => ServiceEntity)
  async createService(@Arg('input') input: CreateServiceInput): Promise<ServiceEntity> {
    return this.serviceService.createService(input);
  }

  @Mutation(() => ServiceEntity, { nullable: true })
  async updateService(
    @Arg('id', () => String) id: string,
    @Arg('input') input: UpdateServiceInput
  ): Promise<ServiceEntity | null> {
    return this.serviceService.updateService(parseInt(id, 10), input);
  }

  @Mutation(() => Boolean)
  async deleteService(@Arg('id', () => String) id: string): Promise<boolean> {
    return this.serviceService.deleteService(parseInt(id, 10));
  }
}
