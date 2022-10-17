// 单点入口文件
const fetch = require('node-fetch')
const URL_SHOW = 
    "https://www.oneplusbbs.com/forum.php?mobile=2&json=1&page={count}"

const fetchShowByCount = (count) => {
    return fetch(URL_SHOW.replace("{count}", count))
        .then(res => res.json())
        .then(json => json)
}

module.exports = {
    fetchShowByCount
}