import Link from "next/link";
import { Button } from "@/components/ui/button";

const Nav = () => (
  <nav
    className={
      "left-1/2 z-10 inline-flex w-full items-center justify-between gap-12 rounded-2xl px-3 py-3 pl-5 text-sm uppercase sm:sticky sm:top-4 sm:w-auto sm:-translate-x-1/2 sm:justify-start sm:bg-pg-green-darker"
    }
  >
    <Link href={"#intro"} className={"flex sm:hidden"}>
      <span className={"font-clash text-4xl"}>P</span>
      <span
        className={"translate-y-2 font-libre text-4xl lowercase"}
        style={{
          textShadow:
            "rgb(2, 27, 10) 4px 0px 0px, rgb(2, 27, 10) 3.87565px 0.989616px 0px, rgb(2, 27, 10) 3.51033px 1.9177px 0px, rgb(2, 27, 10) 2.92676px 2.72656px 0px, rgb(2, 27, 10) 2.16121px 3.36588px 0px, rgb(2, 27, 10) 1.26129px 3.79594px 0px, rgb(2, 27, 10) 0.282949px 3.98998px 0px, rgb(2, 27, 10) -0.712984px 3.93594px 0px, rgb(2, 27, 10) -1.66459px 3.63719px 0px, rgb(2, 27, 10) -2.51269px 3.11229px 0px, rgb(2, 27, 10) -3.20457px 2.39389px 0px, rgb(2, 27, 10) -3.69721px 1.52664px 0px, rgb(2, 27, 10) -3.95997px 0.56448px 0px, rgb(2, 27, 10) -3.97652px -0.432781px 0px, rgb(2, 27, 10) -3.74583px -1.40313px 0px, rgb(2, 27, 10) -3.28224px -2.28625px 0px, rgb(2, 27, 10) -2.61457px -3.02721px 0px, rgb(2, 27, 10) -1.78435px -3.57996px 0px, rgb(2, 27, 10) -0.843183px -3.91012px 0px, rgb(2, 27, 10) 0.150409px -3.99717px 0px, rgb(2, 27, 10) 1.13465px -3.8357px 0px, rgb(2, 27, 10) 2.04834px -3.43574px 0px, rgb(2, 27, 10) 2.83468px -2.82216px 0px, rgb(2, 27, 10) 3.44477px -2.03312px 0px, rgb(2, 27, 10) 3.84068px -1.11766px 0px, rgb(2, 27, 10) 3.9978px -0.132717px 0px",
        }}
      >
        g
      </span>
      <span className={"font-clash text-4xl"}>W</span>
    </Link>
    <Link
      href={"#intro"}
      className={"hidden sm:block"}
      data-to-scrollspy-id="intro"
    >
      Intro
    </Link>
    <Link
      href={"#archives"}
      className={"hidden sm:block"}
      data-to-scrollspy-id="archives"
    >
      Lauréats
    </Link>
    <Link
      href={"#charte"}
      className={"hidden sm:block"}
      data-to-scrollspy-id="charte"
    >
      Charte
    </Link>
    <Link
      href={"#ressources"}
      className={"hidden sm:block"}
      data-to-scrollspy-id="ressources"
    >
      Ressources
    </Link>
    <Link
      href={"#apparitions"}
      className={"hidden sm:block"}
      data-to-scrollspy-id="apparitions"
    >
      Apparitions
    </Link>
    <Button
      asChild
      variant={"secondary"}
      className={"rounded-lg bg-white text-pg-green"}
    >
      <Link href={"/contact"} target={"_blank"}>
        Nous contacter
      </Link>
    </Button>
  </nav>
);

export default Nav;
