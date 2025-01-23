import * as dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const SWAGGER_URL = process.env.SWAGGER_URL;

export {
  PORT,
  SWAGGER_URL
};
