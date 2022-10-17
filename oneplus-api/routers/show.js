const router = require('koa-router')();
const {
    fetchShowByCount
} = require('../api/index')

router.get('/:count', async (ctx, next) => {
    const { count } = ctx.params
    try{
        // 分层 api
        const data = await fetchShowByCount(count)
        ctx.body = data
    } catch(e) {
        next(e)
    }
})

module.exports = router.routes()