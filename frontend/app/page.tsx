"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Sun, Moon, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-pacifico",
})

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
    isDark = false,
}: {
    className?: string
    delay?: number
    width?: number
    height?: number
    rotate?: number
    gradient?: string
    isDark?: boolean
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        isDark
                            ? "backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]"
                            : "backdrop-blur-[2px] border-2 border-black/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]",
                        isDark
                            ? "after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                            : "after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent_70%)]",
                    )}
                />
            </motion.div>
        </motion.div>
    )
}

export default function HeroGeometric({
    badge = "Kokonut UI",
    title1 = "Elevate Your",
    title2 = "Digital Vision",
}: {
    badge?: string
    title1?: string
    title2?: string
}) {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    }

    const navItems = [
        { name: "Home", href: "#" },
        { name: "Features", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "About", href: "#" },
    ]

    return (
        <div
            className={cn(
                "relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden transition-colors duration-300",
                isDarkMode ? "bg-[#030303] dark" : "bg-gray-50",
            )}
        >
            {/* Navigation Bar */}
            <div
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-colors duration-300",
                    isDarkMode ? "bg-[#030303]/80 backdrop-blur-md" : "bg-gray-50/80 backdrop-blur-md",
                )}
            >
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div
                            className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center mr-2",
                                isDarkMode ? "bg-white/10" : "bg-gray-200",
                            )}
                        >
                            <span className={cn(pacifico.className, "text-xl", isDarkMode ? "text-white" : "text-gray-800")}>K</span>
                        </div>
                        <span className={cn("font-semibold text-lg", isDarkMode ? "text-white" : "text-gray-800")}>Kokonut</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors duration-200",
                                    isDarkMode ? "text-white/70 hover:text-white" : "text-gray-600 hover:text-gray-900",
                                )}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Auth Buttons and Theme Toggle */}
                    <div className="hidden md:flex items-center space-x-3">
                        <Button
                            variant={isDarkMode ? "outline" : "secondary"}
                            size="sm"
                            className={cn(
                                "transition-colors duration-300",
                                isDarkMode ? "text-white border-white/20 hover:bg-white/10" : "text-gray-700",
                            )}
                        >
                            Sign In
                        </Button>
                        <Button
                            variant="default"
                            size="sm"
                            className={cn(
                                "transition-colors duration-300",
                                isDarkMode ? "bg-white text-gray-900 hover:bg-white/90" : "bg-gray-900 text-white hover:bg-gray-800",
                            )}
                        >
                            Sign Up
                        </Button>
                        <button
                            onClick={toggleTheme}
                            className={cn(
                                "p-2 rounded-full transition-colors duration-300",
                                isDarkMode ? "bg-white/10 text-white hover:bg-white/20" : "bg-gray-200 text-gray-800 hover:bg-gray-300",
                            )}
                        >
                            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center space-x-3">
                        <button
                            onClick={toggleTheme}
                            className={cn(
                                "p-2 rounded-full transition-colors duration-300",
                                isDarkMode ? "bg-white/10 text-white hover:bg-white/20" : "bg-gray-200 text-gray-800 hover:bg-gray-300",
                            )}
                        >
                            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={cn(
                                "p-2 rounded-md transition-colors duration-300",
                                isDarkMode ? "text-white" : "text-gray-800",
                            )}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div
                    className={cn(
                        "fixed inset-0 z-40 pt-20 px-4 transition-colors duration-300 md:hidden",
                        isDarkMode ? "bg-[#030303]" : "bg-gray-50",
                    )}
                >
                    <div className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "py-2 text-lg font-medium transition-colors duration-200",
                                    isDarkMode ? "text-white/70 hover:text-white" : "text-gray-600 hover:text-gray-900",
                                )}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="flex flex-col space-y-3 pt-4">
                            <Button
                                variant={isDarkMode ? "outline" : "secondary"}
                                className={cn(
                                    "w-full transition-colors duration-300",
                                    isDarkMode ? "text-white border-white/20 hover:bg-white/10" : "text-gray-700",
                                )}
                            >
                                Sign In
                            </Button>
                            <Button
                                variant="default"
                                className={cn(
                                    "w-full transition-colors duration-300",
                                    isDarkMode ? "bg-white text-gray-900 hover:bg-white/90" : "bg-gray-900 text-white hover:bg-gray-800",
                                )}
                            >
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            <div
                className={cn(
                    "absolute inset-0 blur-3xl transition-colors duration-300",
                    isDarkMode
                        ? "bg-gradient-to-br from-purple-500/[0.07] via-transparent to-pink-500/[0.07]"
                        : "bg-gradient-to-br from-purple-200/[0.3] via-transparent to-pink-200/[0.3]",
                )}
            />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient={isDarkMode ? "from-purple-500/[0.12]" : "from-purple-300/[0.2]"}
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                    isDark={isDarkMode}
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient={isDarkMode ? "from-pink-500/[0.12]" : "from-pink-300/[0.2]"}
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                    isDark={isDarkMode}
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient={isDarkMode ? "from-blue-500/[0.12]" : "from-blue-300/[0.2]"}
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                    isDark={isDarkMode}
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient={isDarkMode ? "from-teal-500/[0.12]" : "from-teal-300/[0.2]"}
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                    isDark={isDarkMode}
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient={isDarkMode ? "from-amber-500/[0.12]" : "from-amber-300/[0.2]"}
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                    isDark={isDarkMode}
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 mt-20">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className={cn(
                            "inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8 md:mb-12 transition-colors duration-300",
                            isDarkMode ? "bg-white/[0.03] border-white/[0.08]" : "bg-black/[0.02] border-black/[0.05]",
                        )}
                    >
                        <Image src="https://kokonutui.com/logo.svg" alt="Kokonut UI" width={20} height={20} />
                        <span
                            className={cn(
                                "text-sm tracking-wide transition-colors duration-300",
                                isDarkMode ? "text-white/60" : "text-black/60",
                            )}
                        >
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent transition-colors duration-300",
                                    isDarkMode ? "bg-gradient-to-b from-white to-white/80" : "bg-gradient-to-b from-gray-900 to-gray-700",
                                )}
                            >
                                {title1}
                            </span>
                            <br />
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent transition-colors duration-300",
                                    isDarkMode
                                        ? "bg-gradient-to-r from-purple-300 via-white/90 to-pink-300"
                                        : "bg-gradient-to-r from-purple-600 via-gray-800 to-pink-600",
                                    pacifico.className,
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
                        <p
                            className={cn(
                                "text-base sm:text-lg md:text-xl mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4 transition-colors duration-300",
                                isDarkMode ? "text-white/40" : "text-black/60",
                            )}
                        >
                            Crafting exceptional digital experiences through innovative design and cutting-edge technology.
                        </p>
                    </motion.div>

                    <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                size="lg"
                                className={cn(
                                    "transition-colors duration-300",
                                    isDarkMode ? "bg-white text-gray-900 hover:bg-white/90" : "bg-gray-900 text-white hover:bg-gray-800",
                                )}
                            >
                                Get Started
                            </Button>
                            <Button
                                variant={isDarkMode ? "outline" : "secondary"}
                                size="lg"
                                className={cn(
                                    "transition-colors duration-300",
                                    isDarkMode ? "text-white border-white/20 hover:bg-white/10" : "text-gray-700",
                                )}
                            >
                                Learn More
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div
                className={cn(
                    "absolute inset-0 pointer-events-none transition-colors duration-300",
                    isDarkMode
                        ? "bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80"
                        : "bg-gradient-to-t from-gray-50 via-transparent to-gray-50/80",
                )}
            />
        </div>
    )
}