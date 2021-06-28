import typescript from "rollup-plugin-typescript";
import { terser } from "rollup-plugin-terser";
import babel from 'rollup-plugin-babel';
import brotliPlugins from "rollup-plugin-brotli";

const configurePlugins = ({module, brotli = false}) => {
  const puluns = [
    typescript(),
    babel({
      presets: [['@babel/preset-env', {
        targets: {
          browsers: ['ie 11'],
        },
      }]],
    }),
    terser({
      module,
      mangle: true,
      compress: true,
    }),
  ]
  if (brotli) {
    puluns.push(brotliPlugins());
  }

  return puluns;
}

export default [
  {
    input: "./src/index.ts",
    plugins: configurePlugins({module: true}),
    output: [
      {
        format: "es",
        file: "build/index.js",
        compact: true,
      },
    ],
  },
  {
    input: "./src/iife.ts",
    plugins: configurePlugins({module: false, brotli: true}),
    output: [
      {
        format: "iife",
        file: "build/iife.js",
        compact: true,
      },
    ],
  }
];

