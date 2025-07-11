import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../model/user.model';
import * as admin from 'firebase-admin';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @Inject('FIREBASE_ADMIN') private readonly firebaseApp: admin.app.App,
  ) {}

  async findByUid(uid: string): Promise<User | null> {
    return this.userModel.findOne({ uid }).exec();
  }

  async findManyByIds(uid: string[]): Promise<User[]> {
    return this.userModel.find({ uid: { $in: uid } }).exec();
  }

  async create(user: {
    name: string;
    email: string;
    phone: string;
    password: string;
  }) {
    const firebaseUser = await this.firebaseApp.auth().createUser({
      displayName: user.name,
      email: user.email,
      password: user.password,
    });

    const createdUser = new this.userModel({
      uid: firebaseUser.uid,
      name: user.name,
      email: user.email,
      phone: user.phone,
    });

    return createdUser.save();
  }
}
