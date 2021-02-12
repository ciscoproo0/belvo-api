import { response } from 'express';
import * as Yup from 'yup';

import { sandbox, live } from '../services/belvo';

class Accounts {
    async retrieve(req, res){
        try {
            let response;

            switch(req.headers.mode) {
                case 'sandbox':
                    response = await sandbox.post(`/api/accounts`, req.body);
                    break;

                case 'live':
                    response = await live.post(`/api/accounts`, req.body);
                    break;
            }
            return res.json(response.data);

        } catch (err) {
            return res.status(400).json({message: err})
        }
    }

    async resume(req, res){
        try {
            let response;

            switch(req.headers.mode) {
                case 'sandbox':
                    response = await sandbox.patch(`/api/accounts`, req.body);
                    break;

                case 'live':
                    response = await live.patch(`/api/accounts`, req.body);
                    break;
            }
            return res.json(response.data);

        } catch (err) {
            return res.status(400).json({message: err})
        }
    }

    async list(req, res){
        try {
            let response;

            switch(req.headers.mode) {
                case 'sandbox':
                    response = await sandbox.get(`/api/accounts`);
                    break;

                case 'live':
                    response = await live.get(`/api/accounts`);
                    break;
            }
            return res.json(response.data);

        } catch (err) {
            return res.status(400).json({message: err})
        }
    }

    async detail(req, res){
        try {
            let response;

            switch(req.headers.mode) {
                case 'sandbox':
                    response = await sandbox.get(`/api/accounts/${req.params.id}`);
                    break;

                case 'live':
                    response = await live.get(`/api/accounts/${req.params.id}`);
                    break;
            }
            return res.json(response.data);

        } catch (err) {
            return res.status(400).json({message: err})
        }
    }

    async destroy(req, res){
        try {
            let response;

            switch(req.headers.mode) {
                case 'sandbox':
                    response = await sandbox.delete(`/api/accounts/${req.params.id}`);
                    break;

                case 'live':
                    response = await live.delete(`/api/accounts/${req.params.id}`);
                    break;
            }
            return res.json(response.data);

        } catch (err) {
            return res.status(400).json({message: err})
        }
    }
}

export default new Accounts();
