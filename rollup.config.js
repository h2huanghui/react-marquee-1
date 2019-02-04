import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
  input: './src/main.js',
  output: {
    file: './dist/scroll.js',
    name: 'scroll',
    format: 'umd'
  },
  plugins:[
    resolve(),  babel({
      exclude: 'node_modules/**' 
    })
  ]
}