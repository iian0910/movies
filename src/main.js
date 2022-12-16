import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoadingPlugin from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import router from './router.js'

Vue.config.productionTip = false

// 全域元件
Vue.component('LoadingPlugin', LoadingPlugin)

// 全域 Filter
Vue.filter('date', function(date) {
  const splitOrgDate = date.split('-')
  return splitOrgDate[0] + '/' + splitOrgDate[1] + '/' + splitOrgDate[2]
})

Vue.filter('language', function(code) {
  const mapping = {
    'ar': '阿拉伯文',
    'hr': '克羅埃西亞文',
    'da': '丹麥文',
    'el': '希臘文',
    'et': '愛沙尼亞文',
    'fi': '芬蘭文',
    'ga': '愛爾蘭文',
    'hu': '匈牙利文',
    'it': '義大利文',
    'ko': '韓文',
    'lt': '立陶宛文',
    'no': '挪威文',
    'pt': '葡萄牙文',
    'ro': '羅馬尼亞文',
    'sr-CS': '塞爾維亞文',
    'sl': '斯洛維尼亞文',
    'tr': '土耳其文',
    'bg': '保加利亞文',
    'cs': '捷克文',
    'de': '德文',
    'en': '英文',
    'es': '西班牙文',
    'fr': '法文',
    'hi': '印度文',
    'he': '希伯來文',
    'ja': '日文',
    'lv': '拉脫維亞文',
    'nl': '荷蘭文',
    'pl': '波蘭文',
    'sv': '瑞典文',
    'ru': '俄文',
    'sk': '斯洛伐克文',
    'th': '泰文',
    'uk-UA': '烏克蘭文',
    'zh': '中文',
    'fa': '波斯語',
  }

  let language = ''

  Object.keys(mapping).forEach((key) => {
    if (key === code) {
      language = mapping[key]
    }
  })

  return language
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
