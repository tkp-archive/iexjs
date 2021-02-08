import babel from "@rollup/plugin-babel";
import filesize from "rollup-plugin-filesize";
import json from "@rollup/plugin-json";
import sourcemaps from "rollup-plugin-sourcemaps";
import {terser} from "rollup-plugin-terser";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const plugins = [
    commonjs(),
    nodeResolve(),
    babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
    }),
    filesize(),
    json(),
    terser(),
    sourcemaps(),
];

export default (args) => {
    const watch = !!args.watch;
    return [
        {
            input: "src/js/index.js",
            output: {
                sourcemap: true,
                file: "dist/umd/iexjs.js",
            },
            plugins,
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
            plugins,
            watch: {
                clearScreen: false,
            },
        },
    ];
};
