import { response } from "express";
import User from "../dao/models/user.model.js";
import { createHashUtil, verifyHashUtil } from "../utils/hash.util.js";
import { createTokenUtil, verifyTokenUtil } from "../utils/token.util.js";

const register = async (req, res) => {
  const { email, password, role } = req.body;
  const error = { error: "Bad auth!" };
  if (!email || !password) {
    return res.status(401).json(error);
  }
  const one = await User.findOne({ email });
  if (one) {
    return res.status(401).json(error);
  }
  const hashPassword = createHashUtil(password);
  const data = { email, password: hashedPassword, role };
  const user = await User.create(data);
  const message = "User Registered";
  return res.status(201).json({ response: user._id, message });
};
const login = async (req, res) => {};
const signout = (req, res) => {};

export { register, login, signout };
