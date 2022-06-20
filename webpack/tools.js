const path = require("path");
const glob = require("glob");

function getFileCollection() {
  const globFilePath = "./components/**/*.*(js|jsx|ts|tsx)";
  const files = glob.sync(globFilePath);
  return files;
}

function entryConfig() {
  const entryObj = {};
  getFileCollection().forEach((item) => {
    const filePath = item.replace("./components/", "");
    entryObj[filePath] = path.resolve(__dirname, "../" + item);
  });
  return entryObj;
}

module.exports = {
  entryConfig,
};
