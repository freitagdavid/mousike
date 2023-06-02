import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());

export default server