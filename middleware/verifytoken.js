const jwt = require("jsonwebtoken");
const { jwtsecretkey } = require("../cred");

exports.VerifyToken = (req, res, next) => {
  let token = req.header("Authorization");
  // if (token != undefined) {
  //   token = req.header("Authorization").split(" ")[1];
  // }
  // console.log(token);

  if (!token) {
    return res.status(401).json({ success: false,message: "Unauthorized" });
  }

  jwt.verify(token, jwtsecretkey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    req.userId = decoded.userId;
    next();
  });
};
// module.exports = { VerifyToken };
