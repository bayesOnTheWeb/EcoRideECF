import Footer from "../components/containers/footer";
import Header from "../components/containers/header";

export default function Page() {
  return (
    <section className="bg-lightBrunEcoRide">
      <Header />
      <section className="flex items-center justify-center h-screen">
        <div className="p-4 bg-greenEcoRide rounded-2xl">
          <p className="text-lightBrunEcoRide flex">
            Page inacessible pour le moment !{" "}
          </p>
        </div>
      </section>
      <Footer />
    </section>
  );
}
