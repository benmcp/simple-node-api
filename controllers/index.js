import express from 'express';
import config from '../config';
import path from 'path';

import {Bear} from '../models/bear';
import BearController from './bear';

class Server {

  constructor(app) {
    this.app = app;
  }

  init() {

    const router = express.Router();

    router.use((req, res, next)=> {
      console.log('Something is happening.');
      next();
    });

    // setup Routes

    router.get('/', (req, res)=> {
      res.json({message: 'hooray! welcome to the api!'});
    });

    const bearCont = new BearController(router, Bear);

    bearCont.init();

    this.app.use('/api', router);
    this.app.set('views', path.join(__dirname, '../views'));
    this.app.set('view engine', 'ejs');

    this.app.use('/', router);
    router.get('/hello', (req, res)=> {
      res.render('index');
    });

    // START THE SERVER
    this.app.listen(config.local);
    const output = `Magic hthis.appens on port ${config.local}`;
    console.log(output);
  }
}

export default Server;
