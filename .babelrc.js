/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

 const plugins = [
  "@babel/plugin-proposal-class-properties", 
  "@babel/plugin-proposal-object-rest-spread",
];

if (process.env.NODE_ENV === "test") {
  plugins.push("@babel/plugin-transform-runtime");
}


module.exports = {
    presets: [
      "@babel/env", 
    ],    
    plugins,
  };