const bcryptjs = require("bcryptjs");

const userSchema = require("../models/user");

require("dotenv").config();

exports.signUp = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const user = userSchema({
    username,
    email,
    password: await bcryptjs.hash(password, 12),
  });

  try {
    await user.save();
    res.status(201).json({ message: "user register successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const user = await userSchema.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Email or Password Incorrect" });
    }
    const passwordCheck = bcryptjs.compare(password, user.password);
    if (!passwordCheck) {
      return res.status(400).json({ error: "Email or Password Incorrect" });
    }
    const token = require("jsonwebtoken").sign(
      { email: user.email, username: user.username },
      process.env.SECRET_KEY,
      {
        expiresIn: "5h",
      }
    );
    res.status(201).json({ message: "Login successfully", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
