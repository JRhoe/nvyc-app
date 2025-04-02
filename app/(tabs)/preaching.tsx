import LandingPage from '@/components/LandingPage';
import { pages } from '@/constants';
import React from 'react';

const Preaching = () => {
    return (
        // Show list based on index.ts in constants folder
        <LandingPage {...pages.preaching}/>
    );
}


export default Preaching;
