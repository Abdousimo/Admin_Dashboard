import React from 'react'
import Partner from './Partner'
import { PARTNERS } from '@/constants/partners'



const PartnersTable = () => {
  return (
    <div className='mt-5 mb-10'>
        <div className='w-full border-separate border-spacing-y-2 text-center rounded-lg'>
            <div className='flex p-4 rounded-t-lg bg-[#222F44CC] text-white'>
                <span className='span'>name</span>
                <span className='span'>adress</span>
                <span className='span'>phone</span>
                <span className='span'>start date</span>
                <span className='span'>store</span>
                <span className='span'>status</span>
                <span className='span'>Speciality</span>
            </div>
            <div className='relative space-y-2'>
                {PARTNERS.map((partner,index) => {
                    return(
                        <Partner key={index} partner={partner}/>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default PartnersTable