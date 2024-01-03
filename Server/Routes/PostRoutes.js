import express from "express";
import { createPost, getAllPosts } from "../Controllers/PostController.js";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", createPost);

export default router;
