import Vue from 'vue'
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja.json'

// vee-validateの全ルールimport
/* eslint import/namespace: ["error", { allowComputed: true }] */
import * as rules from 'vee-validate/dist/rules'
for (const rule in rules) {
  extend(rule, rules[rule])
}
// バリデーションメッセージの日本語化
localize({
  ja: { messages: { ...ja.messages } }
})
localize('ja')

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
