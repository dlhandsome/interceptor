const path = require('path')
const buble = require('rollup-plugin-buble')
const replace = require('rollup-plugin-replace')
const npmResolve = require('rollup-plugin-node-resolve')
const common = require('rollup-plugin-commonjs')
const typescript = require('rollup-plugin-typescript')
const version = process.env.VERSION || require('../../package.json').version
const banner =
  `/**
 * interceptor v${version}
 * (c) ${new Date().getFullYear()} dlhandsome
 * @license MIT
 */`

const resolve = _path => path.resolve(__dirname, '../../', _path)

const configs = {
  umdDev: {
    input: resolve('src/index.ts'),
    file: resolve('dist/interceptor.js'),
    format: 'umd',
    env: 'development'
  },
  umdProd: {
    input: resolve('src/index.ts'),
    file: resolve('dist/interceptor.min.js'),
    format: 'umd',
    env: 'production'
  }
}

function genConfig (name) {
  const opts = configs[name]
  const config = {
    input: opts.input,
    plugins: [
      npmResolve(),
      typescript({
        lib: ["es5", "es6", "dom"],
        target: "es5"
      }),
      common(),
      replace({
        __VERSION__: JSON.stringify(version)
      }),
      buble(),
    ],
    output: {
      banner,
      file: opts.file,
      format: opts.format,
      name: 'WeCropper'
    }
  }
  
  return config
}

if (process.env.TARGET) {
  module.exports = genConfig(process.env.TARGET)
} else {
  module.exports = Object.keys(configs).map(genConfig)
}
