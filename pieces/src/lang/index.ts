import {createI18n} from 'vue-i18n'
import {en} from "@/lang/en"
import {ja} from "@/lang/ja"
import {zh} from "@/lang/zh"

const messages = {
    en:en,
    ja:ja,
    zh:zh
}

let localeLang:string
if (navigator.language == 'zh-CN'){
    localeLang = 'zh'
}else{
    localeLang = navigator.language
}

export const i18n = createI18n({
    legacy: false,
    locale: localeLang, // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
})
