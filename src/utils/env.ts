import dotenv from 'dotenv';
dotenv.config();

export const env = {
  baseUrl: process.env.BASE_URL ?? 'https://www.saucedemo.com',
  username: process.env.STANDARD_USER ?? 'standard_user',
  password: process.env.PASSWORD ?? 'secret_sauce',
};