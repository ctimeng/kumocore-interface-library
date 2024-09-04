import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: path.resolve(__dirname, 'dist/index.cjs.js'),
      format: 'cjs',
      exports: 'named',
    },
    {
      file: path.resolve(__dirname, 'dist/index.esm.js'),
      format: 'esm',
    },
  ],
  plugins: [
    peerDepsExternal(),
    postcss(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
  ],
  external: ['react', 'react-dom'],
};
