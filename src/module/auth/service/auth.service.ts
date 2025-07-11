import {
  Inject,
  Injectable,
  forwardRef,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../../user/service/user.service';
import { User } from '../../user/model/user.model';
import * as admin from 'firebase-admin';

@Injectable()
export class AuthService {
  constructor(
    @Inject('FIREBASE_ADMIN') private readonly firebaseApp: admin.app.App,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  async login(idToken: string): Promise<User> {
    const decoded = await this.firebaseApp.auth().verifyIdToken(idToken);
    const uid = decoded.uid;

    const user = await this.userService.findByUid(uid);

    if (!user) {
      throw new UnauthorizedException('User not found.');
    }

    return user;
  }
}
