import Footer from "../components/containers/footer";
import Header from "../components/containers/header";
import TextContent from "../components/containers/textContent";

export default function Page() {
  const ClassNameH1 =
    "p-4 text-4xl text-blackEcoRide bg-lightBrunEcoRide flex flex-col items-center justify-center";

  return (
    <>
      <Header />
      <h1 className={ClassNameH1}>CONDITIONS GÉNÉRALES D’UTILISATION - CGU</h1>

      <TextContent
        subTitle="Bienvenue"
        content="Bienvenue sur EcoRide. L’utilisation de notre application implique l’acceptation pleine et entière des présentes Conditions Générales d’Utilisation (CGU). Merci de les lire attentivement."
      />

      <TextContent
        subTitle="Informations légales"
        content="Nom du service : EcoRide. Responsable du traitement des données : EcoRide. Contact : contact@ecoride.com (pour toute demande RGPD)."
      />

      <TextContent
        subTitle="Objet de l’application"
        content="EcoRide est une application web/mobile visant à mettre en relation des passagers et des conducteurs dans une démarche de mobilité durable."
      />

      <TextContent
        subTitle="Données personnelles collectées"
        content="Lors de l'utilisation du service, les données suivantes peuvent être collectées : Nom, prénom, Adresse e-mail, Localisation (position GPS ou adresse), Cookies de navigation, Photo de profil, Numéro d’immatriculation du véhicule (conducteurs uniquement)."
      />

      <TextContent
        subTitle="Finalités de traitement"
        content="Les données collectées sont utilisées uniquement pour les finalités suivantes : Création et gestion du compte utilisateur, Affichage personnalisé des trajets disponibles, Notifications (emails ou messages internes), Sécurisation des trajets (vérification des conducteurs), Traitement des paiements (via Stripe)."
      />

      <TextContent
        subTitle="Hébergement et sous-traitance"
        content="Les données sont hébergées et traitées via des services tiers sécurisés : Vercel / Render pour l’hébergement, Stripe pour le traitement des paiements, NodeMailer pour l’envoi des notifications par e-mail. Chacun de ces services est conforme au RGPD et met en place les mesures techniques et organisationnelles appropriées."
      />

      <TextContent
        subTitle="Droits des utilisateurs (RGPD)"
        content="Conformément au Règlement Général sur la Protection des Données (RGPD – UE 2016/679), vous disposez des droits suivants : Droit d’accès à vos données, Droit de rectification, Droit à l’effacement ('droit à l’oubli'), Droit à la portabilité de vos données, Droit d’opposition au traitement, Droit de limitation. Suppression des données : toute demande de suppression de compte entraîne l’effacement définitif des données dans un délai de 24 heures maximum. Pour exercer vos droits, merci d’écrire à : contact@ecoride.com."
      />

      <TextContent
        subTitle="Cookies"
        content="L’application peut déposer des cookies pour : Maintenir votre session ouverte, Mémoriser vos préférences, Réaliser des statistiques anonymes de fréquentation. Vous pouvez à tout moment configurer votre navigateur pour désactiver les cookies."
      />

      <TextContent
        subTitle="Sécurité"
        content="EcoRide met en œuvre toutes les mesures nécessaires pour garantir la confidentialité et l’intégrité de vos données personnelles : Accès restreint aux bases de données, Chiffrement des mots de passe, Surveillance des accès au backend, Journalisation des opérations sensibles."
      />

      <TextContent
        subTitle="Modifications des CGU"
        content="EcoRide se réserve le droit de modifier les présentes CGU à tout moment. Toute modification sera notifiée via l’application ou par e-mail."
      />

      <TextContent
        subTitle="Loi applicable"
        content="Les présentes CGU sont régies par la loi française. En cas de litige, une solution amiable sera recherchée. À défaut, les tribunaux compétents seront ceux du ressort du siège social d’EcoRide."
      />

      <Footer />
    </>
  );
}
