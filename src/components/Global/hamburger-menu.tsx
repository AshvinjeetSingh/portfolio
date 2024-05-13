"use client"
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const HamburgerMenu = (props: Props) => {
    const [state, setState] = React.useState(false)

    const menus = [
        { title: "Home", path: "#home" },
        { title: "About", path: "#about" },
        { title: "Projects", path: "#projects" },
        { title: "Contact", path: "#contact" },
    ]

  return (
        <nav className=" w-full md:border-0 md:hidden relative">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                  <div className="md:hidden">
                      <button
                          className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          <Menu className='text-black dark:text-white'/>
                      </button>
                  </div>
              </div>
              <div
                  className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"
                      } absolute top-15 dark:bg-black bg-white text-black dark:text-white`}
              >
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                      {menus.map((item, idx) => (
                          <li key={idx} className="text-black dark:text-white hover:text-amber-600" onClick={() => setState(!state)}>
                              <Link href={item.path}>{item.title}</Link>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
      </nav>
  )
}

export default HamburgerMenu