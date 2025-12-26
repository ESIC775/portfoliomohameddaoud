import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-16 sm:py-20 relative overflow-hidden min-h-screen">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                >
                    Me Contacter
                </motion.h2>
                
                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="glass rounded-2xl p-6 sm:p-8 hover-lift">
                            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">Informations de Contact</h3>
                            
                            {/* Phone */}
                            <div className="flex items-start mb-6 group">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Téléphone</p>
                                    <a href="tel:0749092219" className="text-lg text-white hover:text-blue-400 transition-colors">
                                        07 49 09 22 19
                                    </a>
                                </div>
                            </div>
                            
                            {/* Location */}
                            <div className="flex items-start group">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Localisation</p>
                                    <p className="text-lg text-white">
                                        93240 Stains
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="glass rounded-2xl p-6 sm:p-8 shadow-2xl hover-lift"
                    >
                        <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">Envoyez un Message</h3>
                        <form className="space-y-5">
                            {/* Name Input */}
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium text-sm sm:text-base" htmlFor="name">Nom</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm sm:text-base" 
                                    placeholder="Votre nom" 
                                />
                            </div>
                            
                            {/* Email Input */}
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium text-sm sm:text-base" htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-sm sm:text-base" 
                                    placeholder="votre@email.com" 
                                />
                            </div>
                            
                            {/* Message Textarea */}
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium text-sm sm:text-base" htmlFor="message">Message</label>
                                <textarea 
                                    id="message" 
                                    rows="4" 
                                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none text-sm sm:text-base" 
                                    placeholder="Votre message..."
                                ></textarea>
                            </div>
                            
                            {/* Submit Button */}
                            <button 
                                type="submit" 
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 sm:py-4 rounded-lg transition-all shadow-lg hover:shadow-purple-500/50 hover:scale-105 text-sm sm:text-base"
                            >
                                Envoyer
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
