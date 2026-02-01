import React from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiCalendar, FiMapPin } from 'react-icons/fi'

const stats = [
    { icon: FiCalendar, value: '15+', label: 'Years Experience' },
    { icon: FiUsers, value: '10,000+', label: 'Happy Customers' },
    { icon: FiAward, value: '100%', label: 'Satisfaction Rate' },
    { icon: FiMapPin, value: '50+', label: 'Service Areas' },
]

const About = () => {
    return (
        <section id="about" className="py-16 md:py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Stats Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur-2xl opacity-20" />
                        <div className="relative bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
                            <div className="grid grid-cols-2 gap-3 md:gap-4">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                        className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                                    >
                                        <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-600 mx-auto mb-2 md:mb-3" />
                                        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                        <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <span className="inline-block px-3 md:px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
                            About Us
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                            Your Trusted Partner in
                            <span className="gradient-text block">Pest Management</span>
                        </h2>

                        <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                            Durga Bhavani Pest Control has been serving the community for over 15 years, providing professional and reliable pest management solutions for homes and businesses.
                        </p>

                        <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
                            Our team of certified technicians uses the latest technology and eco-friendly products to ensure effective pest control while keeping your family, pets, and the environment safe.
                        </p>

                        <div className="space-y-3 md:space-y-4">
                            {[
                                'Licensed and certified pest control professionals',
                                'Safe, eco-friendly treatment methods',
                                'Comprehensive inspection and customized solutions',
                                'Competitive pricing with no hidden costs',
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-center space-x-3"
                                >
                                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3 h-3 md:w-4 md:h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-sm md:text-base text-gray-700">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
