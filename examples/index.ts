import { Interceptor } from '../src/index'

const wx = {
    request (obj: any) {
        if (obj.url === 'www') {
            console.log('success')
        }
    }
}


const i = Interceptor.register(wx, {
    request: {
        config (obj) {
            obj.url = 'www'
            return obj
        }
    }
})

i.request()