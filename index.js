const koa = require('koa');
const app = new koa();

const config = require('config');
// keys for in-koa KeyGrip cookie signing (used in session, maybe other modules)

const path = require('path');
const fs = require('fs');

const handlers = fs.readdirSync(path.join(__dirname, 'handlers')).sort();

handlers.forEach(handler => require('./handlers/' + handler).init(app));

const Router = require('koa-router');
const router = new Router();

app.use(router.routes());

app.listen(3000);
