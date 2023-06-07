import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan('combined'));

export default server