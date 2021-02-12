"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('dotenv/config');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _youch = require('youch'); var _youch2 = _interopRequireDefault(_youch);

var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

class App {
    constructor() {
        this.server = _express2.default.call(void 0, );

        this.middlewares();
        this.routes();
        this.exceptionHandler();
    }

    middlewares() {
        this.server.use(_express2.default.json());
        this.server.use(_cors2.default.call(void 0, ));
        this.server.use(_express2.default.static('public'))
    }

    routes() {
        this.server.use(_routes2.default);
    }

    exceptionHandler() {
        this.server.use(async (err, req, res, next) => {
            const errors = await new (0, _youch2.default)(err, req).toJson();

            return res.status(500).json(errors);
        })
    }
}

exports. default = new App().server;