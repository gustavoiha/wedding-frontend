import { Link } from "@remix-run/react"

export default function GiftChoice () {
  return (
    <article className="mx-auto max-w-2xl text-center py-48 md:py-52 lg:py-64 px-6 lg:px-0">
      <h1 className="font-serif text-2xl md:text-4xl">
        Presentear Brayan & Gustavo
      </h1>

      <section>
        <h2 className="text-lg md:text-xl mt-32">
          Código pix
        </h2>

        <p className="text-xl mt-8">
          11997129911
        </p>
      </section>

      <div className="mt-32">
        <Link to="/" className="py-2 px-6 border border-solid border-stone-50 text-sm rounded-sm">
          Voltar
        </Link>
      </div>
    </article>
  )
}
