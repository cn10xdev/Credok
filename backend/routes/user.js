const { login, signUp } = require("../controllers/user");

const router = require("express").Router();

router.post("/signup", signUp).post("/login", login);
module.exports = router;
