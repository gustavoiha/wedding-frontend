import { Link } from "@remix-run/react"

export default function GiveGift (): React.ReactElement {
  return (
    <article className="mx-auto max-w-2xl text-center px-6 lg:px-0">
      <h2 className="text-4xl">
        Presentes
      </h2>

      <p className="mt-16">
        Como estamos no meio do processo de mudar de país, queremos manter as coisas simples. Se você quiser nos presentear, acesse o link abaixo para fazer um pix:
      </p>

      <div className="mt-12">
        <Link to="/lembranca" className="py-2 px-6 border border-solid border-stone-50 text-sm rounded-sm">
          Dar um presente
        </Link>
      </div>
    </article>
  )
}
