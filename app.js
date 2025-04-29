import express from "express";

import connectToDatabase from "./database/mongodb.js";

import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/error.middleware.js";
import { arcjetMiddleware } from "./middlewares/arcjet.middleware.js";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import imageRoutes from "./routes/image.routes.js";

const app = express();

const PORT = process.env.PORT || 5500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(arcjetMiddleware);
app.use(errorMiddleware);

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/images", imageRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the server!!");
});

app.listen(PORT, async () => {
  console.log(`server running on ${PORT}`)
  await connectToDatabase();
});
