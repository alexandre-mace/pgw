import ressources from "@/data/ressources";
import apparitions from "@/data/apparitions";
import Link from "next/link";

export default function Home() {
  return (
    <main className={"container mx-auto space-y-10"}>
      <section id={"presentation"}>
        <h2 className={"text-3xl font-bold"}>Présentation</h2>
        <p>
          "Chaque mois, le Consortium des Debunkers de Greenwashing (CDG)
          sélectionne 3 communications qui rendent "vert.e.s" de rage en
          essayant d'être vertes Notre objectif ? Exposer, décrypter et vous
          faire élire le pire greenwashing du mois À la clé pour le gagnant ?
          Une place au #PanthéonDuGreenwashing"
        </p>
      </section>
      <section id="laureats"></section>
      <section id={"ressources"}>
        <h2 className={"text-3xl font-bold"}>Ressources</h2>
        <div className={"grid gap-24 sm:grid-cols-2 md:grid-cols-4"}>
          {ressources.map((ressource) => (
            <Link
              key={ressource.link}
              className={"inline-block"}
              href={ressource.link}
              target={"_blank"}
            >
              {ressource.title}
            </Link>
          ))}
        </div>
      </section>
      <section id="apparitions">
        <h2 className={"text-3xl font-bold"}>Apparitions</h2>
        <div className={"grid md:grid-cols-2"}>
          {apparitions.map((apparition) => (
            <Link
              key={apparition.link}
              className={"inline-block"}
              href={apparition.link}
              target={"_blank"}
            >
              {apparition.title}
            </Link>
          ))}
        </div>
      </section>
      <section id="contact"></section>
    </main>
  );
}
