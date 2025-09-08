"use server";

import { SignJWT, jwtVerify } from "jose";

export interface JWTPayload {
  [key: string]: unknown; // index signature
  email?: string;
  iss?: string;
  sub?: string;
  aud?: string | string[];
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
}

const secretKey = process.env.SESSION_SECRET;
if (!secretKey) throw new Error("SESSION_SECRET is not defined");

const encodedKey = new TextEncoder().encode(secretKey);

/**
 * Crée une session JWT pour un utilisateur avec expiration configurable.
 * @param userEmail Email de l'utilisateur
 * @param expiresIn Durée avant expiration, par ex: "10s", "1h"
 */
export async function createSession(userEmail: string, expiresIn = "10s") {
  return new SignJWT({ email: userEmail })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(encodedKey);
}

/**
 * Décrypte et vérifie un JWT.
 * @param token JWT à vérifier
 * @returns Payload si valide, sinon null
 */
export async function decrypt(token: string | undefined) {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload as JWTPayload;
  } catch (error) {
    console.log("Failed to verify session");
    return null;
  }
}
