const { Client } = require("../dist/cjs/iexjs");

const methods = Object.keys(Client.prototype).sort();

let ret = "";
methods.forEach((key) => (ret += `.. js:autofunction:: ${key}\n\n`));

console.log(ret);
