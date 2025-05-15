import HeroHeader from "./hero-header"
import GiftDisplay from "./gift-display"

export default function RouteIndex () {
  return (
    <article>
      <HeroHeader />

      <div className="mt-32">
        <GiftDisplay />
      </div>
    </article>
  )
}
