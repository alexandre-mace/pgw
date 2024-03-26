import Image from "next/image";
import candidats from "@/data/candidats.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Info, Instagram } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import LinkedIn from "@/components/LinkedIn";

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
    <div className={"flex flex-col items-center gap-6"}>
      <h2 className={"relative mb-8 w-fit text-center"}>
        <span
          className={
            "text-shadow-sm absolute -left-6 -top-2 inline font-libre text-xl lowercase sm:-left-8 sm:text-3xl"
          }
        >
          Les
        </span>
        <span className={"font-clash text-4xl uppercase sm:text-6xl"}>
          résultats
        </span>
        <span
          className={
            "text-shadow-sm absolute -bottom-6 -right-0 inline -rotate-2 font-libre text-xl sm:text-3xl"
          }
        >
          du mois dernier
        </span>
      </h2>
      <Carousel
        opts={{
          startIndex: 1,
        }}
      >
        <CarouselContent>
          {candidats.map((candidat, key) => (
            <CarouselItem
              key={"candidats" + candidat.name + key}
              className={
                "flex basis-2/3 flex-col justify-end pl-0 sm:basis-1/3"
              }
            >
              <div
                className={`relative mx-auto inline-block h-fit ${key === 0 ? "translate-y-0" : key === 1 ? "translate-y-0" : "-translate-y-6"} h-[${key === 0 ? 267 : key === 1 ? 297 : 238}px]`}
              >
                <Image
                  src={candidat.image}
                  alt={"Test"}
                  width={key === 0 ? 242 : key === 1 ? 269 : 215}
                  height={key === 0 ? 267 : key === 1 ? 297 : 238}
                  className={`inline-block h-[${key === 0 ? 267 : key === 1 ? 297 : 238}px] object-cover`}
                />
                {/*<Image*/}
                {/*  src={candidat.logo}*/}
                {/*  alt={candidat.name}*/}
                {/*  width={41}*/}
                {/*  height={41}*/}
                {/*  className={*/}
                {/*    "absolute left-5 top-5 font-clash text-xl leading-[.8]"*/}
                {/*  }*/}
                {/*/>*/}
                <div
                  className={
                    "absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent to-black"
                  }
                ></div>
                <div
                  className={
                    "absolute bottom-5 left-5 font-clash text-xl leading-[.8]"
                  }
                >
                  {candidat.name}
                </div>
                <div className={"absolute right-5 top-5"}>
                  <Button variant={"link"} asChild className={"h-fit p-0"}>
                    <Link href={candidat.info} target={"_blank"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        height={27}
                        width={27}
                        className={"h-[27px] w-[27px] hover:fill-zinc-100"}
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </Button>
                </div>
                <div
                  className={
                    "absolute bottom-5 right-5 flex gap-3 font-clash text-xl"
                  }
                >
                  <Button variant={"link"} asChild className={"h-fit p-0"}>
                    <Link href={candidat.instagram} target={"_blank"}>
                      <Instagram
                        size={21}
                        color={"white"}
                        className={"hover:stroke-zinc-200"}
                      />
                    </Link>
                  </Button>
                  <Button variant={"link"} asChild className={"h-fit p-0"}>
                    <Link href={candidat.linkedin} target={"_blank"}>
                      <LinkedIn size={21} />
                    </Link>
                  </Button>
                </div>
              </div>
              {key === 0 && (
                <Image
                  src={"/bloc2.svg"}
                  alt={"Bloc panthéon 2"}
                  width={289}
                  height={204}
                  className={"mx-auto h-auto w-full"}
                />
              )}
              {key === 1 && (
                <Image
                  src={"/bloc1.svg"}
                  alt={"Bloc panthéon 1"}
                  width={355}
                  height={258}
                  className={"mx-auto h-auto w-full"}
                />
              )}
              {key === 2 && (
                <Image
                  src={"/bloc3.svg"}
                  alt={"Bloc panthéon 3"}
                  width={290}
                  height={154}
                  className={"mx-auto h-auto w-full"}
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  </section>
);

export default Intro;
