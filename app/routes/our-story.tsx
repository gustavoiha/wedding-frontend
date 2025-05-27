import photoAlps from "./images/gustavo-brayan-alpes.jpeg"
import photoAmsterdam from "./images/gustavo-brayan-amsterdam.jpeg"
import photoCycling from "./images/gustavo-brayan-bicicleta.jpeg"
import photoCrepe from "./images/gustavo-brayan-crepe.jpeg"
import photoElevator from "./images/gustavo-brayan-elevador.jpeg"
import photoVenice from "./images/gustavo-brayan-veneza.jpeg"

export default function OurStory () {
  return (
    <article className="mx-auto max-w-2xl text-center px-6 lg:px-0">
      <h2 className="font-serif text-2xl">
        Nossas viagens estão apenas começando!
      </h2>

      <div className="mt-24">
        <img
          src={photoAlps}
          alt="Gustavo e Brayan nos Alpes"
          loading="lazy"
        />

        <img
          src={photoAmsterdam}
          alt="Gustavo e Brayan em Amsterdam"
          loading="lazy"
        />

        <img
          src={photoCycling}
          alt="Gustavo e Brayan andando de bicicleta na Itália"
          loading="lazy"
        />

        <img
          src={photoCrepe}
          alt="Gustavo e Brayan comendo crepe em Amsterdam"
          loading="lazy"
        />

        <img
          src={photoElevator}
          alt="Gustavo e Brayan no elevador"
          loading="lazy"
        />

        <img
          src={photoVenice}
          alt="Gustavo e Brayan em Veneza"
          loading="lazy"
        />
      </div>
    </article>
  )
}
