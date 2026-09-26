"use client"

import { GPTVis as GPTVisCore, type VisualizationOptions } from "@antv/gpt-vis"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export interface GPTVisProps extends Omit<VisualizationOptions, "container"> {
  content: string | Record<string, unknown>
  className?: string
  containerStyle?: React.CSSProperties
}

export function GPTVis({ content, width, height, theme, wrapper, locale, className, containerStyle }: GPTVisProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const instanceRef = useRef<GPTVisCore | null>(null)
  useEffect(() => {
    if (!containerRef.current) return
    const instance = new GPTVisCore({ container: containerRef.current, width, height, theme, wrapper, locale })
    instanceRef.current = instance
    return () => { instance.destroy(); instanceRef.current = null }
  }, [width, height, theme, wrapper, locale])
  const contentDeps = typeof content === "string" ? content : JSON.stringify(content)
  useEffect(() => { instanceRef.current?.render(content) }, [contentDeps])
  return <div ref={containerRef} className={cn("w-full min-h-[220px]", className)} style={containerStyle} />
}

export default GPTVis
