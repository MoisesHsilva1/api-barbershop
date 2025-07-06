import { forwardRef, Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../user/model/user.model';
import * as admin from 'firebase-admin';
import { UserModule } from '../user/user.module';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    forwardRef(() => UserModule),
  ],
  controllers: [],
  providers: [
    {
      provide: 'FIREBASE_ADMIN',
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const app = admin.initializeApp({
          credential: admin.credential.cert({
            projectId: configService.get<string>('firebase.project_id'),
            clientEmail: configService.get<string>('firebase.client_email'),
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(
              /\\n/g,
              '\n',
            ) as string,
          }),
        });
        return app;
      },
    },
  ],
  exports: ['FIREBASE_ADMIN'],
})
export class AuthModule {}
