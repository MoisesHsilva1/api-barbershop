import { validate } from './env.validation';

export default () => {
  const envConfig = {
    DATABASE_URI: process.env.DATABASE_URI,
    FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
  };

  const validated = validate(envConfig);

  return {
    database: {
      uri: validated.DATABASE_URI,
    },
    firebase: {
      client_email: validated.FIREBASE_CLIENT_EMAIL,
      project_id: validated.FIREBASE_PROJECT_ID,
    },
  };
};
