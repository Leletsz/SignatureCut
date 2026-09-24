import { prisma } from "../../lib/prisma.js";

interface HaircutRequest {
  user_id: string;
  status: boolean | string;
}

class ListHaircutService {
  async execute({ user_id, status }: HaircutRequest) {
    const haircut = await prisma.haircut.findMany({
      where: {
        userId: user_id,
        status: status === "true" ? true : false,
      },
    });
    return haircut;
  }
}

export { ListHaircutService };
