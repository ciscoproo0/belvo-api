import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import Youch from 'youch';

import routes from './routes';

class App {
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
        this.exceptionHandler();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(cors());
        this.server.use(express.static('public'))
    }

    routes() {
        this.server.use(routes);
    }

    exceptionHandler() {
        this.server.use(async (err, req, res, next) => {
            const errors = await new Youch(err, req).toJson();

            return res.status(500).json(errors);
        })
    }
}

export default new App().server;