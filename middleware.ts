import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decrypt } from "@/app/cors/JWT";

const protectedRoutes = ["/profil"];

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (protectedRoutes.includes(pathname)) {
    const session = req.cookies.get("session")?.value;
    if (!session) return NextResponse.redirect(new URL("/login", req.url));

    try {
      const payload = (await decrypt(session)) as { email?: string };

      if (!payload?.email) {
        return NextResponse.redirect(new URL("/login", req.url));
      }

      if (payload.email !== "steevn.pyram@gmail.com") {
        return NextResponse.redirect(new URL("/login", req.url));
      }
    } catch (err) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}
