/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import babel from "@rollup/plugin-babel";
import filesize from "rollup-plugin-filesize";
import json from "@rollup/plugin-json";
import sourcemaps from "rollup-plugin-sourcemaps";
import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import nodePolyfills from "rollup-plugin-node-polyfills";
import builtins from "rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";

export default () => [
  {
    input: "src/js/index.js",
    output: {
      sourcemap: true,
      file: "dist/umd/iexjs.js",
      name: "iexjs",
      format: "umd",
    },
    plugins: [
      nodeResolve({ browser: true, preferBuiltins: true }),
      commonjs(),
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),
      filesize(),
      json(),
      builtins(),
      globals(),
      terser(),
      sourcemaps(),
    ],
    watch: {
      clearScreen: false,
    },
  },
  {
    input: "src/js/index.js",
    output: {
      sourcemap: true,
      format: "cjs",
      file: "dist/cjs/iexjs.js",
    },
    plugins: [
      nodeResolve({ browser: false, preferBuiltins: true }),
      commonjs(),
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),
      json(),
      builtins(),
      globals(),
      sourcemaps(),
    ],
    watch: {
      clearScreen: false,
    },
  },
];
