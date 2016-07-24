/* global require, process */

import express from 'express';
import config from './config';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Server from './controllers';

mongoose.connect(config.db);
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const server = new Server(app);

server.init();
