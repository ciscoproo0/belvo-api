import { response } from 'express';
import * as Yup from 'yup';

import { sandbox, live } from '../services/belvo';

class Accounts {
    async retrieve(req, res){
        try {
            let response;

            switch(req.headers.mode) {
                case 'sandbox':
                    response = await sandbox.post(`/api/accounts/`, req.body);
                    break;

                case 'live':
                    response = await live.post(`/api/accounts/`, req.body);
                    break;
            }
            return res.json(response.data);

        } catch (err) {
            return res.status(400).json({message: err.response.data})
        }
    }

    async resume(req, res){
        try {
            let response;

            switch(req.headers.mode) {
                case 'sandbox':
                    response = await sandbox.patch(`/api/accounts/`, req.body);
                    break;

                case 'live':
                    response = await live.patch(`/api/accounts/`, req.body);
                    break;
            }
            return res.json(response.data);

        } catch (err) {
            return res.status(400).json({message: err.response.data})
        }
    }

    async list(req, res){
        let page = req.query.page;
        try {
            let response;

            switch(req.headers.mode) {
                case 'sandbox':
                    response = await sandbox.get(`/api/accounts/${page ? `?page=${page}` : ''}`);
                    break;

                case 'live':
                    response = await live.get(`/api/accounts/${page ? `?page=${page}` : ''}`);
                    break;
            }
            return res.json(response.data);

        } catch (err) {
            return res.status(400).json({message: err.response.data})
        }
    }

    async detail(req, res){
        try {
            let response;

            switch(req.headers.mode) {
                case 'sandbox':
                    response = await sandbox.get(`/api/accounts/${req.params.id}/`);
                    break;

                case 'live':
                    response = await live.get(`/api/accounts/${req.params.id}/`);
                    break;
            }
            return res.json(response.data);

        } catch (err) {
            return res.status(400).json({message: err.response.data})
        }
    }

    async destroy(req, res){
        try {
            let response;

            switch(req.headers.mode) {
                case 'sandbox':
                    response = await sandbox.delete(`/api/accounts/${req.params.id}/`);
                    break;

                case 'live':
                    response = await live.delete(`/api/accounts/${req.params.id}/`);
                    break;
            }
            return res.json(response.data);

        } catch (err) {
            return res.status(400).json({message: err.response.data})
        }
    }
}

export default new Accounts();
