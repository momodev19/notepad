module.exports = (app, conn) => {
  require("fs").readdirSync(__dirname).forEach(function(file) {
    if('index.js' != file) {
      require("./" + file)(app, conn);
    }
  });
}
