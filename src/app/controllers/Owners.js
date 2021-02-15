import { sandbox, live } from '../services/belvo';

class Owners {
    async retrieve(req, res){
        try {
            let response;

            switch(req.headers.mode) {
                case 'sandbox':
                    response = await sandbox.post(`/api/owners/`, req.body);
                    break;

                case 'live':
                    response = await live.post(`/api/owners/`, req.body);
                    break;
            }
            return res.json(response.data);

        } catch (err) {
            if(err.response.status){
                return res.status(err.response.status).json(err.response.data)
            }

            return res.status(500).json({message: "an internal error ocurred, contact system's administrator"})
        }
        
    }

    async resume(req, res){
        try {
            let response;

            switch(req.headers.mode) {
                case 'sandbox':
                    response = await sandbox.patch(`/api/owners/`, req.body);
                    break;

                case 'live':
                    response = await live.patch(`/api/owners/`, req.body);
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
                    response = await sandbox.get(`/api/owners/${page ? `?page=${page}` : ''}`);
                    break;

                case 'live':
                    response = await live.get(`/api/owners/${page ? `?page=${page}` : ''}`);
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
                    response = await sandbox.get(`/api/owners/${req.params.id}/`);
                    break;

                case 'live':
                    response = await live.get(`/api/owners/${req.params.id}/`);
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
                    response = await sandbox.delete(`/api/owners/${req.params.id}/`);
                    break;

                case 'live':
                    response = await live.delete(`/api/owners/${req.params.id}/`);
                    break;
            }
            return res.json(response.data);

        } catch (err) {
            return res.status(400).json({message: err.response.data})
        }
    }
}

export default new Owners();