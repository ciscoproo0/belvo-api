import * as Yup from 'yup';

import { sandbox, live } from '../services/belvo';

class Links {
    async register(req, res){

        try {
            let response;

            switch(req.headers.mode) {
                case 'sandbox':
                    response = await sandbox.post('/api/links/', req.body);
                    break;

                case 'live':
                    response = await live.post('/api/links/', req.body);
                    break;
            }

            return res.status(response.status).json(response.data);

        } catch (err) {
            if(err.response.status){
                return res.status(err.response.status).json(err.response.data)
            }

            return res.status(500).json({message: "an internal error ocurred, contact system's administrator"})
        }
    }

    async update(req, res){
        const { id, password } = req.body;

        try {
            let response;

            switch(req.headers.mode) {
                case 'sandbox':
                    response = await sandbox.put(`/api/links/${id}/`, {password});
                    break;

                case 'live':
                    response = await live.put(`/api/links/${id}/`, {password});
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
                    response = await sandbox.patch(`/api/links/`, req.body);
                    break;

                case 'live':
                    response = await live.patch(`/api/links/`, req.body);
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
                    response = await sandbox.get(`/api/links/${page ? `?page=${page}` : ''}`);
                    break;

                case 'live':
                    response = await live.get(`/api/links/${page ? `?page=${page}` : ''}`);
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
                    response = await sandbox.get(`/api/links/${req.params.id}/`);
                    break;

                case 'live':
                    response = await live.get(`/api/links/${req.params.id}/`);
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
                    response = await sandbox.delete(`/api/links/${req.params.id}/`);
                    break;

                case 'live':
                    response = await live.delete(`/api/links/${req.params.id}/`);
                    break;
            }

            return res.json(response.data);

        } catch (err) {
            return res.status(400).json({message: err.response.data})
        }
    }
}

export default new Links();