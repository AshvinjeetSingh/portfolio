import React, { useEffect, useState } from 'react'

type Props = {}

const useHash = (props: Props) => {
    const [hash, setHash] = useState(window.location.hash);
    useEffect(() => {
        const onHashChange = () => {
            setHash(window.location.hash);
        };
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);
    return hash;
}

export default useHash