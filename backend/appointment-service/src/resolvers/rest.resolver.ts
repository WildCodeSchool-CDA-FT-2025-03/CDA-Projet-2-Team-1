import { Arg, Query, Resolver, Mutation } from 'type-graphql';

import RestEntity from '../entities/rest.entity';

@Resolver(RestEntity)
class RestResolver {
  @Query(() => [RestEntity])
  // TODO: Auth
  async getByUserID(@Arg('userId', () => String) userId: string): Promise<RestEntity[]> {
    // TODO: id from cooki
    return RestEntity.find({
      where: { user: { id: userId } },
      relations: ['user'],
    });
  }

  @Mutation(() => RestEntity)
  async createRest(
    @Arg('userId', () => String) userId: string,
    @Arg('type', () => String) type: string,
    @Arg('dateStart', () => Date) dateStart: Date,
    @Arg('dateEnd', () => Date) dateEnd: Date
  ): Promise<RestEntity> {
    const rest = RestEntity.create({
      type,
      date_start: dateStart,
      date_end: dateEnd,
      user: { id: userId },
    });
    await rest.save();
    return rest;
  }
}

export default RestResolver;
