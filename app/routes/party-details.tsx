import { Link } from "@remix-run/react"

import venueLogo from "./images/le-jazz-boulangerie.svg"

export default function PartyDetails () {
  return (
    <article className="mx-auto max-w-2xl text-center px-6 lg:px-0">
      <h2 className="font-serif text-4xl">
        Celebração/Despedida
      </h2>

      <img
        src={venueLogo}
        alt="Logo da Le Jazz Boulangerie"
        className="mx-auto mt-16"
      />

      <p className="text-base mt-32">
        Acreditamos na filosofia do "brunch all day". Por isso, o Le Jazz Boulangerie é o lugar perfeito para comemorar essa nossa nova fase!
      </p>

      <section className="mt-16">
        <h3 className="uppercase text-sm text-stone-400">
          Data
        </h3>

        <p className="text-base mt">
          28 de Junho de 2025
        </p>
      </section>

      <section className="mt-6">
        <h3 className="uppercase text-sm text-stone-400">
          Horário
        </h3>

        <p className="text-base mt">
          18:00
        </p>
      </section>

      <section className="mt-6">
        <h3 className="uppercase text-sm text-stone-400">
          Local
        </h3>

        <p className="text-base mt">
          Le Jazz Boulangerie
        </p>

        <p className="text-base mt">
          R. Joaquim Antunes, 501 - Pinheiros, São Paulo - SP, 05415-010
        </p>
      </section>

      <section className="mt-6">
        <h3 className="uppercase text-sm text-stone-400">
          Cardápio
        </h3>

        <a
          className="text-base mt underline"
          href="https://lejazz.com.br/CardapioLeJazzBoulangerie/CARDAPIO%20LE%20JAZZ%20BOULANGERIE.pdf"
        >
          Opções de comida
        </a>
      </section>

      <section className="mt-6">
        <h3 className="uppercase text-sm text-stone-400">
          Dress code
        </h3>

        <p className="text-base mt">
          Esporte fino
        </p>
      </section>

      <div className="mt-20">
        <a
          href="https://forms.gle/wVQMykyTAAD2ZABf6"
          className="py-2 px-6 bg-stone-50 text-stone-950 text-sm rounded-sm"
        >
          Confirmar presença
        </a>
      </div>
    </article>
  )
}
