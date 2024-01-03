import User from "../MongoDB/model/user.js";
import jwt from "jsonwebtoken";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });
    const token = signToken(newUser._id);
    res.status(201).json({
      status: "success",
      token,
      data: {
        newUser,
      },
    });
  } catch (err) {
    res.status(500).json({ status: "error", error: err.message, err });
    console.log(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        status: "Error",
        Message: "Please provide email and password!",
      });
      return;
    }
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      res.status(401).json({
        status: "Error",
        Message: "Incorrect email or password",
      });
      return;
    }
    const token = signToken(user._id);
    res.status(200).json({
      status: "success",
      token,
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(500).json({ status: "error", err });
    console.log(err);
  }
};
