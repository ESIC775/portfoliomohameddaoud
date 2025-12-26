import React from 'react';
import Hero from '../components/Hero';

import PageTransition from '../components/PageTransition';

const HomePage = () => {
    return (
        <PageTransition>
            <Hero />
        </PageTransition>
    );
};

export default HomePage;
