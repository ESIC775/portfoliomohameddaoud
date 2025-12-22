import React from 'react';

const Experiences = () => {
    return (
        <section id="experiences" className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden min-h-screen">
            {/* Background decoration */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    Expériences Professionnelles
                </h2>
                <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
                    {/* Experience 1 - Al-Gamil */}
                    <div className="relative pl-8 sm:pl-12 border-l-2 border-blue-500/50 hover:border-blue-500 transition-colors group">
                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500 group-hover:scale-125 transition-transform shadow-lg shadow-blue-500/50"></div>
                        <div className="glass rounded-xl p-4 sm:p-6 hover-lift">
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Développeur Web</h3>
                            <p className="text-blue-400 mb-1 text-sm sm:text-base">Al-Gamil • Djibouti</p>
                            <p className="text-gray-500 mb-4 text-sm">04/2021 - 07/2021</p>
                            
                            <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Missions réalisées :</h4>
                            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2 mt-1">•</span>
                                    <span>Développement d'applications web en utilisant HTML, CSS et JavaScript</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2 mt-1">•</span>
                                    <span>Concevoir et développer l'interface utilisateur</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2 mt-1">•</span>
                                    <span>Développement d'interfaces web, front et back</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2 mt-1">•</span>
                                    <span>Mise en place de tests unitaires et d'intégration pour garantir le bon fonctionnement du code</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2 mt-1">•</span>
                                    <span>Optimisation du code existant pour améliorer la performance et la convivialité des applications web</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2 mt-1">•</span>
                                    <span>Intégration d'API externes dans les projets web</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Experience 2 - Wilo-Technologie */}
                    <div className="relative pl-8 sm:pl-12 border-l-2 border-purple-500/50 hover:border-purple-500 transition-colors group">
                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500 group-hover:scale-125 transition-transform shadow-lg shadow-purple-500/50"></div>
                        <div className="glass rounded-xl p-4 sm:p-6 hover-lift">
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Développeur Web</h3>
                            <p className="text-purple-400 mb-1 text-sm sm:text-base">Wilo-Technologie • Djibouti</p>
                            <p className="text-gray-500 mb-4 text-sm">11/2020 - 02/2021</p>
                            
                            <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Missions réalisées :</h4>
                            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2 mt-1">•</span>
                                    <span>Création de sites web dynamiques en utilisant HTML, CSS et JavaScript</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2 mt-1">•</span>
                                    <span>Intégration de bases de données SQL pour le stockage des données</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2 mt-1">•</span>
                                    <span>Mettre en place des bases de données relationnelles</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2 mt-1">•</span>
                                    <span>Contrôle du bon fonctionnement du site web et de la qualité de navigation</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2 mt-1">•</span>
                                    <span>Développement des fonctionnalités d'une application en apportant les solutions techniques innovantes correspondantes aux besoins du client</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2 mt-1">•</span>
                                    <span>Optimisation du code existant pour améliorer la performance des applications web développées</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2 mt-1">•</span>
                                    <span>Collaboration étroite avec les équipes commerciales pour identifier les besoins clients et proposer des solutions adaptées</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
