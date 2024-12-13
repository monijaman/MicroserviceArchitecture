import { createUser, getUsers } from "@/controllers/user.controller";
import { Router } from "express";

const router = Router();
console.log("holla");
router.get("/users", getUsers);
router.post("/users", createUser);

export default router;
