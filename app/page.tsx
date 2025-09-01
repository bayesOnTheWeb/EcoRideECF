import Header from "./components/containers/header";
import Footer from "./components/containers/footer";
import Card from "./components/containers/card";

export default function Home() {
  const ClassNameH1 =
    "p-6 text-4xl font-bold text-blackEcoRide bg-lightBrunEcoRide flex items-center justify-center";

  return (
    <>
      <Header />
      <main className="flex bg-lightBrunEcoRide flex-col items-center gap-12 py-10 px-6">
        <h1 className={ClassNameH1}>Bienvenue sur EcoRide</h1>
        <p className="text-lg text-blackEcoRide text-center max-w-2xl">
          L’application de mobilité durable qui connecte passagers et
          conducteurs indépendants, pour des trajets simples, sécurisés et
          écoresponsables.
        </p>

        <section className="flex flex-col gap-4 bg-lightBrunEcoRide p-8 rounded-2xl shadow-md max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-blackEcoRide">
            Pourquoi choisir EcoRide ?
          </h2>
          <p className="text-blackEcoRide">
            Parce que chaque trajet compte. Avec EcoRide, vous participez à une
            mobilité plus respectueuse de l’environnement, tout en profitant
            d’un service sûr et accessible.
          </p>
        </section>

        <section className="grid grid-cols-1 border md:grid-cols-3 gap-8 max-w-5xl w-full">
          <Card
            title="Trajets durables"
            content="Réservez vos trajets avec des conducteurs engagés pour la planète."
            price="Dès 5€"
            src={"/CardImage.svg"}
            alt={"upv Ecoride"}
          />
          <Card
            title="Paiement sécurisé"
            content="Toutes vos transactions sont protégées grâce à notre partenaire Stripe."
            price="Inclus"
            src={"/CardImage.svg"}
            alt={"Paiement sécurisé"}
          />
          <Card
            title="Conducteurs vérifiés"
            content="Chaque conducteur est validé et respecte la charte EcoRide."
            price="Sans frais"
            src={"/CardImage.svg"}
            alt={"upv Ecoride"}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
