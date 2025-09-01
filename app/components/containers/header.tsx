import Button from "../ui/button";
import Image from "next/image";
import EcoRide_Logo from "../../../public/EcoRide_Logo.svg";

export default function Header() {
  return (
    <nav className="flex flex-row p-4 bg-lightBrunEcoRide">
      <Image
        src={EcoRide_Logo}
        alt={"logo du site web EcoRide"}
        width={150}
        height={50}
      />
      <div className="flex flex-1 gap-2 justify-end items-end">
        <Button
          label={"s'inscrire"}
          type={"button"}
          style={"mainButtonClassName"}
          redirect={"/register"}
        />
        <Button
          label={"se connecter"}
          type={"button"}
          style={"mainButtonClassName"}
          redirect={"/auth/signin"}
        />
        <Button
          label={"nos valeurs"}
          type={"button"}
          style={"secondButtonClassName"}
          redirect={"/building"}
        />
        <Button
          label={"découvrire nos offres"}
          type={"button"}
          style={"secondButtonClassName"}
          redirect={"/building"}
        />

        <Button
          label={"acceuil"}
          type={"button"}
          style={"secondButtonClassName"}
          redirect={"/"}
        />
      </div>
    </nav>
  );
}
