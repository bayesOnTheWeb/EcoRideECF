import Footer from "../components/containers/footer";
import Header from "../components/containers/header";
import RegisterForm from "../components/containers/registerForm";

export default function Page() {
  return (
    <>
      <Header />
      <section>
        <RegisterForm />
      </section>
      <Footer />
    </>
  );
}
