import * as Yup from 'yup';

import { sandbox, live } from '../services/belvo';

class Balances {
    async retrieve(req, res){
        try {
            let response;

            switch(req.headers.mode) {
                case 'sandbox':
                    response = await sandbox.post(`/api/balances/`, req.body);
                    break;

                case 'live':
                    response = await live.post(`/api/balances/`, req.body);
                    break;
            }
            return res.json(response.data);

        } catch (err) {
            if(err.response.status === 428){
                return res.status(428).json(
                    err.response.data
                )
            }
            return res.status(400).json({message: err.response.data})
        }
        
    }

    async resume(req, res){
        try {
            let response;

            switch(req.headers.mode) {
                case 'sandbox':
                    response = await sandbox.patch(`/api/balances/`, req.body);
                    break;

                case 'live':
                    response = await live.patch(`/api/balances/`, req.body);
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
                    response = await sandbox.get(`/api/balances/${page ? `?page=${page}` : ''}`);
                    break;

                case 'live':
                    response = await live.get(`/api/balances/${page ? `?page=${page}` : ''}`);
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
                    response = await sandbox.get(`/api/balances/${req.params.id}/`);
                    break;

                case 'live':
                    response = await live.get(`/api/balances/${req.params.id}/`);
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
                    response = await sandbox.delete(`/api/balances/${req.params.id}/`);
                    break;

                case 'live':
                    response = await live.delete(`/api/balances/${req.params.id}/`);
                    break;
            }
            return res.json(response.data);

        } catch (err) {
            return res.status(400).json({message: err.response.data})
        }
    }
}

export default new Balances();