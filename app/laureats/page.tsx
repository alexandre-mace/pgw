import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function Laureats() {
  // const databaseId = process.env.NOTION_DATABASE_ID;
  //
  // if (!databaseId) return <></>;
  //
  // const response = await notion.databases.query({
  //   database_id: databaseId,
  // });

  return (
    <main>
      <div>
        {/*{response.results.map((page) => (*/}
        {/*  <div key={page.id}>*/}
        {/*    <div>title: {page.properties["Name"].title[0]?.text?.content}</div>*/}
        {/*    <div>*/}
        {/*      tags:{" "}*/}
        {/*      {page.properties["Tags"].multi_select.map((tag) => tag.name)}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*))}*/}
      </div>
    </main>
  );
}
