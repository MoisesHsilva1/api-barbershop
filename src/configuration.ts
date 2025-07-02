import { validate } from './env.validation';

export default () => {
  const envConfig = {
    DATABASE_URI: process.env.DATABASE_URI,
  };

  const validated = validate(envConfig);

  return {
    database: {
      uri: validated.DATABASE_URI,
    },
  };
};
