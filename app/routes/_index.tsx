import HeroHeader from "./hero-header"
import PartyDetails from "./party-details"
import GiveGift from "./give-gift"
import OurStory from "./our-story"

export default function RouteIndex () {
  return (
    <main>
      <HeroHeader />

      <div className="mt-48">
        <PartyDetails />
      </div>

      <div className="mt-48">
        <OurStory />
      </div>

      <div className="mt-48 pb-48">
        <GiveGift />
      </div>
    </main>
  )
}
