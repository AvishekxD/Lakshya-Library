"use client"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/maruqee"
import { Star } from "lucide-react"
import { Review } from "@/components/layout/reviews"
import { memo, useMemo } from "react"
import { getDynamicTime } from "./getDynamicTime"

type ReviewWithTime = Review & { dynamicTime: string }

const Stars = memo(({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star
        key={i}
        size={12}
        className="fill-yellow-400 text-yellow-400"
      />
    ))}
  </div>
))

const ReviewCard = memo(function ReviewCard({
  img,
  name,
  body,
  stars,
  dynamicTime,
}: ReviewWithTime) {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-4 hover:scale-103 transition-all ease-linear",
        "border-gray-950/10 bg-white/80 hover:bg-white",
        "dark:border-gray-50/10 dark:bg-(--secondary2)/95 dark:hover:bg-(--secondary)/95"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          src={img || "/fallback-user.svg"}
          alt={name}
          width={32}
          height={32}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="rounded-full"
          onError={(e) => {
            e.currentTarget.src = "/fallback-user.svg"
            e.currentTarget.onerror = null
          }}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">
            {dynamicTime}
          </p>
        </div>
      </div>

      {/* Star Rating Section */}
      <div className="mt-2 flex gap-0.5">
        <Stars count={stars} />
      </div>

      <blockquote className="mt-2 text-sm line-clamp-3">{body}</blockquote>
    </figure>
  )
})



export function Feedback({ reviews }: { reviews: Review[] }) {
  const enrichedReviews = useMemo<ReviewWithTime[]>(() => {
    const now = Date.now()
    return reviews.map((r) => ({
      ...r,
      dynamicTime: getDynamicTime(r.captured_at, r.time, now),
    }))
  }, [reviews])

  const VISIBLE = 20
  const firstRow = enrichedReviews.slice(0, VISIBLE)
  const secondRow = enrichedReviews.slice(VISIBLE, VISIBLE * 2)

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-50">
      <Marquee pauseOnHover className="[--duration:200s]">
        {firstRow.map((review) => (
          <ReviewCard key={`${review.name}-${review.body}`} {...review} />
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover className="[--duration:200s] mt-4">
        {secondRow.map((review) => (
          <ReviewCard key={`${review.name}-${review.body}`} {...review} />
        ))}
      </Marquee>

      {/* Fade Gradients */}
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l"></div>
    </div>
  )
}