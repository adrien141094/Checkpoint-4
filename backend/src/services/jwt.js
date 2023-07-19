const jwt = require("jsonwebtoken");

const createJwt = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const checkUser = (req, res, next) => {
  if (req.cookies.super_token) {
    const token = verifyToken(req.cookies.super_token);
    if (token.role === 0 || token.role === 1) {
      next();
    } else {
      res.status(401).json({ msg: "Unauthorized" });
    }
  } else {
    res.status(401).json({ msg: "Unauthorized" });
  }
};
const checkAdmin = (req, res, next) => {
  if (req.cookies.super_token) {
    const token = verifyToken(req.cookies.super_token);
    if (token.role === 1) {
      next();
    } else {
      res.status(401).json({ msg: "Unauthorized" });
    }
  } else {
    res.status(401).json({ msg: "Unauthorized" });
  }
};

module.exports = { createJwt, checkUser, checkAdmin };
