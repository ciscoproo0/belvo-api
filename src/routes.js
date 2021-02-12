import { Router } from 'express';

import Links from './app/controllers/Links';
import Accounts from './app/controllers/Accounts';
import Transactions from './app/controllers/Transactions';
import Owners from './app/controllers/Owners';
import Balances from './app/controllers/Balances';

import Auth from './app/controllers/Auth';

const routes = Router();

//auth for widget
routes.get('/auth', Auth.getToken);

//links
routes.post('/links/register', Links.register);

routes.put('/links/update', Links.update);

routes.patch('/links/resume', Links.resume);

routes.get('/links/list', Links.list);

routes.get('/links/detail/:id', Links.detail);

routes.delete('/links/destroy/:id', Links.destroy);

//accounts
routes.post('/accounts/retrieve', Accounts.retrieve);

routes.patch('/accounts/resume', Accounts.resume);

routes.get('/accounts/list', Accounts.list);

routes.get('/accounts/detail/:id', Accounts.detail);

routes.delete('/accounts/destroy/:id', Accounts.destroy);

//transactions
routes.post('/transactions/retrieve', Transactions.retrieve);

routes.patch('/transactions/resume', Transactions.resume);

routes.get('/transactions/list', Transactions.list);

routes.get('/transactions/detail/:id', Transactions.detail);

routes.delete('/transactions/destroy/:id', Transactions.destroy);

//owners
routes.post('/owners/retrieve', Owners.retrieve);

routes.patch('/owners/resume', Owners.resume);

routes.get('/owners/list', Owners.list);

routes.get('/owners/detail/:id', Owners.detail);

routes.delete('/owners/destroy/:id', Owners.destroy);

//balances
routes.post('/balances/retrieve', Balances.retrieve);

routes.patch('/balances/resume', Balances.resume);

routes.get('/balances/list', Balances.list);

routes.get('/balances/detail/:id', Balances.detail);

routes.delete('/balances/destroy/:id', Balances.destroy);





export default routes;