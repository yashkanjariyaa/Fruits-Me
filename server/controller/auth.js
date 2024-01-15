const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtkey = "dontreact@15^-202";
const pool = require("../database/connection");

//user login and register
const signUp = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: "Bad Request" });
  }

  try {
    const cryptedPassword = await bcrypt.hash(req.body.password, 10);
    const connection = await pool.getConnection();
    const [rows, fields] = await connection.execute(
      "INSERT INTO User (email, password) VALUES ( ?, ?)",
      [req.body.email, cryptedPassword]
    );

    console.log({
      email: req.body.email,
      password: cryptedPassword,
    });

    res.json({ status: "ok" });
  } catch (err) {
    console.error(err);
    res.json({ status: "error", error: err.message });
  }
};

const signIn = async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows, fields] = await connection.execute('SELECT * FROM User WHERE email = ?', [req.body.email]);
    
    if (!rows || rows.length === 0) {
      return res.json({ status: "error", error: "Invalid Login" });
    }

    const user = rows[0];

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    if (isPasswordValid) {
      const token = jwt.sign({ email: user.email }, jwtkey);
      return res.json({ status: "ok", user: token });
    } else {
      return res.json({ status: "error", user: false });
    }
  } catch (err) {
    console.error(err);
    res.json({ status: "error", error: err.message });
  }
};

const check = async (req, res) => {
  try {
    const token = req.body.token;
    const valid = await jwt.decode(token);
    if (!valid) {
      res.json({ status: "invalid" });
    } else {
      res.json({ status: "valid" });
    }
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: err });
  }
};

module.exports = {
  signIn,
  signUp,
  check,
};
