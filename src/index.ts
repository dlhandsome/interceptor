interface IConfigOption {
  config: (o: any) => any
  [propName: string]: (o: any) => any
}

type ProviderType = {
  [propName: string]: IConfigOption
} 

type ApiType = { 
  [P in keyof ProviderType]: Function
}

export class Interceptor {
  private _interceptor: object = {}
  constructor () {}
  /**
   * 
   * @param api 被拦截的api
   * @param provider 
   */
  static register (api: ApiType, provider: ProviderType) {
    const i = new Interceptor()
    return i.inject(api, provider)
  }

  inject (api: ApiType, provider: ProviderType) {
    const self = this
    const _interceptor = self._interceptor
    const _interceptorMethods = Object.keys(provider)

    Object
      .keys(api)
      .forEach(method => {
        Object.defineProperty(_interceptor, method, {
          get () {
            return async (obj: any) => {
              obj = obj || {}
              if (_interceptorMethods.indexOf(method) > -1) {
                try {
                  obj = await self.configInject(obj, provider[method])
                } catch (err) {
                  throw new Error(err)
                }
              }
              return api[method](obj)
            }
          }
        })
      })
    return _interceptor
  }

  async configInject (obj: object, option: IConfigOption) {
    const _interceptor = this._interceptor

    if (option.config) {
      obj = await option.config.call(_interceptor, obj)
    }
    return obj
  }
}