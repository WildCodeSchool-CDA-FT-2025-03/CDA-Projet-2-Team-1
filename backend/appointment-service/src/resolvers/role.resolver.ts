import { Query, Resolver } from 'type-graphql';

import RoleEntity from '../entities/role.entity';

@Resolver(RoleEntity)
class RoleResolver {
  @Query(() => [RoleEntity])
  async getRoles(): Promise<RoleEntity[] | []> {
    return await RoleEntity.find();
  }
}

export default RoleResolver;
