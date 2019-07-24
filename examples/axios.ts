import axios from 'axios'
import { Interceptor } from '../src/index'

const i = Interceptor.register(axios as any, {
    get: {
        config (url: string) {
            return 'https://api.imjad.cn/cloudmusic' + url
        }
    }
})

i.get('/?id=28012031').then(function (res: any) {
    console.log(res.data)
})