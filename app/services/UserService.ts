import { z } from "zod";
import { UserClass } from "@/app/models/User";
import bcrypt from "bcryptjs";

export class UserServices {
  async validateInputs(user: UserClass): Promise<void> {
    // Schéma Zod pour validation
    const userSchema = z
      .object({
        email: z
          .string()
          .trim()
          .min(1, { message: "Email requis" })
          .email({ message: "Email invalide" })
          .transform((val) => val.replace(/</g, "&lt;").replace(/>/g, "&gt;")),
        password: z
          .string()
          .trim()
          .min(6, { message: "Mot de passe trop court" }),
        confirmPassword: z
          .string()
          .trim()
          .min(1, { message: "Confirmation requise" }),
        username: z
          .string()
          .trim()
          .min(3, { message: "Nom trop court" })
          .transform((val) => val.replace(/</g, "&lt;").replace(/>/g, "&gt;")),
      })
      .refine((data) => data.password != data.confirmPassword, {
        message: "Les mots de passe ne correspondent pas",
        path: ["confirmPassword"],
      });

    try {
      userSchema.parse({
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword,
        username: user.username,
      });
    } catch (err) {
      throw new Error("Erreur lors du parsing des saisies : " + err);
    }
  }

  async hashPassword(user: UserClass): Promise<UserClass> {
    if (!user.password)
      throw new Error("Erreur : veuillez entrer un mot de passe !");
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
      return user;
    } catch (error) {
      throw new Error("Erreur lors du hash de mot de passe : " + error);
    }
  }
}
