import { Router } from "express";
import type { Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController.js";
import { AuthUserController } from "./controllers/user/AuthUserController.js";

const router = Router();

// --- ROTAS USER ---
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);

export { router };
