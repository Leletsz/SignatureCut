import { Response, Request } from "express";
import { UserDetailService } from "../../services/user/DetailUserService.js";

class DetailUserController {
  async handle(request: Request, response: Response) {
    const userDetailService = new UserDetailService();

    const detailUser = await userDetailService.execute();

    return response.json(detailUser);
  }
}

export { DetailUserController };
