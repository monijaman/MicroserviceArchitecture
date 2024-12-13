import User from "@/database/models/user.model";
import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("holllaaaaaaaa");
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log("holllaaaaaaaa");
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};
