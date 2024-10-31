import express from "express";

const router = express.Router();

router.get("/login", (_, res) => {
  res.status(200).send({
    status: "success",
    message: "login page",
    data: {},
  });
});

router.get("/register", (_, res) => {
  res.status(200).send({
    status: "success",
    message: "register page",
    data: {},
  });
});

export default router;
