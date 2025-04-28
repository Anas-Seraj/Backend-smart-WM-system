import { Router } from "express";
import {
  getUserDetail,
  getUsers,
  createNewUser,
  updateUserDetails,
  deleteUser,
} from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const userRoutes = Router();

userRoutes.get("/", getUsers);

userRoutes.get("/:id", authMiddleware, getUserDetail);

userRoutes.post("/", createNewUser);

userRoutes.put("/:id", updateUserDetails);

userRoutes.delete("/:id", deleteUser);

export default userRoutes;
