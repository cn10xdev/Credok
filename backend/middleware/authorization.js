exports.authorization = async (req, res, next) => {
  const token = req.headers["Authorization"];
  if (!token) {
    return res.status(403).json({ error: "Unauthorized" });
  }
  token = token.split(" ")[1];
  const verify = require("jsonwebtoken").verify(token, process.env.SECRET_KEY);
  if (!verify) {
    return res.status(403).json({ error: "Unauthorized" });
  }
  next();
}
