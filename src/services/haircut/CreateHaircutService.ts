import { prisma } from "../../lib/prisma.js";

interface HaircutRequest {
  user_id: string;
  name: string;
  price: number;
}

class CreateHaircutService {
  async execute({ user_id, name, price }: HaircutRequest) {
    if (!name || !price) {
      throw new Error("Invalid");
    }

    //Verificar quantos modelos esse usuario ja tem cadastrado
    const haircutsCount = await prisma.haircut.count({
      where: {
        userId: user_id,
      },
    });

    const user = await prisma.user.findFirst({
      where: {
        id: user_id,
      },
      include: {
        subscriptions: true,
      },
    });

    if (haircutsCount >= 3 && user?.subscriptions?.status !== "active") {
      throw new Error("Not authorized");
    }

    const haircut = await prisma.haircut.create({
      data: {
        name: name,
        price: price,
        userId: user_id,
      },
    });
    return haircut;
  }
}

export { CreateHaircutService };
