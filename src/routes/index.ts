import express from "express";

const router = express.Router();

import authRoute from "./auth.route";
import bookRoute from "./book.route";

router.use("/auth", authRoute);
router.use("/book", bookRoute);

export default router;
