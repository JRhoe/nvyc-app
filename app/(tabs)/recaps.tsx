import LandingPage from '@/components/LandingPage';
import { pages } from '@/constants';
import React from 'react';

const Recaps = () => {
    return (
        // Show list based on index.ts in constants folder
        <LandingPage {...pages.recaps}/>
    );
}


export default Recaps;
