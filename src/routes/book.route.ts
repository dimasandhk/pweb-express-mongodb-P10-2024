import { BookController } from "../controllers/book.controller";
import express from "express";
const router = express.Router();

import { auth } from "../middleware/auth";

router.post("/", auth, BookController.create);

export default router;
