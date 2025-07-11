import { Request } from 'express';

export interface AuthenticatedRequestInterface extends Request {
  user: {
    uid: string;
  };
}
