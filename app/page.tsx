import ScrollSpyWrapper from "@/components/ScrollSpyWrapper";
import Ressources from "@/components/Ressources";
import Apparitions from "@/components/Apparitions";
import Footer from "@/components/Footer";
import Charte from "@/components/Charte";
import Laureats from "@/components/Laureats";
import Intro from "@/components/Intro";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <main className={"pt-16 sm:pt-32"}>
        <ScrollSpyWrapper>
          <>
            <Intro />
            <Laureats />
            <Charte />
            <Ressources />
            <Apparitions />
          </>
        </ScrollSpyWrapper>
        <Footer />
      </main>
    </div>
  );
}
