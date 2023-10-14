import mongoose from "mongoose";

const account = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isConfirmed: {
    type: Boolean,
    required: true,
  },
});

export const Account = mongoose.model("Account", account);
