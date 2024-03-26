import { Button } from "@/components/ui/button";
import Link from "next/link";
import members from "@/data/members.json";
import Image from "next/image";

const Charte = () => (
  <section
    id="charte"
    className={"bg-white py-16 text-pg-green-darkest sm:py-24"}
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
      <Button
        asChild
        className={
          "rounded-xl bg-pg-green-lighter text-pg-green-darkest hover:bg-pg-green-lighter"
        }
      >
        <Link href={"/charte"} target={"_blank"}>
          Lire notre charte
        </Link>
      </Button>
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
);

export default Charte;
