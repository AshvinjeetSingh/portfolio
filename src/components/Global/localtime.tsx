'use client'

import { Suspense, useEffect, useState } from 'react'


export function useHydration() {
    const [hydrated, setHydrated] = useState(false)
    useEffect(() => {
        setHydrated(true)
    }, [])
    return hydrated
}

export function LocalTime({ date }: { date: Date | string | number }) {
    const hydrated = useHydration()
    return (
        <Suspense key={hydrated ? 'local' : 'utc'}>
            <time dateTime={new Date(date).toISOString()}>
                {new Date(date).toLocaleTimeString()}
                {hydrated ? '' : ' (UTC)'}
            </time>
        </Suspense>
    )
}