import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User Name is required!"],
    trim: true,
    minLength: 2,
    maxLength: 30,
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    trim: true,
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Please fill a valid email address!"],
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    minLength: 6,
  },
  city: {
    type: String,
    required: [true, "City is required!"],
  }
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;