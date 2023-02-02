import React, { Suspense } from 'react';

export const RouteSuspense = ({ children, path }) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {children}
        </Suspense>
    )
}