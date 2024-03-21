const pkg = require('./package.json')
const resolve = require('@rollup/plugin-node-resolve')
const { babel } = require('@rollup/plugin-babel')
const commonjs = require('@rollup/plugin-commonjs')
const typescript = require('@rollup/plugin-typescript')

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      name: pkg.name,
      format: 'esm',
      file: pkg.module,
      sourcemap: true,
    },
    {
      name: pkg.name,
      format: 'cjs',
      file: pkg.cjs,
      sourcemap: true,
    },
  ],
  external: ['electron'],
  plugins: [
    resolve({
      extensions: ['.ts'],
    }),
    typescript(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: /node_modules/,
      presets: [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: 3,
          modules: false,
          targets: ['> 0.5%', 'ie > 11'],
          spec: true,
          forceAllTransforms: true,
        },
      ],
    }),
  ],
}
