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