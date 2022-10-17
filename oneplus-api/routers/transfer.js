const router = require("koa-router")();
const fetch = require('node-fetch');

router.get('/image', async (ctx, next) => {
    // ctx.body = 'image'
    const url = ctx.query.pic;
    // ctx.body = url;
    // 后端就去访问图片 丢掉浏览器思维 http协议思维
    // 请求头 和 浏览器 就不一样
    // 白名单 接入机制...
    const res = await fetch(url); // B站的图片服务器接受你
    const data = await res.buffer(); // 二进制流 buffer
    console.log(data);
    ctx.set('Content-Type', 'image/jpeg')
    ctx.body = data
})

module.exports = router.routes();