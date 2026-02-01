import React from 'react'
import { motion } from 'framer-motion'
import { FiShield, FiClock, FiDollarSign, FiAward, FiHeart, FiPhone } from 'react-icons/fi'

const features = [
    {
        icon: FiShield,
        title: 'Licensed & Insured',
        description: 'Fully licensed professionals with comprehensive insurance coverage for your peace of mind.',
        color: 'bg-blue-500',
    },
    {
        icon: FiHeart,
        title: 'Eco-Friendly Solutions',
        description: 'Safe, environmentally responsible products that are effective yet gentle on nature.',
        color: 'bg-green-500',
    },
    {
        icon: FiClock,
        title: '24/7 Availability',
        description: 'Round-the-clock emergency pest control services whenever you need us.',
        color: 'bg-purple-500',
    },
    {
        icon: FiAward,
        title: 'Satisfaction Guarantee',
        description: 'We stand behind our work with a 100% satisfaction guarantee on all services.',
        color: 'bg-amber-500',
    },
    {
        icon: FiDollarSign,
        title: 'Affordable Pricing',
        description: 'Competitive rates with transparent pricing and no hidden fees.',
        color: 'bg-primary-500',
    },
    {
        icon: FiPhone,
        title: 'Free Consultation',
        description: 'Complimentary inspection and customized treatment plans for your property.',
        color: 'bg-rose-500',
    },
]

const WhyChooseUs = () => {
    return (
        <section className="py-16 md:py-20 lg:py-32 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <span className="inline-block px-3 md:px-4 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
                        Why Choose Us
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 md:mb-4">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Best Choice</span> for Pest Control
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto">
                        We combine years of experience with modern techniques to deliver exceptional pest control services that exceed your expectations.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 border border-white/10 hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300 h-full">
                                {/* Icon */}
                                <div className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 ${feature.color} rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-xs md:text-sm lg:text-base text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
