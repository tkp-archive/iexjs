/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import * as path from "path";
import babel from "@rollup/plugin-babel";
import filesize from "rollup-plugin-filesize";
import json from "@rollup/plugin-json";
import sourcemaps from "rollup-plugin-sourcemaps";
import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import builtins from "rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";
import nodePolyfills from "rollup-plugin-node-polyfills";
import inject from "@rollup/plugin-inject";

import pkg from "./package.json";

export default () => [
  {
    input: "src/js/index.js",
    output: {
      sourcemap: true,
      file: pkg.module,
      name: "iexjs",
      format: "esm",
    },
    plugins: [
      nodeResolve({ browser: true }),
      commonjs(),
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),
      nodePolyfills(),
      builtins(),
      globals(),
      filesize(),
      json(),
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
      inject({
        EventSource: "eventsource", // inject for node
        fetch: "cross-fetch", // inject for node
      }),
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
