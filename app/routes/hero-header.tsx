import weddingPhoto from "./images/gustavo-brayan-casamento.jpg"

export default function HeroHeader (): React.ReactElement {
  return (
    <section className="mx-auto max-w-4xl text-center">
      <div className="relative">
        <img src={weddingPhoto} alt="Gustavo e Brayan dando as mãos" />

        <span className="absolute top-0 left-0 w-full h-full bg-linear-to-b/oklch from-transparent to-stone-950 to-90%" />

        <div className="absolute bottom-0 w-full pb-8 md:pb-16 lg:pb-20 px-6 lg:px-0">
          <h1 className="font-serif text-4xl md:text-6xl">
            Brayan & Gustavo
          </h1>

          <p className="text-lg md:text-xl mt-16">
            Nos casamos! E vamos nos mudar para Lisboa!
          </p>
        </div>
      </div>

      <p className="text-lg md:text-xl mt-16 md:mt-24 lg:mt-32 max-w-sm md:max-w-lg mx-auto">
        Venha celebrar a nossa união e a nossa próxima aventura pela Guiana Brasileira
      </p>
    </section>
  )
}
