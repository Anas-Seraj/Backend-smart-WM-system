import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controller.js";

const authRoutes = Router();

authRoutes.post("/sign-up", signUp);

authRoutes.post("/sign-in", signIn);

authRoutes.post("/sign-out", signOut);

export default authRoutes;
