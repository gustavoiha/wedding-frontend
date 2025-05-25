import HeroHeader from "./hero-header"
import PartyDetails from "./party-details"
import GiftDisplay from "./gift-display"

export default function RouteIndex () {
  return (
    <main>
      <HeroHeader />

      <div className="mt-20">
        <PartyDetails />
      </div>

      <div className="mt-32">
        <GiftDisplay />
      </div>
    </main>
  )
}
