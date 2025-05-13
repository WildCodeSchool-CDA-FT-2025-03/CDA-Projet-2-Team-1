import { Query, Resolver } from 'type-graphql';

import UserEntity from '../entities/user.entity';

@Resolver(UserEntity)
class UserResolver {
  @Query(() => [UserEntity])
  async getUsers(): Promise<UserEntity[]> {
    return UserEntity.find();
  }
}

export default UserResolver;
