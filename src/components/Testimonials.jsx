import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'

const testimonials = [
    {
        id: 1,
        name: 'Rajesh Kumar',
        role: 'Homeowner',
        content: 'Excellent service! The team was professional and thorough. They completely eliminated our termite problem. Highly recommend Durga Bhavani Pest Control.',
        rating: 5,
        avatar: 'RK',
    },
    {
        id: 2,
        name: 'Priya Sharma',
        role: 'Restaurant Owner',
        content: 'We\'ve been using their services for our restaurant for over 3 years. Always reliable, always effective. The best pest control service in the area.',
        rating: 5,
        avatar: 'PS',
    },
    {
        id: 3,
        name: 'Mohammed Ali',
        role: 'Property Manager',
        content: 'Managing multiple properties, I need a pest control partner I can trust. Durga Bhavani has never let me down. Quick response and great results.',
        rating: 5,
        avatar: 'MA',
    },
    {
        id: 4,
        name: 'Lakshmi Devi',
        role: 'Homeowner',
        content: 'Very happy with the bed bug treatment. The team was courteous and explained everything clearly. No more sleepless nights!',
        rating: 5,
        avatar: 'LD',
    },
]

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    // Auto-scroll every 6 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 6000)
        return () => clearInterval(timer)
    }, [])

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="py-16 md:py-20 lg:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <span className="inline-block px-3 md:px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
                        Testimonials
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
                        What Our <span className="gradient-text">Customers</span> Say
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our satisfied customers have to say about our services.
                    </p>
                </motion.div>

                {/* Testimonials Carousel */}
                <div className="relative max-w-4xl mx-auto px-6 md:px-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl"
                        >
                            {/* Stars */}
                            <div className="flex justify-center mb-4 md:mb-6">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <FiStar key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current" />
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="text-base md:text-xl lg:text-2xl text-gray-700 text-center mb-6 md:mb-8 leading-relaxed">
                                "{testimonials[currentIndex].content}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center justify-center space-x-3 md:space-x-4">
                                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm md:text-lg">
                                    {testimonials[currentIndex].avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-sm md:text-base text-gray-900">{testimonials[currentIndex].name}</div>
                                    <div className="text-gray-500 text-xs md:text-sm">{testimonials[currentIndex].role}</div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all"
                    >
                        <FiChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all"
                    >
                        <FiChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center space-x-2 mt-6 md:mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 md:h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-primary-600 w-6 md:w-8'
                                    : 'bg-gray-300 hover:bg-gray-400 w-2 md:w-3'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
