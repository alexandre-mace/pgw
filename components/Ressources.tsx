import ressources from "@/data/ressources";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Ressources = () => (
  <section
    id={"ressources"}
    className={"text-pg-green-darkest space-y-10 bg-white py-16 sm:py-24"}
  >
    <h2 className={"relative mx-auto flex w-fit flex-col items-end"}>
      <span className={"font-clash text-4xl uppercase sm:text-6xl"}>
        RESSOURCES
      </span>
      <span
        className={
          "text-shadow-sm-white -mt-3 font-libre text-xl sm:-mt-4 sm:text-3xl"
        }
      >
        anti greenwashing
      </span>
    </h2>

    <div className={"container mx-auto flex max-w-5xl flex-col gap-8"}>
      {ressources.map((ressource, key) => (
        <div
          className={"flex flex-col gap-4 border-b pb-8 sm:flex-row"}
          key={ressource.link}
        >
          <div
            className={
              "mr-4 font-libre text-2xl text-pg-green-lighter sm:text-4xl"
            }
          >
            0{key + 1}
          </div>
          <Image
            src={ressource.logo}
            alt={ressource.author}
            height={160}
            width={160}
          />
          <div className={"flex flex-col"}>
            <div className={"font-clash text-xl uppercase"}>
              {ressource.author}
            </div>
            <div className={"text-pg-green-info text-xl"}>
              {ressource.title}
            </div>
            <Button
              asChild
              variant={"secondary"}
              className={"bg-pg-green-lightest  hover:bg-pg-green-lightest "}
            >
              <Link
                href={ressource.link}
                target={"_blank"}
                className={"mt-6 inline-block w-fit rounded-lg sm:mt-auto"}
              >
                Accéder
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Ressources;
