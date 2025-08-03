//import des dépendances

import { PrismaClient } from "@prisma/client";
import {z} from "zod"


const prisma = new PrismaClient();

//init du schema
const schemaData = z.object({
    username : z.string(),
    email : z.string().email("adresse mail invalide"),
    password : z.string().min(6, "le mot de passe doit contenir 6 caractère minimum")
})

export function validateInput(data) {
  const validation = schemaData.safeParse(data);
  
  if (!validation.success) {
    return {
      success: false,
      error: validation.error, 
    };
  }

  return {
    success: true,
    data: validation.data,
  };
}






