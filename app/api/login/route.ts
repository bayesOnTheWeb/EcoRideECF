import { NextRequest, NextResponse } from "next/server";
import { UserRepository } from "@/app/repository/UserRepository";
import { createSession } from "@/app/cors/JWT";

const repository = new UserRepository();

export async function POST(req: NextRequest) {
  const user = await req.json();

  const verifiedUser = await repository.verifyUser(user.email, user.password);
  if (!verifiedUser) {
    return NextResponse.json({
      message: "utilisateur non trouvé",
      code: 400,
    });
  }

  const token = await createSession(verifiedUser.email);

  const response = NextResponse.redirect(new URL("/profil", req.url));
  response.cookies.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });

  console.log("session créée avec succès ! ", token);
  return response;
}
