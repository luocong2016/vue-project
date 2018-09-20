import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
}

/* brow language */
export function getLang() {
  return (window.navigator.language || window.navigator.browserLanguage).toLowerCase() === 'zh-cn' ? 'zh' : 'en';
}

export const i18n = new VueI18n({
  // set locale
  // options: en or zh
  locale: Cookies.get('language') || getLang(),
  // set locale messages
  messages
})
