import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json({ massage: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validuser = await User.findOne({ email });
    if (!validuser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validuser.password);
    if (!validPassword) {
      return next(errorHandler(404, "Wrong password"));
    }
    const token = jwt.sign(
      { id: validuser._id, email: validuser.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    const { password: _, ...rest } = validuser._doc;
    const expirydate = new Date(Date.now() + 3600000);
    res
      .cookie("access_token", token, {
        httpOnly: true,
        expires: expirydate,
      })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
