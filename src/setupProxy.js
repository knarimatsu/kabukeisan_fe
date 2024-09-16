const createProxyMiddleware = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/calc-onkabu", {
      target: "http://localhost:8080/calc-onkabu/",
    })
  );
};
