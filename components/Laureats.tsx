import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import archives from "@/data/archives.json";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Instagram } from "lucide-react";
import LinkedIn from "@/components/LinkedIn";

const Laureats = () => (
  <section
    id="archives"
    className={"bg-white  py-16 pl-6 text-pg-green-darkest sm:py-24 sm:pl-20"}
  >
    <Carousel
      className={"flex flex-col items-center gap-6 sm:flex-row sm:gap-36"}
    >
      <div className={"flex flex-col gap-6"}>
        <h2 className={"relative flex w-fit flex-col items-start"}>
          <span className={"font-clash text-4xl uppercase sm:text-6xl"}>
            ARCHIVES
          </span>
          <span
            className={
              "text-shadow-sm-white -mt-3 font-libre text-xl sm:-mt-4 sm:text-3xl"
            }
          >
            des lauréats
          </span>
        </h2>
        <div className={"flex gap-4"}>
          <CarouselPrevious
            className={
              "relative left-0 top-0 hidden h-12 w-12 translate-x-0 translate-y-0 sm:flex"
            }
          />
          <CarouselNext
            className={
              "relative left-0 top-0 hidden h-12 w-12 translate-x-0 translate-y-0 sm:flex"
            }
          />
        </div>
      </div>
      <div className={"flex-grow"}>
        <CarouselContent>
          {archives.map((archive, key) => (
            <CarouselItem
              key={archive.name + key}
              className={"basis-5/6 md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"}
            >
              <div className={`relative inline-block h-[345px]`}>
                <Image
                  src={archive.image}
                  alt={"Test"}
                  width={312}
                  height={345}
                  className={`inline-block h-[297px] object-cover object-top`}
                />
                {/*<Image*/}
                {/*  src={archive.logo}*/}
                {/*  alt={archive.name}*/}
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
                    "absolute bottom-10 left-5 z-10 text-xl font-bold text-white"
                  }
                >
                  {archive.date}
                </div>
                <div
                  className={
                    "absolute bottom-5 left-5 z-10 font-clash text-xl leading-[.8] text-white"
                  }
                >
                  {archive.name}
                </div>
                <div
                  className={
                    "absolute bottom-5 right-5 flex gap-3 font-clash text-xl"
                  }
                >
                  <Button variant={"link"} asChild className={"h-fit p-0"}>
                    <Link href={archive.instagram} target={"_blank"}>
                      <Instagram size={21} color={"white"} />
                    </Link>
                  </Button>
                  <Button variant={"link"} asChild className={"h-fit p-0"}>
                    <Link href={archive.linkedin} target={"_blank"}>
                      <LinkedIn size={21} />
                    </Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
    </Carousel>
  </section>
);

export default Laureats;
