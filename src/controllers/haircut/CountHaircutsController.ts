import { Response, Request } from "express";
import { CountHaircutsService } from "../../services/haircut/CountHaircutsService.js";

class CountHaircutsController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;

    const countHaircuts = new CountHaircutsService();

    const count = await countHaircuts.execute({
      user_id,
    });

    return response.json(count);
  }
}

export { CountHaircutsController };
