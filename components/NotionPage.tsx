"use client";

import { ExtendedRecordMap } from "notion-types";
import { Modal } from "react-notion-x/build/third-party/modal";
import { Equation } from "react-notion-x/build/third-party/equation";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Code } from "react-notion-x/build/third-party/code";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion-x";
import Link from "next/link";

interface NotionPageProps {
  recordMap: ExtendedRecordMap;
  rootPageId: string;
}

export const NotionPage = ({ recordMap, rootPageId }: NotionPageProps) => {
  if (!recordMap) {
    return null;
  }

  return (
    <div className={"notion-container"}>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false}
        darkMode={false}
        rootPageId={rootPageId}
        previewImages
        components={{
          nextLink: Link,
          Code,
          Collection,
          Equation,
          Modal,
        }}
      />
    </div>
  );
};
