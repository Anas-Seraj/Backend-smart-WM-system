import { Router } from "express";
import { getAllImages, getUserImages, uploadImage } from "../controllers/image.controller.js";
import multer from "multer";
import { cloudStorage } from "../config/cloudinary.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const imageRoutes = Router();
const storage = cloudStorage;
const upload = multer({ storage: storage });

imageRoutes.get("/", getAllImages);

imageRoutes.post("/upload", upload.single("image"), uploadImage);

imageRoutes.get("/image/:id", authMiddleware, getUserImages);

imageRoutes.delete("/image/:id", (req, res) => {
  res.status(200).json({ title: "Delete a user selected image" });
});

export default imageRoutes;
