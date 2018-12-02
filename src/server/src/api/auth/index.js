const Router = require('koa-router');
const auth = new Router();
const authCtrl = require('./auth.controller');

auth.post('/register/local', authCtrl.localRegister);
auth.post('/Login/local', authCtrl.localLogin);
auth.get('/exists/:key(email|username)/:value',authCtrl.exists); 
//key(email|username)은 값이 email이나 username일때만 허용한다는 것 
auth.post('/logout',authCtrl.logout);
auth.get('/check',authCtrl.check);
module.exports = auth;