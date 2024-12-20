import { BookController } from "../controllers/book.controller";
import express from "express";
const router = express.Router();

import { auth } from "../middleware/auth";

// router.get("/books", auth, BookController.getAll);
// router.post("/book", auth, BookController.create);

// router.get("/book/:id", auth, BookController.getById);
// router.patch("/book/:id", auth, BookController.update);
// router.delete("/book/:id", auth, BookController.delete);

router.get("/books", BookController.getAll);
router.post("/book", BookController.create);

router.get("/book/:id", BookController.getById);
router.patch("/book/:id", BookController.update);
router.delete("/book/:id", BookController.delete);

export default router;
