import { Router } from "express";
import type { Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController.js";

const router = Router();

// --- ROTAS USER ---
router.post("/users", new CreateUserController().handle);

export { router };
