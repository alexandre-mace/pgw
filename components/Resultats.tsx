import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import candidats from "@/data/resultats.json";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Instagram } from "lucide-react";
import LinkedIn from "@/components/LinkedIn";

const Resultats = () => (
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
            className={"flex basis-2/3 flex-col justify-end pl-0 sm:basis-1/3"}
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
              <div
                className={
                  "absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent to-black"
                }
              ></div>
              <div
                className={
                  "absolute bottom-12 left-5 font-clash text-xl leading-[.8]"
                }
              >
                {candidat.name}
              </div>
              <div
                className={
                  "absolute bottom-5 left-5 flex items-center gap-1 font-apfel text-xl leading-[.8]"
                }
              >
                <span className={"text-sm"}>🔗</span>
                <Button
                  variant={"link"}
                  asChild
                  className={"h-fit p-0 text-sm text-white underline"}
                >
                  <Link href={candidat.info} target={"_blank"}>
                    Décryptage
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
);

export default Resultats;
