"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }var _express = require('express');
var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);

var _belvo = require('../services/belvo');

class Accounts {
    async retrieve(req, res){
        try {
            let response;

            switch(req.headers.mode) {
                case 'sandbox':
                    response = await _belvo.sandbox.post(`/api/accounts`, req.body);
                    break;

                case 'live':
                    response = await _belvo.live.post(`/api/accounts`, req.body);
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
                    response = await _belvo.sandbox.patch(`/api/accounts`, req.body);
                    break;

                case 'live':
                    response = await _belvo.live.patch(`/api/accounts`, req.body);
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
                    response = await _belvo.sandbox.get(`/api/accounts`);
                    break;

                case 'live':
                    response = await _belvo.live.get(`/api/accounts`);
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
                    response = await _belvo.sandbox.get(`/api/accounts/${req.params.id}`);
                    break;

                case 'live':
                    response = await _belvo.live.get(`/api/accounts/${req.params.id}`);
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
                    response = await _belvo.sandbox.delete(`/api/accounts/${req.params.id}`);
                    break;

                case 'live':
                    response = await _belvo.live.delete(`/api/accounts/${req.params.id}`);
                    break;
            }
            return res.json(response.data);

        } catch (err) {
            return res.status(400).json({message: err})
        }
    }
}

exports. default = new Accounts();
