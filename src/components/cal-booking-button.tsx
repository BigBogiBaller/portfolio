"use client"

import { useEffect } from "react"
import { getCalApi } from "@calcom/embed-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function CalBookingButton() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: "30min" })
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" })
    })()
  }, [])

  return (
    <Button
      size="lg"
      data-cal-namespace="30min"
      data-cal-link="bogdan-lekic/30min"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      className="gap-2 h-14 px-10 text-lg font-bold bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-100"
    >
      <Calendar className="size-6" />
      Book Your Free Consultation
    </Button>
  )
}
