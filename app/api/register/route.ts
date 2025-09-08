import { NextRequest, NextResponse } from "next/server";
import { UserRepository } from "@/app/repository/UserRepository";
import { UserServices } from "@/app/services/UserService";
import { UserClass } from "@/app/models/User";

const services = new UserServices();
const repository = new UserRepository();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const user = new UserClass(
      body.email,
      body.password,
      body.username,
      body.confirmPassword,
    );

    await services.validateInputs(user);
    await services.hashPassword(user);
    await repository.createUser(user);

    return NextResponse.json({
      message: "Compte utilisateur créé avec succès !",
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Erreur inconnue" },
      { status: 400 },
    );
  }
}
