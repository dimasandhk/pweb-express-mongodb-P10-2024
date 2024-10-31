import { User } from "../models/user.model";
// import bcrypt from "bcrypt";

interface RegisterRequest {
  email: string;
  password: string;
}

export type { RegisterRequest };

export const AuthService = {
  async register(request: RegisterRequest) {
    const newUser = new User(request);

    try {
      const savedUser = await newUser.save();
      return { user: savedUser };
    } catch (err) {
      throw err;
    }
  },
};
