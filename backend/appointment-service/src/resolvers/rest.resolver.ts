import { Arg, Query, Resolver } from 'type-graphql';

import RestEntity from '../entities/rest.entity';

@Resolver(RestEntity)
class RestResolver {
  @Query(() => [RestEntity])
  async getByUserID(@Arg('userId', () => String) userId: string): Promise<RestEntity[]> {
    return RestEntity.find({
      where: { user: { id: userId } },
      relations: ['user'],
    });
  }
}

export default RestResolver;
