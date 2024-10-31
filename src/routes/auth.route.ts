import { AuthController } from "../controllers/auth.controller";
import express from "express";
const router = express.Router();

router.post("/login", (_, res) => {
  res.status(200).send({
    status: "success",
    message: "login page",
    data: {},
  });
});

router.post("/register", AuthController.register);

export default router;
