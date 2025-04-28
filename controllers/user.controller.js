import mongoose from "mongoose";
import User from "../models/user.model.js";
import { USER_ID } from "../config/env.js";

export const getUsers = async (req, res, next) => {
  try {

    if (req.body.user !== USER_ID) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    
    const users = await User.find();

    if (!users) {
      const error = new Error("No user found!!!");
      error.statusCode(401);
      throw error;
    }

    res.status(200).json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
};

export const getUserDetail = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      const error = new Error("User not found!!!");
      error.statusCode = 401;
      throw error;
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

export const createNewUser = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    await session.commitTransaction();
    session.endSession();
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};

export const updateUserDetails = async (req, res, next) => {
  try {
  } catch (error) {}
};

export const deleteUser = async (req, res, next) => {
  try {
  } catch (error) {}
};
