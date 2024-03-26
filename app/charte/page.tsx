import { NotionAPI } from "notion-client";
import { NotionPage } from "@/components/NotionPage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import members from "@/data/members.json";
import Image from "next/image";

const notion = new NotionAPI();

export default async function Charte() {
  const chartePageId = "d5bdab0ba0094db0b702e884d3df04f0";
  const recordMap = await notion.getPage(chartePageId);

  return (
    <main
      className={
        "flex flex-col items-center gap-4 bg-white py-10 text-black sm:gap-8 sm:py-16"
      }
    >
      <Button
        asChild
        variant={"secondary"}
        className={"bg-[#F3F3F3] hover:bg-pg-green-lightest"}
      >
        <Link href={"https://pantheondugreenwashing.fr"}>Retour au site</Link>
      </Button>

      <section
        id="charte"
        className={"bg-white py-8 text-pg-green-darkest"}
        style={{
          backgroundImage: "url('/charte.svg')",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={"container flex flex-col items-center gap-8"}>
          <h2 className={"relative flex w-fit flex-col"}>
            <span className={"font-clash text-4xl uppercase sm:text-6xl"}>
              Charte
            </span>
            <span className={"font-clash text-4xl uppercase sm:text-6xl"}>
              Consortium
            </span>
            <span
              className={
                "text-shadow-sm-white absolute left-1/2 top-1/2 inline -translate-x-1/2 -translate-y-1/2  font-libre text-xl sm:text-3xl"
              }
            >
              du
            </span>
          </h2>
          <div className={"flex flex-wrap gap-4"}>
            {members.map((member, key) => (
              <Image
                key={member.name + member.logo + key}
                src={member.logo}
                alt={member.name}
                width={77}
                height={77}
                className={"w-[35px] rounded-full sm:w-[77px]"}
              />
            ))}
          </div>
        </div>
      </section>

      <NotionPage recordMap={recordMap} rootPageId={chartePageId} />
    </main>
  );
}
