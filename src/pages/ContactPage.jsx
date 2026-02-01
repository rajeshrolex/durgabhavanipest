import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi'
import SEO from '../components/SEO'

const contactInfo = [
    {
        icon: FiPhone,
        title: 'Phone',
        details: ['+91 87901 28760', '+91 95426 81438'],
        link: 'tel:+918790128760',
    },
    {
        icon: FiMail,
        title: 'Email',
        details: ['durgabhavanipestcontrol@gmail.com', 'durgabhavanipesticids@gmail.com'],
        link: 'mailto:durgabhavanipestcontrol@gmail.com',
    },
    {
        icon: FiMapPin,
        title: 'Our Branches',
        details: [
            '37 plot ragavendra colony, madapur ayyappa society, 500081',
            '1-47/2/27 office vinayaka nager Nizamabad, 503001',
            '1-37/22/2 plot near bus stand ambethukar circul karimnagar, 505001'
        ],
        link: null,
    },
    {
        icon: FiClock,
        title: 'Working Hours',
        details: ['Mon - Sat: 8:00 AM - 10:00 PM', 'Sunday: 8:00 AM - 5:00 PM'],
        link: null,
    },
]

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const message = `Hello! I'm interested in your pest control services.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AService: ${formData.service}%0AMessage: ${formData.message}`
        window.open(`https://wa.me/919542681438?text=${message}`, '_blank')
    }

    return (
        <main className="pt-20">
            <SEO
                title="Contact Us"
                description="Get in touch with Durga Bhavani Pest Control for a free quote. We serve Hyderabad, Nizamabad, and Karimnagar."
                canonical="/contact"
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
                            Contact Us
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Touch</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Ready to solve your pest problems? Contact us for a free inspection and customized treatment plan.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 lg:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Quote</h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="input-primary"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="input-primary"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="input-primary"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                            Service Required *
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                            className="input-primary"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="Termite Control">Termite Control</option>
                                            <option value="Cockroach Control">Cockroach Control</option>
                                            <option value="Rodent Control">Rodent Control</option>
                                            <option value="Mosquito Control">Mosquito Control</option>
                                            <option value="Bed Bug Treatment">Bed Bug Treatment</option>
                                            <option value="General Pest Control">General Pest Control</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="input-primary"
                                            placeholder="Tell us about your pest problem..."
                                        />
                                    </div>

                                    <button type="submit" className="btn-primary w-full text-lg py-4">
                                        <FiSend className="mr-2" />
                                        Send Message via WhatsApp
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-2xl p-6 flex items-start space-x-4 shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <info.icon className="w-6 h-6 text-primary-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{info.title}</h4>
                                        {info.details.map((detail, i) => (
                                            info.link ? (
                                                <a
                                                    key={i}
                                                    href={info.link}
                                                    className="block text-gray-600 hover:text-primary-600 transition-colors"
                                                >
                                                    {detail}
                                                </a>
                                            ) : (
                                                <p key={i} className="text-gray-600">{detail}</p>
                                            )
                                        ))}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Map */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-80">
                                <iframe
                                    src="https://maps.google.com/maps?q=37%20Plot%20Ragavendra%20Colony%2C%20Madapur%20Ayyappa%20Society%2C%20Hyderabad%20500081&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Location Map"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ContactPage
