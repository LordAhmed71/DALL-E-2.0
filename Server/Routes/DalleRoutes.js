import express from "express";
import {
  HelloFromServer,
  generateImage,
} from "../Controllers/ImagesController.js";

const router = express.Router();

router.get("/", HelloFromServer);
router.post("/", generateImage);

export default router;
