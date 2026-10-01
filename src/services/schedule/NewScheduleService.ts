import { prisma } from "../../lib/prisma.js";

interface NewScheduleRequest {
  user_Id: string;
  haircut_id: string;
  customer: string;
}

class NewScheduleService {
  async execute({ user_Id, haircut_id, customer }: NewScheduleRequest) {
    if (customer === "" || haircut_id === "") {
      throw new Error("Error schedule new service.");
    }
    const schedule = await prisma.service.create({
      data: {
        customer,
        haircut_id,
        user_Id,
      },
    });
    return schedule;
  }
}

export { NewScheduleService };
