const secureApp = (req, res, next) => {
  const { token } = req.query;
  if (!token) res.status(403).send("No token found. You shall not pass!");
  next();
};

module.exports = secureApp;
