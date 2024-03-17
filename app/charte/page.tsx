import { NotionAPI } from "notion-client";
import { NotionPage } from "@/components/NotionPage";

const notion = new NotionAPI();

export default async function Charte() {
  const chartePageId = "0e7277b262c14aaeafe3801c66a632ab";
  const recordMap = await notion.getPage(chartePageId);

  return (
    <main>
      <NotionPage recordMap={recordMap} rootPageId={chartePageId} />
    </main>
  );
}
