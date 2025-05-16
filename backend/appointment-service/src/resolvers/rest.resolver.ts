import { Arg, Query, Resolver } from 'type-graphql';

import RestEntity from '../entities/rest.entity';

@Resolver(RestEntity)
class RestResolver {
  @Query(() => [RestEntity])
  async getByUserID(@Arg('userId', () => String) userId: string): Promise<RestEntity[]> {
    return RestEntity.findBy({ user_id: userId });
  }
}

export default RestResolver;
