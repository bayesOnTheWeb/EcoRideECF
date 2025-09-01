import Button from "../ui/button";

export default function Footer() {
  return (
    <footer className="flex flex-1/2 gap-10 justify-center items-center py-7 bg-lightBrunEcoRide">
      <Button
        label={"condition générale d'utilisation"}
        type={"button"}
        style={"secondButtonClassName"}
        redirect={"/cgu"}
      />
      <Button
        label={"condition générale de vente"}
        type={"button"}
        style={"secondButtonClassName"}
        redirect={"/cgv"}
      />
    </footer>
  );
}
