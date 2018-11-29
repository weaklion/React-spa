require('dotenv').config(); // .env 파일에서 환경변수 불러오기

const { jwtMiddleware } = require('../src/lib/token');
const Koa = require('koa');
const Router = require('koa-router');
var proxy = require('http-proxy-middleware');

const app = new Koa();
const router = new Router();
const api = require('./api');

const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');

mongoose.Promise = global.Promise; // Node 의 네이티브 Promise 사용
// mongodb 연결
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}).then(
    (response) => {
        console.log('Successfully connected to mongodb');
    }
).catch(e => {
    console.error(e);
});

const port = process.env.PORT || 5000; // PORT 값이 설정되어있지 않다면 5000 을 사용합니다.

app.use(bodyParser()); // 바디파서 적용, 라우터 적용코드보다 상단에 있어야합니다.
app.use(jwtMiddleware);//디코더 적용
router.use('/api', api.routes()); // api 라우트를 /api 경로 하위 라우트로 설정
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log('server is listening to port ' + port);
});