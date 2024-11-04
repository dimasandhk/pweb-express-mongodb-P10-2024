import { type NextFunction, type Request, type Response } from "express";

import { BookService, type CreateBookRequest } from "../services/book.service";

export const BookController = {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { book } = await BookService.create(req.body as CreateBookRequest);

      res.status(201).send({
        status: "success",
        message: "Book created successfully",
        data: {
          book,
        },
      });
    } catch (error: any) {
      if (error.name === "ValidationError") {
        res.status(400).send({
          status: "failed",
          message: error.message,
          data: {},
        });
      } else {
        res.status(400).send({
          status: "failed",
          message: error.message,
          data: {},
        });
      }
    }
  },
};
