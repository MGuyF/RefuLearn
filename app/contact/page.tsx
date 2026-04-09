"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { useNavigate } from "../../utils/useNavigate"
import { FaUserGraduate, FaBookOpen, FaDonate, FaUsers, FaEnvelope } from "react-icons/fa"

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const { goTo } = useNavigate()

    const [isOpen, setIsOpen] = useState(false)

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        alert("Message sent successfully!")
    }

    return (
        <main className="bg-gray-50 relative min-h-screen text-gray-900 overflow-hidden">

            {/* NAVBAR */}
            <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                    <Link href="/" className="font-bold text-lg text-green-600">
                        RefuLearn
                    </Link>

                    {/* DESKTOP */}
                    <div className="hidden md:flex gap-6 items-center">
                        <Link href="/about" className="flex items-center gap-1 hover:text-green-600">
                            <FaUserGraduate /> About
                        </Link>
                        <Link href="/impact" className="flex items-center gap-1 hover:text-green-600">
                            <FaBookOpen /> Impact
                        </Link>
                        <Link href="/students" className="flex items-center gap-1 hover:text-green-600">
                            <FaUsers /> Students
                        </Link>
                        <Link href="/contact" className="flex items-center gap-1 hover:text-green-600">
                            <FaEnvelope /> Contact
                        </Link>
                        <motion.button
                            onClick={() => goTo("/donate")}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2 rounded-xl shadow"
                        >
                            <FaDonate /> Support a Student
                        </motion.button>
                    </div>

                    {/* MOBILE BUTTON */}
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* MOBILE MENU */}
                {isOpen && (
                    <div className="md:hidden bg-white shadow-lg px-6 py-6 space-y-4">
                        <Link href="/about" className="flex items-center gap-2">
                            <FaUserGraduate /> About
                        </Link>
                        <Link href="/impact" className="flex items-center gap-2">
                            <FaBookOpen /> Impact
                        </Link>
                        <Link href="/students" className="flex items-center gap-2">
                            <FaUsers /> Students
                        </Link>
                        <Link href="/contact" className="flex items-center gap-2">
                            <FaEnvelope /> Contact
                        </Link>
                        <button onClick={() => goTo("/donate")} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-3 rounded-xl">
                            <FaDonate /> Support a Student
                        </button>
                    </div>
                )}
            </nav>

            {/* BACKGROUND */}
            <img
                src="/contact-bg.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80"></div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">

                {/* HERO */}
                <motion.div
                    className="text-center"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Contact Us
                    </h1>

                    <p className="mt-4 text-gray-600 max-w-xl mx-auto">
                        Have questions, suggestions, or want to collaborate?
                        We’d love to hear from you.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="mt-16 grid md:grid-cols-2 gap-10">

                    {/* FORM */}
                    <motion.div
                        variants={fadeInUp}
                        className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-lg p-8"
                    >
                        <h2 className="text-xl font-semibold mb-6">Send a Message</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full px-6 py-3 rounded-xl border focus:ring-2 focus:ring-green-500"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full px-6 py-3 rounded-xl border focus:ring-2 focus:ring-green-500"
                            />

                            <textarea
                                name="message"
                                placeholder="Your message..."
                                value={form.message}
                                onChange={handleChange}
                                rows={5}
                                required
                                className="w-full px-6 py-3 rounded-xl border focus:ring-2 focus:ring-green-500"
                            />

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow flex items-center justify-center gap-2"
                            >
                                <Send size={18} />
                                Send Message
                            </motion.button>

                        </form>
                    </motion.div>

                    {/* CONTACT INFO */}
                    <motion.div
                        variants={fadeInUp}
                        className="space-y-6"
                    >
                        <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow flex items-center gap-4">
                            <Mail className="text-green-600" />
                            <div>
                                <p className="font-medium">Email</p>
                                <p className="text-gray-600 text-sm">contact@RefuLearn.org</p>
                            </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow flex items-center gap-4">
                            <Phone className="text-green-600" />
                            <div>
                                <p className="font-medium">Phone</p>
                                <p className="text-gray-600 text-sm">+250 7XX XXX XXX</p>
                            </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow flex items-center gap-4">
                            <MapPin className="text-green-600" />
                            <div>
                                <p className="font-medium">Location</p>
                                <p className="text-gray-600 text-sm">Global / Remote Support</p>
                            </div>
                        </div>

                        {/* CTA BOX */}
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-2xl shadow">
                            <h3 className="font-semibold text-lg">
                                Want to support our mission?
                            </h3>
                            <p className="text-green-100 text-sm mt-2">
                                Your contribution helps students access education.
                            </p>

                            <Link href="/donate">
                                <button onClick={() => goTo("/donate")} className="mt-4 bg-white text-green-600 px-4 py-2 rounded-lg font-semibold">
                                    Donate Now
                                </button>
                            </Link>
                        </div>

                    </motion.div>
                </div>
            </div>

            {/* FOOTER */}
            <footer className="bg-white text-center py-8 text-gray-900 text-sm">
                © 2026 Rohingya Education Support — All rights reserved
            </footer>

        </main>
    )
}