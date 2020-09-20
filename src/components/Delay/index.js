import React, { Suspense } from 'react';
import Loader from '../Loader'

const Delay = Component => {
    return props => (
        <Suspense fallback={<Loader />}>
            <Component {...props} />
        </Suspense>
    );
}

export default Delay;