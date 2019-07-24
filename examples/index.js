const { Interceptor } = require('../dist/interceptor')

const wx = {
    request (obj) {
        if (obj.url === 'www') {
            console.log('success')
        }
    }
}


const proxy = Interceptor.register(wx, {
    request: {
        config (obj) {
            obj.url = 'www'
            return obj
        }
    }
}, {
    callbacks: ['success', 'fail', 'complete'],
    promiseResolveFn: 'success',
    promiseRejectFn: 'fail'
})

proxy.request()