"use client"

import type { VisualizationOptions } from "@antv/gpt-vis"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export interface GPTVisProps extends Omit<VisualizationOptions, "container"> {
  content: string | Record<string, unknown>
  className?: string
  containerStyle?: React.CSSProperties
}

export function GPTVis({ content, width, height, theme, wrapper, locale, className, containerStyle }: GPTVisProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const instanceRef = useRef<{ render: (value: string | Record<string, unknown>) => void; destroy: () => void } | null>(null)
  useEffect(() => {
    let cancelled = false
    const container = containerRef.current
    if (!container) return

    void import("@antv/gpt-vis").then(({ GPTVis: GPTVisCore }) => {
      if (cancelled || !container) return
      const instance = new GPTVisCore({ container, width, height, theme, wrapper, locale })
      instanceRef.current = instance
      instance.render(content)
    })

    return () => {
      cancelled = true
      instanceRef.current?.destroy()
      instanceRef.current = null
    }
  }, [width, height, theme, wrapper, locale])

  const contentDeps = typeof content === "string" ? content : JSON.stringify(content)
  useEffect(() => { instanceRef.current?.render(content) }, [contentDeps])
  return <div ref={containerRef} className={cn("w-full min-h-[220px]", className)} style={containerStyle} />
}

export default GPTVis
