import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPhone, FiArrowRight, FiShield, FiCheck, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const heroSlides = [
    {
        id: 1,
        image: '/images/hero-new.png',
        title: 'Durga Bhavani Pest Control Service',
        subtitle: 'Expert Solutions for Your Home',
    },
    {
        id: 2,
        image: '/images/hero2.png',
        title: 'Safe for Your Family',
        subtitle: 'Eco-Friendly & Pet Safe',
    },
    {
        id: 3,
        image: '/images/hero3.png',
        title: 'Trusted Professionals',
        subtitle: '15+ Years of Excellence',
    },
]

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    // Auto-scroll every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    }

    return (
        <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
            {/* Background Images */}
            {heroSlides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/80 to-dark-900/60" />
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="hidden sm:flex absolute left-2 md:left-4 lg:left-8 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-white/20 transition-all"
                aria-label="Previous slide"
            >
                <FiChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="hidden sm:flex absolute right-2 md:right-4 lg:right-8 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-white/20 transition-all"
                aria-label="Next slide"
            >
                <FiChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 md:space-x-3">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-6 md:w-8 bg-primary-500' : 'w-2 bg-white/50 hover:bg-white/70'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center space-x-2 bg-primary-500/20 backdrop-blur-sm text-primary-300 px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4 md:mb-6"
                        >
                            <FiShield className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="text-xs md:text-sm font-medium">Professional Pest Control Services</span>
                        </motion.div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-2 md:mb-4 leading-tight">
                                    {heroSlides[currentSlide].title}
                                </h1>
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-400 font-semibold mb-3 md:mb-6">
                                    {heroSlides[currentSlide].subtitle}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-5 md:mb-8 max-w-xl leading-relaxed">
                            Expert pest control solutions for your home and business. Safe, effective, and eco-friendly treatments that protect your family and property.
                        </p>

                        <div className="flex flex-col gap-3 md:flex-row md:gap-4 mb-5 md:mb-8">
                            <Link to="/contact" className="btn-primary text-sm md:text-base px-5 md:px-6 py-2.5 md:py-3 justify-center">
                                Get Free Inspection
                                <FiArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                            </Link>
                            <a href="tel:+918790128760" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-sm md:text-base px-5 md:px-6 py-2.5 md:py-3 justify-center">
                                <FiPhone className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                                Call Now
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-6 text-xs md:text-sm text-gray-400">
                            <div className="flex items-center space-x-1.5 md:space-x-2">
                                <FiCheck className="w-3 h-3 md:w-4 md:h-4 text-primary-400" />
                                <span>Licensed & Insured</span>
                            </div>
                            <div className="flex items-center space-x-1.5 md:space-x-2">
                                <FiCheck className="w-3 h-3 md:w-4 md:h-4 text-primary-400" />
                                <span>Eco-Friendly</span>
                            </div>
                            <div className="flex items-center space-x-1.5 md:space-x-2">
                                <FiCheck className="w-3 h-3 md:w-4 md:h-4 text-primary-400" />
                                <span>24/7 Service</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
