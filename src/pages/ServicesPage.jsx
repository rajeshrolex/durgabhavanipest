import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiCheck, FiArrowRight, FiPhone } from 'react-icons/fi'
import SEO from '../components/SEO'

const services = [
    {
        id: 1,
        icon: '🐛',
        title: 'Termite Control',
        description: 'Termites can cause severe structural damage to your property. Our comprehensive termite control services include professional inspection, soil treatment, wood treatment, and ongoing monitoring to protect your home or business.',
        features: [
            'Pre-construction anti-termite treatment',
            'Post-construction termite control',
            'Wood borer treatment',
            'Annual maintenance contracts',
        ],
        color: 'from-amber-500 to-orange-600',
        image: '/images/termite_control.jpg',
    },
    {
        id: 2,
        icon: '🪳',
        title: 'Cockroach Control',
        description: 'Cockroaches spread diseases and contaminate food. We use advanced gel baiting technology and residual spray treatments to eliminate cockroach infestations and prevent future occurrences.',
        features: [
            'Gel baiting treatment',
            'Residual spray treatment',
            'Crack and crevice treatment',
            'Kitchen and bathroom focus',
        ],
        color: 'from-red-500 to-rose-600',
        image: '/images/cockroach.png',
    },
    {
        id: 3,
        icon: '🐀',
        title: 'Rodent Control',
        description: 'Rats and mice can damage property and spread diseases. Our rodent control program includes baiting, trapping, and exclusion techniques to eliminate and prevent rodent infestations.',
        features: [
            'Safe bait stations',
            'Mechanical traps',
            'Entry point sealing',
            'Ongoing monitoring',
        ],
        color: 'from-gray-500 to-slate-600',
        image: '/images/rodent.png',
    },
    {
        id: 4,
        icon: '🦟',
        title: 'Mosquito Control',
        description: 'Protect your family from mosquito-borne diseases like dengue, malaria, and chikungunya. Our mosquito control services include fogging, larviciding, and source reduction.',
        features: [
            'Thermal fogging',
            'Larvicide treatment',
            'Breeding site elimination',
            'Residual spraying',
        ],
        color: 'from-blue-500 to-cyan-600',
        image: '/images/mosquito.png',
    },
    {
        id: 5,
        icon: '🛏️',
        title: 'Bed Bug Treatment',
        description: 'Bed bugs can cause sleepless nights and itchy bites. Our professional bed bug treatment uses a combination of heat treatment and targeted insecticides for complete elimination.',
        features: [
            'Thorough inspection',
            'Heat treatment',
            'Chemical treatment',
            'Follow-up visits',
        ],
        color: 'from-purple-500 to-violet-600',
        image: '/images/hero.png',
    },
    {
        id: 6,
        icon: '🐜',
        title: 'General Pest Control',
        description: 'Comprehensive pest management for common household pests including ants, spiders, flies, silverfish, and more. Regular treatments keep your home pest-free year-round.',
        features: [
            'Ants and spiders',
            'Flies and mosquitoes',
            'Silverfish and beetles',
            'Preventive treatments',
        ],
        color: 'from-primary-500 to-primary-700',
        image: '/images/hero.png',
    },
]

const ServicesPage = () => {
    return (
        <main className="pt-20">
            <SEO
                title="Our Services"
                description="Professional pest control services including termite control, cockroach control, rodent control, mosquito control, and more."
                keywords="pest control services, termite treatment, cockroach herbal treatment, mosquito fogging"
                canonical="/services"
            />
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <span className="inline-block px-4 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium mb-4">
                            Our Services
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Pest Control</span> Services
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Comprehensive pest management solutions tailored to your needs. Safe, effective, and environmentally responsible.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services List */}
            <section className="py-20 lg:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Content */}
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-6`}>
                                        {service.icon}
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center space-x-3">
                                                <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                                                    <FiCheck className="w-4 h-4 text-primary-600" />
                                                </div>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-4">
                                        <Link to="/contact" className="btn-primary">
                                            Get Free Quote
                                            <FiArrowRight className="ml-2" />
                                        </Link>
                                        <a href="tel:+918790128760" className="btn-secondary">
                                            <FiPhone className="mr-2" />
                                            Call Now
                                        </a>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className={`rounded-3xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:order-1' : ''
                                    }`}>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-80 object-cover"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Get Rid of Pests?
                        </h2>
                        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                            Contact us today for a free inspection and customized treatment plan.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                                Get Free Quote
                                <FiArrowRight className="ml-2" />
                            </Link>
                            <a href="tel:+918790128760" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center">
                                <FiPhone className="mr-2" />
                                +91 87901 28760
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}

export default ServicesPage
