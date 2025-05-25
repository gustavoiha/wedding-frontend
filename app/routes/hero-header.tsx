import weddingPhoto from "./images/gustavo-brayan-casamento.jpg"

export default function HeroHeader (): React.ReactElement {
  return (
    <section className="mx-auto max-w-4xl text-center">
      <div className="relative">
        <img src={weddingPhoto} alt="Gustavo e Brayan dando as mãos" />

        <span className="absolute top-0 left-0 w-full h-full bg-linear-to-b/oklch from-transparent to-stone-950 to-90%" />

        <div className="absolute bottom-0 w-full pb-20">
          <h1 className="text-4xl md:text-6xl">
            Brayan & Gustavo
          </h1>

          <p className="text-lg md:text-xl mt-8">
            Nos casamos! E vamos nos mudar para Lisboa!
          </p>
        </div>
      </div>
    </section>
  )
}
