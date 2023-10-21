import { Input } from '@nextui-org/react'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center items-center  '>
        <div className=' m-5 h-[64px] w-[1000px] bg-slate-600 '>
            <div className=''><Input size={'lg'} type="email" label="Email" /></div>
        
        </div>
    </div>
  )
}

export default Header