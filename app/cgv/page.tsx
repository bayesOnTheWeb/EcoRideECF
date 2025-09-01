import Footer from "../components/containers/footer";
import Header from "../components/containers/header";
import TextContent from "../components/containers/textContent";

export default function Page() {
  const ClassNameH1 =
    "p-4 text-4xl text-blackEcoRide bg-lightBrunEcoRide flex flex-col items-center justify-center";

  return (
    <>
      <Header />
      <h1 className={ClassNameH1}>CONDITIONS GÉNÉRALES DE VENTE</h1>

      <TextContent
        subTitle="1. Objet"
        content="Les présentes Conditions Générales de Vente (CGV) régissent l'accès et l'utilisation du service EcoRide - WebApp, une plateforme de mise en relation entre particuliers et conducteurs indépendants, proposée par EcoRide SARL, société au capital de 10 000€, immatriculée au RCS/SIRET 123 456 789 00012, dont le siège social est situé à Montpellier. En utilisant le service, l'utilisateur accepte expressément les présentes CGV."
      />

      <TextContent
        subTitle="2. Définitions"
        content="Utilisateur : toute personne utilisant le service pour demander un trajet. Prestataire : conducteur indépendant proposant un service via la plateforme. Compte : espace personnel permettant à l’utilisateur ou au prestataire d’accéder aux fonctionnalités du service. Service : application SaaS de mise en relation, incluant l’application web et toutes les fonctionnalités associées."
      />

      <TextContent
        subTitle="3. Accès au service"
        content="L’accès au service est réservé aux personnes majeures et capables juridiquement. La création d’un compte est obligatoire pour utiliser la plateforme. L’utilisateur et le prestataire s’engagent à fournir des informations exactes et à jour. EcoRide SARL se réserve le droit de suspendre ou de supprimer un compte en cas de non-respect des CGV, de fraude, ou d’usurpation d’identité."
      />

      <TextContent
        subTitle="4. Fonctionnement du service"
        content="Le service permet à un utilisateur de demander un trajet auprès d’un conducteur indépendant inscrit. Le prestataire peut accepter ou refuser la demande. EcoRide n’est pas employeur : les conducteurs sont indépendants et responsables de leurs obligations légales et fiscales."
      />

      <TextContent
        subTitle="5. Tarification et paiement"
        content="Les prix sont indiqués en euros (€) toutes taxes comprises. Le paiement s’effectue via Stripe. EcoRide prélève une commission de 2 % sur chaque transaction effectuée via la plateforme. En cas de retard ou de défaut de paiement, EcoRide se réserve le droit de suspendre l’accès au service."
      />

      <TextContent
        subTitle="6. Responsabilités"
        content="EcoRide n’est pas responsable des dommages directs ou indirects liés à l’usage du service. EcoRide ne garantit pas la qualité du trajet fourni par le conducteur et ne peut être tenu responsable des incidents liés à la prestation. L’assurance de la plateforme assure la bonne transmission des informations mais n’est pas garante du conducteur lui-même. L’utilisateur et le prestataire garantissent EcoRide contre toute réclamation liée à l’usage du service."
      />

      <TextContent
        subTitle="7. Propriété intellectuelle"
        content="Tous les éléments de la plateforme (logos, code, textes, images) sont la propriété exclusive d’EcoRide SARL ou de ses partenaires. Toute reproduction, modification ou exploitation sans autorisation est interdite."
      />

      <TextContent
        subTitle="8. Données personnelles"
        content="Les informations collectées sont nécessaires à l’usage du service. Conformément au RGPD, l’utilisateur dispose d’un droit d’accès, de rectification et de suppression de ses données."
      />

      <TextContent
        subTitle="9. Durée et résiliation"
        content="Les présentes CGV s’appliquent pour toute la durée d’utilisation du service. L’utilisateur ou le prestataire peut résilier son compte à tout moment via l’interface. EcoRide peut résilier ou suspendre un compte en cas de manquement aux CGV, fraude, ou usurpation d’identité."
      />

      <TextContent
        subTitle="10. Modification des CGV"
        content="EcoRide peut modifier les CGV à tout moment. Les utilisateurs seront informés et les nouvelles CGV s’appliqueront aux nouvelles transactions."
      />

      <TextContent
        subTitle="11. Loi applicable et juridiction"
        content="Les présentes CGV sont régies par la loi française. Tout litige sera porté devant les tribunaux compétents du ressort du siège social d’EcoRide SARL, en respect du droit du consommateur, du travail et du commerce."
      />

      <Footer />
    </>
  );
}
