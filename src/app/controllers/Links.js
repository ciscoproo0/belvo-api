import * as Yup from 'yup';

import { sandbox, live } from '../services/belvo';

class Links {
    async register(req, res){

        try {
            let response;

            switch(req.headers.mode) {
                case 'sandbox':
                    response = await sandbox.post('/api/links', req.body);
                    break;

                case 'live':
                    response = await live.post('/api/links', req.body);
                    break;
            }

            return res.json(response.data);

        } catch (err) {
            return res.status(400).json({message: err})
        }
    }

    async update(req, res){
        const { id, password } = req.body;

        try {
            let response;

            switch(req.headers.mode) {
                case 'sandbox':
                    response = await sandbox.put(`/api/links/${id}`, {password});
                    break;

                case 'live':
                    response = await live.put(`/api/links/${id}`, {password});
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
                    response = await sandbox.patch(`/api/links/`, req.body);
                    break;

                case 'live':
                    response = await live.patch(`/api/links/`, req.body);
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
                    response = await sandbox.get(`/api/links/`);
                    break;

                case 'live':
                    response = await live.get(`/api/links/`);
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
                    response = await sandbox.get(`/api/links/${req.params.id}`);
                    break;

                case 'live':
                    response = await live.get(`/api/links/${req.params.id}`);
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
                    response = await sandbox.delete(`/api/links/${req.params.id}`);
                    break;

                case 'live':
                    response = await live.delete(`/api/links/${req.params.id}`);
                    break;
            }

            return res.json(response.data);

        } catch (err) {
            return res.status(400).json({message: err})
        }
    }
}

export default new Links();