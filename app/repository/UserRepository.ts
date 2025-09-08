import { UserClass } from "../models/User";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export class UserRepository {
  async createUser(user: UserClass) {
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      const newUser = await prisma.user.create({
        data: {
          email: user.email,
          password: hashedPassword,
          username: user.username,
          status: { connect: { id: 2 } },
        },
      });

      return {
        id: newUser.id,
        username: newUser.username,
      };
    } catch (error) {
      throw new Error(
        "Erreur lors de la création de l'utilisateur en DB: " + error,
      );
    }
  }

  async verifyUser(email: string, password: string) {
    try {
      const foundUser = await prisma.user.findUnique({
        where: { email },
      });

      if (!foundUser) return null;

      const isValid = await bcrypt.compare(password, foundUser.password);
      return isValid ? foundUser : null;
    } catch (error) {
      throw new Error(
        "Échec lors de la récupération de l'utilisateur en DB: " + error,
      );
    }
  }
}
