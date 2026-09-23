"use client"

import React, { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export interface AnimatedListProps {
  className?: string
  children: React.ReactNode
  delay?: number
  maxItems?: number
}

export const AnimatedList = React.memo(({ className, children, delay = 1000, maxItems = 3 }: AnimatedListProps) => {
  const [index, setIndex] = useState(0)
  const childrenArray = React.Children.toArray(children)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((previousIndex) => (previousIndex + 1) % childrenArray.length)
    }, delay)

    return () => clearInterval(interval)
  }, [childrenArray.length, delay])

  const itemsToShow = useMemo(() => {
    const count = Math.min(maxItems, childrenArray.length)
    return Array.from({ length: count }, (_, offset) => {
      const itemIndex = (index - offset + childrenArray.length) % childrenArray.length
      return { item: childrenArray[itemIndex], itemIndex }
    })
  }, [index, childrenArray, maxItems])

  return <div className={`flex flex-col items-center gap-4 ${className ?? ""}`}>{itemsToShow.map(({ item, itemIndex }) => <AnimatedListItem key={`${itemIndex}-${index}`}>{item}</AnimatedListItem>)}</div>
})

AnimatedList.displayName = "AnimatedList"

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, originY: 0 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 350, damping: 40 }}
      layout
      className="mx-auto w-full"
    >
      {children}
    </motion.div>
  )
}
