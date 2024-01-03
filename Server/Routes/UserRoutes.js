import express from "express";
import { login, signup } from "../Controllers/AuthController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from user" });
});

router.post("/signup", signup);

router.post("/login", login);


export default router;
