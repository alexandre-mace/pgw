import ScrollSpyWrapper from "@/components/ScrollSpyWrapper";
import Ressources from "@/components/Ressources";
import Apparitions from "@/components/Apparitions";
import Footer from "@/components/Footer";
import Charte from "@/components/Charte";
import Laureats from "@/components/Laureats";
import Intro from "@/components/Intro";

export default function Home() {
  return (
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
  );
}
