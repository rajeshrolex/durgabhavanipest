import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi'

const contactInfo = [
    {
        icon: FiPhone,
        title: 'Phone',
        details: ['+91 98765 43210', '+91 87654 32109'],
        link: 'tel:+919876543210',
    },
    {
        icon: FiMail,
        title: 'Email',
        details: ['info@durgabhavanipest.in'],
        link: 'mailto:info@durgabhavanipest.in',
    },
    {
        icon: FiMapPin,
        title: 'Address',
        details: ['Hyderabad, Telangana', 'India'],
        link: null,
    },
    {
        icon: FiClock,
        title: 'Working Hours',
        details: ['Mon - Sat: 8AM - 8PM', 'Sunday: 9AM - 5PM'],
        link: null,
    },
]

const Contact = () => {
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
        // Create WhatsApp message
        const message = `Hello! I'm interested in your pest control services.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AService: ${formData.service}%0AMessage: ${formData.message}`
        window.open(`https://wa.me/919876543210?text=${message}`, '_blank')
    }

    return (
        <section id="contact" className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                        Contact Us
                    </span>
                    <h2 className="section-title">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="section-subtitle">
                        Ready to get rid of those pests? Contact us for a free inspection and quote. We're here to help!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
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
                                        rows={4}
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
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 rounded-2xl p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow"
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

                        {/* Map Placeholder */}
                        <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3267!2d78.24323!3d17.41228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1620000000000"
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
    )
}

export default Contact
