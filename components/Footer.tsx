import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => (
  <footer className={"bg-pg-green-darker py-8"}>
    <div className={"container mx-auto flex  items-center justify-between"}>
      <div>
        <Button
          asChild
          variant={"secondary"}
          className={"rounded-lg bg-white text-pg-green"}
        >
          <Link href={"/contact"} target={"_blank"}>
            Nous contacter
          </Link>
        </Button>
      </div>
      <div className={"font-clash"}>PGW 2024©</div>
    </div>
  </footer>
);

export default Footer;
