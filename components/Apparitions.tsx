import apparitions from "@/data/apparitions";
import Link from "next/link";
import Image from "next/image";

const Apparitions = () => (
  <section
    id="apparitions"
    className={
      "container mx-auto flex flex-col justify-between gap-10 py-12 sm:flex-row"
    }
  >
    <h2 className={"relative flex w-fit flex-col items-start self-center"}>
      <span
        className={"text-shadow-sm z-10 -mb-2 font-libre text-xl sm:text-3xl"}
      >
        Apparitions
      </span>
      <span className={"font-clash text-3xl uppercase sm:text-5xl"}>
        PRESSE
      </span>
    </h2>

    <div className={"flex items-center gap-16"}>
      {apparitions.map((apparition) => (
        <Link
          key={apparition.link}
          className={"inline-block"}
          href={apparition.link}
          target={"_blank"}
        >
          <Image
            src={apparition.logo}
            alt={apparition.title}
            width={apparition.width}
            height={apparition.height}
          />
        </Link>
      ))}
    </div>
  </section>
);

export default Apparitions;
