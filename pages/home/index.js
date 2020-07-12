
import $ from 'jquery'
let  tpl = require('./tpl/main.juicer')

$('#app').html(tpl())
require('./less/main.less')
