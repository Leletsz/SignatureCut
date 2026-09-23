import { Router } from "express";
import type { Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController.js";
import { AuthUserController } from "./controllers/user/AuthUserController.js";
import { DetailUserController } from "./controllers/user/DetailUserController.js";
import { isAuthenticated } from "./middlewares/isAuthenticated.js";
import { UpdateUserController } from "./controllers/user/UpdateUserController.js";
import { CreateHaircutController } from "./controllers/haircut/CreateHaircutController.js";

const router = Router();

// --- ROTAS USER ---
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);
router.put("/users", isAuthenticated, new UpdateUserController().handle);

//--- ROTAS HAIRCUTS ---
router.post("/haircut", isAuthenticated, new CreateHaircutController().handle);

export { router };
