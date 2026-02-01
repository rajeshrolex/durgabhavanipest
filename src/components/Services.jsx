import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = '919542681438'

const services = [
    {
        id: 1,
        icon: '🐛',
        title: 'Anti-Termite Pipeline System',
        description: 'Advanced pipeline treatment system for complete termite protection in buildings.',
        image: '/images/antitermite.png',
    },
    {
        id: 2,
        icon: '🐜',
        title: 'Termite Control',
        description: 'Comprehensive termite inspection and treatment to protect your property from structural damage.',
        image: '/images/termite.png',
    },
    {
        id: 3,
        icon: '🪳',
        title: 'Cockroach Control',
        description: 'Effective gel baiting and spray treatments to eliminate cockroaches from your premises.',
        image: '/images/cockroach.png',
    },
    {
        id: 4,
        icon: '🛏️',
        title: 'Bed Bug Treatment',
        description: 'Heat treatment and chemical solutions to completely eliminate bed bug infestations.',
        image: '/images/bedbug.png',
    },
    {
        id: 5,
        icon: '🐝',
        title: 'Honey Bee Control',
        description: 'Safe and humane honey bee removal and relocation services for homes and businesses.',
        image: '/images/honeybee.png',
    },
    {
        id: 6,
        icon: '🦟',
        title: 'Mosquito Control',
        description: 'Fogging and larvicide treatments to reduce mosquito populations and prevent diseases.',
        image: '/images/mosquito.png',
    },
    {
        id: 7,
        icon: '🐀',
        title: 'Rodent Control',
        description: 'Safe and humane rodent removal and prevention solutions for homes and businesses.',
        image: '/images/rodent.png',
    },
    {
        id: 8,
        icon: '🏠',
        title: 'General Pest Control',
        description: 'Complete pest management for ants, spiders, flies, and other common household pests.',
        image: '/images/general.png',
    },
    {
        id: 9,
        icon: '💨',
        title: 'Fogging Control',
        description: 'Professional thermal fogging services for large-scale pest control in outdoor and indoor areas.',
        image: '/images/fogging.png',
    },
]

const serviceAreas = [
    { icon: '🏢', title: 'Apartments' },
    { icon: '🏭', title: 'Industrial' },
    { icon: '🏪', title: 'Commercial' },
    { icon: '🏢', title: 'Offices' },
    { icon: '🏦', title: 'Banks' },
    { icon: '🏨', title: 'Hotels' },
    { icon: '🏠', title: 'Hostels' },
    { icon: '💊', title: 'Pharmacy Companies' },
    { icon: '🎬', title: 'Cinema Malls' },
    { icon: '🛒', title: 'Shopping Malls' },
]

const handleWhatsAppClick = (serviceName) => {
    const message = encodeURIComponent(`Hi, I'm interested in ${serviceName} service. Please provide more details.`)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
}

const Services = () => {
    return (
        <section id="services" className="py-16 md:py-20 lg:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                        Our Services
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
                        Professional <span className="gradient-text">Pest Control</span> Services
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                        We offer comprehensive pest management solutions tailored to your specific needs. Our expert technicians use the latest techniques and eco-friendly products.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="card-hover h-full flex flex-col overflow-hidden bg-white rounded-2xl shadow-lg">
                                {/* Image */}
                                <div className="relative h-44 md:h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {/* Icon Badge */}
                                    <div className="absolute top-3 right-3 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-lg md:text-xl shadow-lg">
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4 md:p-5 flex flex-col flex-grow">
                                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4 flex-grow">
                                        {service.description}
                                    </p>

                                    {/* WhatsApp Button */}
                                    <button
                                        onClick={() => handleWhatsAppClick(service.title)}
                                        className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2.5 px-4 rounded-lg font-medium transition-colors text-sm"
                                    >
                                        <FaWhatsapp className="w-5 h-5" />
                                        Enquire on WhatsApp
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Service Areas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 md:mt-20"
                >
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-8">
                        We Serve All Types of <span className="gradient-text">Properties</span>
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        {serviceAreas.map((area, index) => (
                            <motion.div
                                key={area.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
                            >
                                <span className="text-lg">{area.icon}</span>
                                <span className="text-sm font-medium text-gray-700">{area.title}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Services
