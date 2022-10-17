const koa = require("koa");
const app = new koa();
const cors = require('koa-cors');
const router = require('koa-router')();
const mainRouter = require('./routers/index')
// const bannersRouter = require('./routers/banners');
const showRouter = require('./routers/show')
const transferRouter = require ('./routers/transfer')

// 挂载跨域中间件
app.use(cors());
app.use(mainRouter);
// router.use('./banners', bannersRouter)
router.use('/show', showRouter);
router.use('/transfer', transferRouter)
app.use(router.routes())

app.listen(1111, () => {
    console.log("已运行！")
})