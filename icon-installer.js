// eslint: 0
const child = require("node:child_process");
const icons = require("./icons.json");

const packages = Object.keys(icons)
  .map((i) => `@fontsource/${i}`)
  .join(" ");

// printing out the command on the termainl
console.log(`npm install ${packages}`);

child.execSync(`npm install ${packages} --save-prod`, {
  stdio: [0, 1, 2],
});
