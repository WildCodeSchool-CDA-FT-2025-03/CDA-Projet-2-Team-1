import { Query, Resolver } from 'type-graphql';

import ServiceEntity from '../entities/service.entity';

@Resolver(ServiceEntity)
class ServiceResolver {
  @Query(() => [ServiceEntity])
  async getServices(): Promise<ServiceEntity[]> {
    return await ServiceEntity.find();
  }

  @Query(() => [ServiceEntity])
  async activeServices(): Promise<ServiceEntity[]> {
    return await ServiceEntity.find({ where: { isActive: true } });
  }
}

export default ServiceResolver;
