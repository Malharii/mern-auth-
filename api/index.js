import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
dotenv.config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB successfully !");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Listening on port 3000 !");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRoute);

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "intern server error;";

  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
