import Image from "../models/image.model.js";

export const getAllImages = async (req, res, next) => {
  try {
    const allImages = await Image.find();

    res.status(201).json({ success: true, images: allImages });
  } catch (error) {
    next(error);
  }
};

export const uploadImage = async (req, res) => {
  try {
    const newImage = new Image({
      url: req.file.path, // Cloudinary URL
      public_id: req.file.filename, // Cloudinary public ID
      user: req.body.user,
    });

    console.log(req);

    await newImage.save(); // Save in MongoDB

    res.status(201).json({
      message: "Image uploaded and saved successfully!",
      image: newImage,
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

export const getUserImages = async (req, res, next) => {
  try {
    const images = await Image.find({ user: req.params.id });

    res.status(201).json({ success: true, images });
  } catch (error) {
    next(error);
  }
};

export const deleteUserImage = async () => {
  try {
  } catch (error) {}
};
