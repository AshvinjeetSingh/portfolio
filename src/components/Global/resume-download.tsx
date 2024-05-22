import { ArrowDownToLine } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const ResumeDownload = (props: Props) => {
  return (
      <div className='maxMd:hidden w-[45px] h-[45px] transition-border duration-500 fixed left-[40px] top-[50%] z-30 p-3 border-[2px] border-gray-400 rounded-full border-opacity-50 hover:border-amber-500 flex justify-center items-center' >

        
      <a href="/CV.pdf" className={`dark:text-white text-black `}  download="cv"><ArrowDownToLine /></a>
           
        {/* <ArrowDownToLine className='block'/>  */}
    </div>
  )
}

export default ResumeDownload