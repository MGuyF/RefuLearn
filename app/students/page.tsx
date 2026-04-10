"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { useNavigate } from "../../utils/useNavigate";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const students = [
  {
    id: "amina",
    name: "Amina, 19",
    gender: "female",
    course: "Nursing",
    story: "Dreams of becoming a nurse to help her community."
  },
  {
    id: "rashid",
    name: "Rashid, 21",
    gender: "male",
    course: "Engineering",
    story: "Passionate about building sustainable solutions."
  },
  {
    id: "amir",
    name: "Amir, 18",
    gender: "male",
    course: "Education",
    story: "Wants to become a teacher and give back."
  }
]

export default function StudentsPage() {
  const { goTo } = useNavigate()
  return (
    <main className="relative min-h-screen text-gray-900 py-20 px-6 overflow-hidden">

      {/* BACKGROUND (identique Donate) */}
      <img
        src="/students-bg.webp"
        alt="Students background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.15),rgba(0,0,0,0.65))]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/10 to-black/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.25),transparent_70%)]"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* NAV MINI */}
        <div className="-mt-12 flex justify-between items-center">
          <Link href="/" className="font-bold text-lg text-green-600">
            RefuLearn
          </Link>

          <Link
            href="/donate"
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition"
          >
            Donate
          </Link>
        </div>

        {/* TITLE */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl font-bold text-white">
            Meet the Students
          </h1>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            These students are building their future thanks to your support.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {students.map((student, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition"></div>

              {/* Card */}
              <div className="relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl overflow-hidden">

                {/* IMAGE */}
                <img
                  src={`/students/${student.gender}-${i + 1}.webp`}
                  alt={student.name}
                  className="h-56 w-full object-cover"
                />

                {/* CONTENT */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold">
                    {student.name}
                  </h3>

                  <p className="text-green-600 text-sm mt-1">
                    {student.course}
                  </p>

                  <p className="text-gray-600 text-sm mt-3">
                    {student.story}
                  </p>

                  {/* CTA */}
                  <motion.button
                    onClick={() => goTo(`/students/${student.id}`)}
                    whileHover={{ scale: 1.05 }}
                    className="mt-4 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl shadow"
                  >
                    Support this student
                  </motion.button>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </main>
  )
}