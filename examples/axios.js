const axios = require('axios')
const { Interceptor } = require('../dist/interceptor')

const i = Interceptor.register(axios, {
    get: {
        config (url) {
            return 'https://api.imjad.cn/cloudmusic' + url
        }
    }
})

i.get('/?id=28012031').then(res => {
    console.log(res.data)
})