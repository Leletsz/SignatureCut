import { Response, Request } from "express";
import { NewScheduleService } from "../../services/schedule/NewScheduleService.js";

class NewScheduleController {
  async handle(request: Request, response: Response) {
    const { haircut_id, customer } = request.body;
    const user_Id = request.user_id;

    const newSchedule = new NewScheduleService();

    const schedule = await newSchedule.execute({
      user_Id,
      haircut_id,
      customer,
    });

    return response.json(schedule);
  }
}

export { NewScheduleController };
