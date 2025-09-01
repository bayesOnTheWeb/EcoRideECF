import { id } from "zod/locales";
import { UserClass } from "../models/User";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class UserRepository {
  async createUser(user: UserClass) {
    try {
      const newUser = await prisma.user.create({
        data: {
          email: user.email,
          password: user.password,
          username: user.username,
          status: {
            connect: { id: 2 },
          },
        },
      });

      return {
        id: newUser.email,
        username: newUser.username,
      };
    } catch (error) {
      throw new Error(
        "Erreur lors de la création de l'utilisateur en DB" + error,
      );
    }
  }
}
