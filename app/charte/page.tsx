import { NotionAPI } from "notion-client";
import { NotionPage } from "@/components/NotionPage";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const notion = new NotionAPI();

export default async function Charte() {
  const chartePageId = "d5bdab0ba0094db0b702e884d3df04f0";
  const recordMap = await notion.getPage(chartePageId);

  return (
    <main
      className={
        "flex flex-col items-center gap-8 bg-white py-32 text-black sm:gap-10"
      }
    >
      <Button
        asChild
        variant={"secondary"}
        className={"bg-[#F3F3F3] hover:bg-pg-green-lightest"}
      >
        <Link href={"https://pantheondugreenwashing.fr"}>Retour au site</Link>
      </Button>
      <NotionPage recordMap={recordMap} rootPageId={chartePageId} />
    </main>
  );
}
