import { FileDown } from 'lucide-react'
import React from 'react'

type Props = {}

const ResumeDownload = (props: Props) => {
  return (
      <FileDown className='w-[45px] h-[45px] transition-all duration-500 fixed left-[40px] top-[50%] z-30 p-3 border-[2px] border-gray-400 rounded-[50px] border-opacity-50 hover:w-[55px] hover:h-[55px]' /> 
  )
}

export default ResumeDownload