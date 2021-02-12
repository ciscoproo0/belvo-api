"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _Links = require('./app/controllers/Links'); var _Links2 = _interopRequireDefault(_Links);
var _Accounts = require('./app/controllers/Accounts'); var _Accounts2 = _interopRequireDefault(_Accounts);
var _Transactions = require('./app/controllers/Transactions'); var _Transactions2 = _interopRequireDefault(_Transactions);
var _Owners = require('./app/controllers/Owners'); var _Owners2 = _interopRequireDefault(_Owners);
var _Balances = require('./app/controllers/Balances'); var _Balances2 = _interopRequireDefault(_Balances);

var _Auth = require('./app/controllers/Auth'); var _Auth2 = _interopRequireDefault(_Auth);

const routes = _express.Router.call(void 0, );

//auth for widget
routes.get('/auth', _Auth2.default.getToken);

//links
routes.post('/links/register', _Links2.default.register);

routes.put('/links/update', _Links2.default.update);

routes.patch('/links/resume', _Links2.default.resume);

routes.get('/links/list', _Links2.default.list);

routes.get('/links/detail/:id', _Links2.default.detail);

routes.delete('/links/destroy/:id', _Links2.default.destroy);

//accounts
routes.post('/accounts/retrieve', _Accounts2.default.retrieve);

routes.patch('/accounts/resume', _Accounts2.default.resume);

routes.get('/accounts/list', _Accounts2.default.list);

routes.get('/accounts/detail/:id', _Accounts2.default.detail);

routes.delete('/accounts/destroy/:id', _Accounts2.default.destroy);

//transactions
routes.post('/transactions/retrieve', _Transactions2.default.retrieve);

routes.patch('/transactions/resume', _Transactions2.default.resume);

routes.get('/transactions/list', _Transactions2.default.list);

routes.get('/transactions/detail/:id', _Transactions2.default.detail);

routes.delete('/transactions/destroy/:id', _Transactions2.default.destroy);

//owners
routes.post('/owners/retrieve', _Owners2.default.retrieve);

routes.patch('/owners/resume', _Owners2.default.resume);

routes.get('/owners/list', _Owners2.default.list);

routes.get('/owners/detail/:id', _Owners2.default.detail);

routes.delete('/owners/destroy/:id', _Owners2.default.destroy);

//balances
routes.post('/balances/retrieve', _Balances2.default.retrieve);

routes.patch('/balances/resume', _Balances2.default.resume);

routes.get('/balances/list', _Balances2.default.list);

routes.get('/balances/detail/:id', _Balances2.default.detail);

routes.delete('/balances/destroy/:id', _Balances2.default.destroy);





exports. default = routes;