import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import crypto from "crypto";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      //this works only in create and save not update !!!
      validator: function (value) {
        return value === this.password;
      },
      message: "Passwords are not the same",
    },
  },
});

//mongoose middleware that work before save or create only
userSchema.pre("save", async function (next) {
  //isModified is function that check the field modified or not and this stands for the document
  if (!this.isModified("password")) return next();
  //hash is a synchronized function so we have to await
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre("save", function (next) {
  // is now check if the document is new or not it returns true or false
  if (!this.isModified("password") || !this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
export default mongoose.model("User", userSchema);
