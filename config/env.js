import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` })  //pointing env 

export const { PORT, NODE_ENV } = process.env; //Meaning It was coming from environment varibale files

