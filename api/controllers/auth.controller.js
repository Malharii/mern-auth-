import User from "../models/user.model.js";

export const singup = async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });
  try {
    await newUser.save();
    res.status(201).json({ massage: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
