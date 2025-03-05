import type React from "react"
import Image from "next/image"
import type { StaticImageData } from "next/image"
import { cn } from "@/utils/cn"

interface PathLineProps {
  src: StaticImageData | string
  direction: "left" | "right"
  className?: string
}

const PathLine: React.FC<PathLineProps> = ({ src, direction, className }) => (
  <Image
    src={src || "/placeholder.svg"}
    alt={`${direction} path line`}
    className={cn(
      "md:absolute md:h-56 ",
      direction === "left" ? "md:left-[300px] left-[50px] md:mt-[150px]" : "  md:right-[360px] md:mt-[135px]",
      className,
    )}
  />
)

export default PathLine

