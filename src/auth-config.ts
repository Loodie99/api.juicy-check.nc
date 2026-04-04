import { betterAuth } from 'better-auth';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config(); // Charge le .env avant tout

export const auth = betterAuth({
  database: new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'myapp',
  }),
  emailAndPassword: {
    enabled: true,
  },
  secret: 'change_this_secret_key_min_32_chars',
  baseURL: 'http://localhost:3000',
  basePath: '/auth',
});
