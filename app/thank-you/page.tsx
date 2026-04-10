"use client"

import { motion } from "framer-motion"
import { CheckCircle, Heart, Share2 } from "lucide-react"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="/thankyou-bg.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/20 to-black/60"></div>

      {/* LIGHT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.25),transparent_70%)]"></div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-xl w-full"
      >

        {/* GLASS CARD */}
        <div className="bg-white/41 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center border border-white/10">

          {/* ICON */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="flex justify-center mb-4"
          >
            <CheckCircle size={60} className="text-green-600" />
          </motion.div>

          {/* TITLE */}
          <h1 className="text-3xl font-bold text-gray-900">
            Thank You for Your Generosity 💚
          </h1>

          {/* MESSAGE */}
          <p className="mt-4 text-gray-700">
            Your donation is making a real difference.  
            You just helped a student move closer to their dreams.
          </p>

          {/* IMPACT CARD */}
          <div className="mt-6 bg-green-50/40 rounded-xl p-4 text-green-700">
            <p className="font-semibold">Impact:</p>
            <p className="text-sm">
              Your contribution helps provide education, resources, and hope.
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

            <Link href="/">
              <button className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition backdrop-blur-none border border-white/10">
            Back to Home
              </button>
            </Link>

            <Link href="/donate">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg flex items-center justify-center gap-2">
                <Heart size={18} />
                Donate Again
              </button>
            </Link>

            <button className="px-6 py-3 rounded-xl border flex items-center justify-center gap-2 hover:bg-gray-50">
              <Share2 size={18} />
              Share
            </button>

          </div>

        </div>

        {/* FOOT NOTE */}
        <p className="text-center text-gray-200 text-sm mt-6">
          Every action counts. Thank you for being part of this mission.
        </p>

      </motion.div>

    </main>
  )
}