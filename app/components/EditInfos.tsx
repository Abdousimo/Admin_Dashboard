'use client';
import React from 'react'
import {Partner} from '@/entities/partner.entity'
import { ChevronDown, Eye } from 'lucide-react'

type PartnerProps = {
    partner:Partner
    discard:React.Dispatch<React.SetStateAction<boolean>>
}

const EditInfos = ({partner,discard}:PartnerProps) => {
    
    const [active,setActive] = React.useState(false)
  return (
    <div className='bg-white py-4 px-16 text-grey'>
        <div className='flex w-full justify-between items-center'>
            <h1 className='text-left'>Edit profile</h1>
            <p>{partner.start_date}</p>
        </div>
        <div>
                <form>
                    <div className='text-left mt-4 grid grid-cols-2 gap-x-4 gap-y-2'>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='input_container'>
                                <label className='label'>Firstname</label>
                                <input type="text" className='input' placeholder='Enter value'/>
                            </div>
                            <div className='input_container'>
                                <label className='label'>Surname</label>
                                <input type="text" className='input' placeholder='Enter value'/>
                            </div>
                        </div>
                        <div className='input_container relative'>
                            <label className='label'>Wilaya</label>
                            <select className='select'>
                                <option className='option'>Select</option>
                            </select>
                            <ChevronDown size={20} className='absolute right-2 top-1/2 bottom-1/2 text-grey'/>
                        </div>
                        <div className='input_container'>
                            <label className='label'>Store name</label>
                            <input type="text" className='input' placeholder='Enter value'/>
                        </div>
                        <div className='input_container relative'>
                            <label className='label'>Commune</label>
                            <select className='select'>
                                <option value={''} className='option'>Select</option>
                            </select>
                            <ChevronDown size={20} className='absolute right-2 top-1/2 bottom-1/2 text-grey'/>
                        </div>
                        <div className='input_container'>
                            <label className='label'>Email</label>
                        <input type="text" className='input' placeholder='Enter value'/>
                        </div>
                        <div className='input_container'>
                            <label className='label'>Adress</label>
                            <input type="text" className='input' placeholder='Enter value'/>
                        </div>
                        <div className='input_container'>
                            <label className='label'>Password</label>
                            <div className='flex items-center justify-between rounded relative'>
                                <input type="password" className='input w-full' placeholder='Enter value'/>
                                <span className='cursor-pointer absolute right-2 text-grey'><Eye size={20}/></span>
                            </div>
                        </div>
                        <div className='input_container relative'>
                            <label className='label'>Speciality</label>
                            <select className='select'>
                                <option className='option'>Select</option>
                            </select>
                            <ChevronDown size={20} className='absolute right-2 top-1/2 bottom-1/2 text-grey'/>

                        </div>
                        <div className='input_container'>
                            <label className='label'>Phone number 01</label>
                            <div className='flex gap-4'>
                                <select  className='flex-1 select text-black'>
                                    <option className='option'>+213</option>
                                </select>

                                <input type="number" className='input flex-[4]' placeholder='9120000000'/>
                            </div>
                        </div>
                        <div className='input_container relative'>
                            <label className='label'>Start Date</label>
                            <select className='select'>
                                <option className='option'>Select</option>
                            </select>
                            <ChevronDown size={20} className='absolute right-2 top-1/2 bottom-1/2 text-grey'/>
                        </div>
                        <div className='input_container'>
                            <label className='label'>Phone number 02</label>
                            <div className='flex gap-4'>
                                <select  className='flex-1 select text-black'>
                                    <option className='option'>+213</option>
                                </select>
                                <input type="number" className='input flex-[4]' placeholder='9120000000'/>
                            </div>
                        </div>
                    </div>
                   <div className='w-full h-[1px] bg-grey mt-4 mb-8'/>
                   <div className='flex flex-col justify-start w-fit pl-2'>
                       <label className='label'>Status of this account</label>
                        <label className="inline-flex items-center cursor-pointer">
                          <input type="checkbox" onChange={()=>setActive(!active)} className="sr-only peer"/>
                          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary dark:peer-checked:bg-primary"></div>
                          <span className={`ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 ${active ? 'text-primary border-l-[1px] pl-[2px] border-primary' : 'text-black border-l-[1px] pl-[2px] border-black'}`}>
                             {active ? 'ON' : 'OFF'}
                          </span>
                        </label>
                   </div>
                   <div className='w-full h-[1px] bg-grey mt-4 mb-8'/>
                   <div className='flex items-center justify-between px-8'>
                        <div className='input_container pl-4 w-40 relative'>
                                <select  className='select'>
                                    <option value={''} className='option'>
                                        Language
                                    </option>
                                </select>
                            <ChevronDown size={20} className='absolute right-2 top-1/2 bottom-1/2 -translate-y-1/2 text-grey'/>
                            <span className='p-1 border-r-[1px] border-black absolute left-2 top-1/2 bottom-1/2'>FR</span>
                        </div>
                        
                        <div className='flex gap-4'>
                            <span onClick={()=>{discard(false)}} className='bg-grey text-black px-4 py-1 cursor-pointer'>Annuler</span>
                            <button type='submit' className='text-white bg-primary px-4 py-1'>Enregistrer</button>
                        </div>
                    </div>
                    
                </form>
            </div>
    </div>
  )
}

export default EditInfos