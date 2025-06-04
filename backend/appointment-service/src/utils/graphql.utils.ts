import { GraphQLResolveInfo } from 'graphql';
import { ArgsDictionary } from 'type-graphql';

export function generateQueryKey(info: GraphQLResolveInfo, args: ArgsDictionary) {
  const queryName = info.fieldName;
  const argsHash = JSON.stringify(args);
  return `query:${queryName}:${Buffer.from(argsHash).toString('base64')}`;
}
