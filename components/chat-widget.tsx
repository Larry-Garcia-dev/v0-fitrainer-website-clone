"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function ChatWidget() {
  const whatsappNumber = "573155774777"
  const message = encodeURIComponent("Hola! Me gustaria obtener mas informacion sobre CardioFit Lab.")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <div className="rounded-2xl p-6 bg-[#0a1628]/80 border border-[#00fffd]/20 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-green-500/20">
          <MessageCircle className="w-6 h-6 text-green-400" />
        </div>
        <div className="flex-1">
          <p className="text-white font-medium">Chat en vivo</p>
          <p className="text-[#68d2df] text-sm">Escribenos por WhatsApp</p>
        </div>
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
        >
          Chatear
        </Link>
      </div>
    </div>
  )
}
