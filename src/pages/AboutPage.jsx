import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiAward, FiUsers, FiCalendar, FiMapPin, FiCheck, FiArrowRight } from 'react-icons/fi'
import SEO from '../components/SEO'

const stats = [
    { icon: FiCalendar, value: '15+', label: 'Years Experience' },
    { icon: FiUsers, value: '10,000+', label: 'Happy Customers' },
    { icon: FiAward, value: '100%', label: 'Satisfaction Rate' },
    { icon: FiMapPin, value: '50+', label: 'Service Areas' },
]

const values = [
    {
        title: 'Customer First',
        description: 'We prioritize customer satisfaction in everything we do, ensuring the best service experience.',
    },
    {
        title: 'Quality Service',
        description: 'Our trained professionals use premium products and proven techniques for effective pest control.',
    },
    {
        title: 'Environmental Responsibility',
        description: 'We use eco-friendly products that are safe for your family, pets, and the environment.',
    },
    {
        title: 'Continuous Improvement',
        description: 'We stay updated with the latest pest control technologies and methods.',
    },
]

const team = [
    {
        name: 'Expert Technicians',
        role: 'Certified Professionals',
        description: 'Our team of certified technicians undergoes rigorous training to provide the best pest control solutions.',
    },
    {
        name: 'Customer Support',
        role: '24/7 Availability',
        description: 'Our dedicated support team is available round the clock to address your pest control emergencies.',
    },
    {
        name: 'Quality Assurance',
        role: 'Inspection Team',
        description: 'Our quality assurance team ensures that every treatment meets our high standards.',
    },
]

const AboutPage = () => {
    return (
        <main className="pt-20">
            <SEO
                title="About Us"
                description="Learn about Durga Bhavani Pest Control's history, values, and expert team. Over 15 years of experience in providing safe and effective pest management."
                canonical="/about"
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
                            About Us
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Your Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Pest Control</span> Partner
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Over 15 years of experience in providing safe, effective, and environmentally responsible pest management solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <stat.icon className="w-10 h-10 text-primary-600 mx-auto mb-4" />
                                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 lg:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Our <span className="gradient-text">Story</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Durga Bhavani Pest Control was founded with a simple mission: to provide effective, safe, and affordable pest management solutions to homes and businesses in Hyderabad and surrounding areas.
                            </p>
                            <p className="text-gray-600 mb-6">
                                What started as a small family business has grown into one of the most trusted pest control companies in the region. Over the years, we have helped thousands of customers protect their properties from termites, cockroaches, rodents, mosquitoes, and other pests.
                            </p>
                            <p className="text-gray-600 mb-8">
                                Our success is built on our commitment to customer satisfaction, use of quality products, and employment of trained professionals who care about what they do.
                            </p>
                            <Link to="/contact" className="btn-primary">
                                Contact Us
                                <FiArrowRight className="ml-2" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="rounded-3xl overflow-hidden shadow-xl"
                        >
                            <img
                                src="/images/team.png"
                                alt="Our Professional Team"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">
                            Our <span className="gradient-text">Values</span>
                        </h2>
                        <p className="section-subtitle">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 rounded-2xl p-8"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FiCheck className="w-5 h-5 text-primary-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                                        <p className="text-gray-600">{value.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 lg:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">
                            Our <span className="gradient-text">Team</span>
                        </h2>
                        <p className="section-subtitle">
                            Meet the professionals behind our success
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-white font-bold text-2xl">{member.name.charAt(0)}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                                <p className="text-gray-600">{member.description}</p>
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
                            Ready to Work with Us?
                        </h2>
                        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                            Contact us today for a free consultation and let us help you protect your property.
                        </p>
                        <Link to="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                            Get in Touch
                            <FiArrowRight className="ml-2" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}

export default AboutPage
