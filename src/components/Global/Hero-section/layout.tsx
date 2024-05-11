import React from 'react'
import localFont from "@next/font/local";



type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
    return (
        <div className= "flex overflow-hidden h-screen">
            <div className="w-full">
                {props.children}
            </div>
        </div>
    )
}

export default Layout