import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from '../entities/Service';
import { ServiceService } from '../services/ServiceService';
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

@Resolver(Service)
export class ServiceResolver {
  private serviceService: ServiceService;

  constructor() {
    this.serviceService = new ServiceService(dataSource.getRepository(Service));
  }

  @Query(() => [Service])
  async services(): Promise<Service[]> {
    return this.serviceService.getAllServices();
  }

  @Query(() => [Service])
  async activeServices(): Promise<Service[]> {
    return this.serviceService.getActiveServices();
  }

  @Query(() => Service, { nullable: true })
  async service(@Arg('id', () => String) id: string): Promise<Service | null> {
    return this.serviceService.getServiceById(id);
  }

  @Mutation(() => Service)
  async createService(@Arg('input') input: CreateServiceInput): Promise<Service> {
    return this.serviceService.createService(input);
  }

  @Mutation(() => Service, { nullable: true })
  async updateService(
    @Arg('id', () => String) id: string,
    @Arg('input') input: UpdateServiceInput
  ): Promise<Service | null> {
    return this.serviceService.updateService(id, input);
  }

  @Mutation(() => Boolean)
  async deleteService(@Arg('id', () => String) id: string): Promise<boolean> {
    return this.serviceService.deleteService(id);
  }
}
