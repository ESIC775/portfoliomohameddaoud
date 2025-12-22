import React from 'react';

const Preloader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950 transition-opacity duration-1000">
            <div className="relative flex flex-col items-center justify-center">
                {/* Outer Glow Ring */}
                <div className="absolute w-32 h-32 rounded-full border-t-2 border-l-2 border-blue-500/50 animate-spin blur-sm"></div>
                <div className="absolute w-32 h-32 rounded-full border-b-2 border-r-2 border-purple-500/50 animate-spin blur-sm" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
                
                {/* Inner Content */}
                <div className="relative z-10 flex flex-col items-center">
                    {/* Logo/Icon Area */}
                    <div className="w-20 h-20 mb-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl rotate-45 flex items-center justify-center shadow-lg shadow-blue-500/20 animate-pulse">
                        <span className="text-white text-2xl font-bold -rotate-45">MD</span>
                    </div>
                    
                    {/* Loading Text */}
                    <div className="flex items-center space-x-1 mt-4">
                        <div className="w-1 h-8 bg-blue-500 rounded animate-[bounce_1s_infinite]"></div>
                        <div className="w-1 h-8 bg-purple-500 rounded animate-[bounce_1s_infinite_0.1s]"></div>
                        <div className="w-1 h-8 bg-pink-500 rounded animate-[bounce_1s_infinite_0.2s]"></div>
                    </div>
                    
                    <h2 className="mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold tracking-widest text-sm animate-pulse">
                        CHARGEMENT...
                    </h2>
                </div>
                
                {/* Background effects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            </div>
        </div>
    );
};

export default Preloader;
