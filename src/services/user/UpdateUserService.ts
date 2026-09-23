import { prisma } from "../../lib/prisma.js";

interface UserRequest {
  user_id: string;
  name: string;
  address: string;
}

class UpdateUserService {
  async execute({ user_id, name, address }: UserRequest) {
    try {
      const userAlreadyExists = await prisma.user.findFirst({
        where: {
          id: user_id,
        },
      });
      if (!userAlreadyExists) {
        throw new Error("User not exists");
      }

      const userUpdated = await prisma.user.update({
        where: {
          id: user_id,
        },
        data: {
          name,
          address,
        },
        select: {
          name: true,
          email: true,
          address: true,
        },
      });
      return userUpdated;
    } catch (err) {
      throw new Error("Erro an update the user!");
    }
  }
}

export { UpdateUserService };
