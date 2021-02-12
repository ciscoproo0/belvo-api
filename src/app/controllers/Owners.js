import * as Yup from 'yup';

import { sandbox, live } from '../services/belvo';

class Owners {
    async retrieve(req, res){
        try {
            let response;

            switch(req.headers.mode) {
                case 'sandbox':
                    response = await sandbox.post(`/api/owners`, req.body);
                    break;

                case 'live':
                    response = await live.post(`/api/owners`, req.body);
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
                    response = await sandbox.patch(`/api/owners`, req.body);
                    break;

                case 'live':
                    response = await live.patch(`/api/owners`, req.body);
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
                    response = await sandbox.get(`/api/owners`);
                    break;

                case 'live':
                    response = await live.get(`/api/owners`);
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
                    response = await sandbox.get(`/api/owners/${req.params.id}`);
                    break;

                case 'live':
                    response = await live.get(`/api/owners/${req.params.id}`);
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
                    response = await sandbox.delete(`/api/owners/${req.params.id}`);
                    break;

                case 'live':
                    response = await live.delete(`/api/owners/${req.params.id}`);
                    break;
            }
            return res.json(response.data);

        } catch (err) {
            return res.status(400).json({message: err})
        }
    }
}

export default new Owners();