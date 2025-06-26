import { Query, Resolver, Arg, Int } from 'type-graphql';
import UserEntity from '../entities/user.entity';

@Resolver(() => UserEntity)
export class UserResolver {
  @Query(() => [UserEntity])
  async getUsers(): Promise<UserEntity[]> {
    return UserEntity.find();
  }

  @Query(() => [UserEntity])
  async doctorsByService(@Arg('serviceId', () => Int) serviceId: number): Promise<UserEntity[]> {
    return UserEntity.find({
      where: {
        service: { id: serviceId },
        role: { id: 2 }, // ou 'Médecin' selon ta base
        is_active: true,
      },
      relations: ['service', 'role'],
    });
  }
}

export default UserResolver;
