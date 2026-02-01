import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
    const phoneNumber = '919542681438'
    const message = 'Hello! I need pest control services. Can you help me?'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <div className="relative">
                {/* Pulse Animation */}
                <span className="absolute inset-0 w-full h-full rounded-full bg-green-500 animate-ping opacity-50" />

                {/* Button */}
                <div className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors">
                    <FaWhatsapp className="w-8 h-8 text-white" />
                </div>

                {/* Tooltip */}
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 hidden md:block">
                    <div className="bg-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
                        <span className="text-gray-700 font-medium">Chat with us!</span>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-white" />
                    </div>
                </div>
            </div>
        </motion.a>
    )
}

export default WhatsAppButton
