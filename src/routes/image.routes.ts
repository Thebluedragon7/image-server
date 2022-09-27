import express from "express";
const router = express.Router();
import upload from "../middlewares/uploadImage";
import controller from "../controllers/image.controller";

router.post("/", upload.single("image"), controller.post);
router.delete("/:id", controller.delete);
router.all("/", controller.other);

export default router;
