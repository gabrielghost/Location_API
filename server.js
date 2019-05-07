import express from 'express';
const app = express();
import http from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path'
import router from './router';
import config from './config/config';
import mongoose from 'mongoose';

mongoose.connect(config.db, { useNewUrlParser: true });
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/json', limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 1000000 }));
console.log(path.resolve(__dirname, './uploads'));
app.use('/uploads', express.static(path.resolve(__dirname, './uploads')));
router(app);

const port = process.env.PORT || 8888;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port); // eslint-disable-line

module.exports = server;
