"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);

var _belvo = require('../services/belvo');

class Transactions {
    async retrieve(req, res){
        try {
            let response;

            switch(req.headers.mode) {
                case 'sandbox':
                    response = await _belvo.sandbox.post(`/api/transactions`, req.body);
                    break;

                case 'live':
                    response = await _belvo.live.post(`/api/transactions`, req.body);
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
                    response = await _belvo.sandbox.patch(`/api/transactions`, req.body);
                    break;

                case 'live':
                    response = await _belvo.live.patch(`/api/transactions`, req.body);
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
                    response = await _belvo.sandbox.get(`/api/transactions`);
                    break;

                case 'live':
                    response = await _belvo.live.get(`/api/transactions`);
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
                    response = await _belvo.sandbox.get(`/api/transactions/${req.params.id}`);
                    break;

                case 'live':
                    response = await _belvo.live.get(`/api/transactions/${req.params.id}`);
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
                    response = await _belvo.sandbox.delete(`/api/transactions/${req.params.id}`);
                    break;

                case 'live':
                    response = await _belvo.live.delete(`/api/transactions/${req.params.id}`);
                    break;
            }
            return res.json(response.data);

        } catch (err) {
            return res.status(400).json({message: err})
        }
    }
}

exports. default = new Transactions();