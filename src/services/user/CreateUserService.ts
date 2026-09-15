import { prisma } from "../../lib/prisma.js";
import { hash } from "bcryptjs";
interface UsersRequest {
  name: string;
  email: string;
  password: string;
}
class CreateUserService {
  async execute({ name, email, password }: UsersRequest) {
    if (!email) {
      throw new Error("Email Incorreto");
    }

    const userAlreadyExists = await prisma.user.findFirst({
      where: { email: email },
    });

    if (userAlreadyExists) {
      throw new Error("User/Email already exists");
    }
    const passwordHash = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return { user };
  }
}
export { CreateUserService };
