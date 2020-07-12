let getConfig = require('../../config/config')
let obj = getConfig({
    htmlPath:'home',
    jsPath:'home/assets',
    title:'home'
})

module.exports = obj;