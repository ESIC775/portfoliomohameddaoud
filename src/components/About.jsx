import React from 'react';

const About = () => {
    return (
        <section id="apropos" className="py-16 sm:py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden min-h-screen">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    À Propos
                </h2>
                
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Ma Passion */}
                    <div className="glass rounded-2xl p-6 sm:p-8 hover-lift">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">Ma Passion</h3>
                        </div>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p className="text-base sm:text-lg">
                                Mon parcours académique et mes passions m'ont permis de développer des compétences variées, à la croisée de l'informatique et des nouvelles technologies. Étudiant en Master 1 Informatique à l'Université Sorbonne Paris Nord, je suis à la recherche d'un <span className="text-blue-400 font-semibold">stage de 3 mois</span> dans le domaine du développement web.
                            </p>
                            <p className="text-base sm:text-lg">
                                Mes compétences techniques et mon expérience me motivent solidement à relever de nouveaux défis et à contribuer activement aux projets. Ambitieux et passionné, je souhaite mettre mon enthousiasme et mon engagement au service d'une équipe pour contribuer à son succès.
                            </p>
                        </div>
                    </div>
                    
                    {/* Mon Parcours */}
                    <div className="glass rounded-2xl p-6 sm:p-8 hover-lift">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">Mon Parcours</h3>
                        </div>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p className="text-base sm:text-lg">
                                Ma passion pour l'informatique a émergé dès mes années de lycée, et elle n'a cessé de grandir au fil de mes études universitaires. J'ai acquis une solide expérience en programmation, notamment avec des langages comme <span className="text-purple-400 font-semibold">HTML, CSS et JavaScript</span>.
                            </p>
                            <p className="text-base sm:text-lg">
                                J'ai également eu l'opportunité de travailler avec des frameworks modernes tels qu'<span className="text-purple-400 font-semibold">Angular et React</span>, dans le cadre de projets académiques et professionnels.
                            </p>
                            <p className="text-base sm:text-lg">
                                Mon parcours en Master m'a permis de perfectionner mes savoir-faire en développement web et d'explorer de nouvelles technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
