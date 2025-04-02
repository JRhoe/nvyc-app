import LandingPage from '@/components/LandingPage';
import { pages } from '@/constants';
import React from 'react';

const Skits = () => {
    return (
        // Show list based on index.ts in constants folder
        <LandingPage {...pages.skits}/>
    );
}


export default Skits;
