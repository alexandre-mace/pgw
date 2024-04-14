import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Lice from "@/components/Lice";
import Resultats from "@/components/Resultats";

const Intro = () => (
  <section id={"intro"} className={"relative space-y-20"}>
    <div className={"container flex flex-col gap-6 sm:gap-12"}>
      <div>
        <h1
          className={
            "relative inline-flex w-fit flex-col self-center text-left"
          }
        >
          <div className={"relative flex w-fit items-center"}>
            <span
              className={
                "text-shadow z-10 -mb-4 -mr-2 inline font-libre text-xl lowercase sm:-mb-6 sm:-mr-2 sm:text-[4vw]"
              }
            >
              Le
            </span>
            <span className={"font-clash text-[9vw] uppercase leading-[.8]"}>
              panthéon
            </span>
            <Image
              className={
                "inline h-[24px] w-[29px] sm:ml-6 sm:h-auto sm:w-auto sm:-translate-y-3"
              }
              src={"/pantheon.svg"}
              alt={"Illustration de panthéon"}
              width={93}
              height={108}
            />{" "}
            <span
              className={
                "text-shadow absolute right-6 top-3 inline font-libre text-xl sm:right-28 sm:top-24 sm:text-[4vw]"
              }
            >
              du
            </span>
          </div>
          <span
            className={
              "inline-block font-clash text-[9.5vw] uppercase leading-[.8] text-pg-green-lighter"
            }
          >
            greenwashing
          </span>
        </h1>
      </div>
      <p className={"max-w-lg self-end"}>
        "Le Consortium des Debunkers de Greenwashing (CDG) sélectionne
        régulièrement 3 communications qui rendent "vert.e.s" de rage en
        essayant d'être vertes. Notre objectif ? Exposer, décrypter et vous
        faire élire le pire greenwashing. <br />
        <br /> À la clé pour le gagnant ? Une place au{" "}
        <b>
          <Button
            asChild
            className={
              "bg-transparent px-0 py-0 underline hover:bg-transparent"
            }
          >
            <Link
              href={
                "https://www.linkedin.com/search/results/all/?keywords=%23Panth%C3%A9onDuGreenwashing&origin=GLOBAL_SEARCH_HEADER&sid=ij%40"
              }
            >
              #PanthéonDuGreenwashing"
            </Link>
          </Button>
        </b>
      </p>
    </div>
    <Image
      src={"tour.svg"}
      width={1258}
      height={2372}
      alt={"Tour du panthéon"}
      className={"absolute bottom-0 left-0 -z-10 h-[110%] mix-blend-darken"}
    />
    <div className={"space-y-32 sm:space-y-40"}>
      {/*<Lice />*/}
      <Resultats />
    </div>
  </section>
);

export default Intro;
