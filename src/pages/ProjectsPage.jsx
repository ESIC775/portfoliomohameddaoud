import React from 'react';
import Projects from '../components/Projects';

import PageTransition from '../components/PageTransition';

const ProjectsPage = () => {
    return (
        <PageTransition>
            <Projects />
        </PageTransition>
    );
};

export default ProjectsPage;
