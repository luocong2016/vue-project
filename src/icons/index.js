import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg组件

// register globally
Vue.component('svg-icon', SvgIcon)

/*
  require.context('./dir', true, /\.js$/);
  param1 表示相对的文件目录
  param2 是否包括子目录中的文件
  param3 引入的文件匹配的正则表达式
*/

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

console.log(requireAll)