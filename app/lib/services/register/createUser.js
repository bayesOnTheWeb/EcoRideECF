import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(data) {
  try {
    const newUser = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        passwordHash: data.passwordHash,
      },
    });


    return {
      status: "success",
      data: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    };
  } catch (error) {
    return {
      status: "fail",
      error: error.message,
    };
  }
}
