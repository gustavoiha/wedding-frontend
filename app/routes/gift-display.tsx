import GiftItem from "./gift-item"
import gifts from "./gifts"

export default function GiftDisplay (): React.ReactElement {
  return (
    <div className="mx-auto max-w-4xl">
      <h2 className="text-2xl text-center">
        Presentes
      </h2>

      <div className="mt-12 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-y-6 lg:gap-x-6 lg:gap-y-8">
        {gifts.map((gift) => (
          <GiftItem gift={gift} />
        ))}
      </div>
    </div>
  )
}
