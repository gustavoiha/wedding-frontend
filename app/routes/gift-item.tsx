import type { Gift } from "./gifts"

export default function GiftItem ({
  gift
}: {
  gift: Gift
}): React.ReactElement {
  return (
    <div className="group relative">
      <img
        src={gift.image.src}
        alt={gift.image.alt}
        className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
      />

      <h3 className="mt-4 text-base">
        <a href="#">
          <span className="absolute inset-0"/>
          {gift.name}
        </a>
      </h3>

      <p className="uppercase mt-1 text-sm font-semibold text-stone-500">
        {gift.category}
      </p>
    </div>
  )
}
