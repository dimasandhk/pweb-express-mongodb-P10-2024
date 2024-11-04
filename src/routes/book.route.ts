import { BookController } from "../controllers/book.controller";
import express from "express";
const router = express.Router();

import { auth } from "../middleware/auth";

router.post("/", auth, BookController.create);

router.patch("/:id", auth, BookController.update);

export default router;
