import { Input } from '@nextui-org/react'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center items-center  '>
        <div className=' m-2  w-[950px]  '>
            <div className='m-5'><Input className='h-24' size={'lg'} color='secondary' type="search" label="Search For Somthing !"   /></div>
        </div>
        <div className=''> dark</div>
    </div>
  )
}

export default Header