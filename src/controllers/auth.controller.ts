import { type NextFunction, type Request, type Response } from "express";

import { AuthService, type RegisterRequest } from "../services/auth.service";

export const AuthController = {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { user } = await AuthService.register(req.body as RegisterRequest);

      res.status(201).send({
        status: "success",
        message: "User registered successfully",
        data: {
          user: {
            email: user.email,
            username: user.username,
            id: user._id,
          },
        },
      });
    } catch (error: any) {
      if (error.code === 11000 && error.keyPattern?.email) {
        console.log(error.name, error.message);
        res.status(400).send({
          status: "failed",
          message: "Email already exists",
        });
      } else if (error.name === "ValidationError") {
        res.status(400).send({
          status: "failed",
          message: error.message,
        });
      }
    }
  },

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      // Login user
    } catch (error) {
      next(error);
    }
  },
};
