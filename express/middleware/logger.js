const logger = (req, res, next) => {
  console.log("*************logger**********");
  console.log(
    req.method + req.protocol + "://" + req.get("host") + req.originalUrl
  );
  next();
};

module.exports = logger;
