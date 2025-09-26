import { payloadType } from './payload.type';

export type Context = {
  user?: payloadType;
  authorization?: string;
};
