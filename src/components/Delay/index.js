//#region Imports

// Import react components
import React, { Suspense } from 'react';

// Import custom components
import LoaderSpinner from '../LoaderSpinner'

//#endregion

/**
 * Delay Constant
 *  
 * Wraps a React.Suspend, passed from App.js, around the passed Component. As a suspense fallback a custom spinner is being used.
 * 
 * @name Suspend
 * @component
 * @param {ReactElement} Component 
 */

const Delay = Component => {
    return props => (
        <Suspense fallback={<LoaderSpinner />}>
            <Component {...props} />
        </Suspense>
    );
}

export default Delay;