import React from 'react';
import Resume from '../components/Resume';

import PageTransition from '../components/PageTransition';

const ResumePage = () => {
    return (
        <PageTransition>
            <Resume />
        </PageTransition>
    );
};

export default ResumePage;
