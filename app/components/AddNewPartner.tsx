"use client";
import React from 'react'
import { useState } from 'react';
import { Nunito } from 'next/font/google'
import { ChevronDown, Eye } from 'lucide-react'

const nunito = Nunito({
    subsets: ['latin']
    })

interface AddNewPartnerProps {
    openAddPartner: boolean,
    setOpenAddPartner: React.Dispatch<React.SetStateAction<boolean>>
}


const AddNewPartner = ({setOpenAddPartner,openAddPartner}:AddNewPartnerProps) => {

    const [active,setActive] = useState(false)

    const handleSubmition = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

  return (
    <div className={`fixed z-40 top-0 left-0 w-full h-screen flex items-center justify-center backdrop-blur-[4px] py-10 opacityanimation ${!openAddPartner&&'fadeOutUp'} ${nunito.className}`}>
        <div id='form' className='h-[calc(100vh-80px)] overflow-auto bg-gradient-to-t from-white to-[#d0d0d0ac] rounded-lg p-4 shadow backdrop-blur-[10px]'>
            <h1 className='text-center text-grey font-bold text-xl mb-4'>Add new partner</h1>
            <div>
                <form>
                    <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
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
                                <option defaultValue={'option'} value={'option'} className='option'>Select</option>
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
                        <div className='input_container pl-4 w-40 cursor-pointer relative'>
                                <select id='language' className='select'>
                                    <option  value={''} className='option'>
                                        Language
                                    </option>
                                    <option  value={''} className='option'>
                                        Arabe
                                    </option>
                                    <option  value={''} className='option'>
                                        Francais
                                    </option>
                                </select>
                            <label htmlFor='language'>
                                <ChevronDown size={20} className='absolute right-2 top-1/2 bottom-1/2 -translate-y-1/2 text-grey'/>
                            </label>
                        </div>
                        
                        <div className='flex gap-4'>
                            <span onClick={()=>setOpenAddPartner(false)} className='bg-background px-4 py-1 cursor-pointer'>Annuler</span>
                            <button type='submit' className='text-white bg-primary px-4 py-1'>Enregistrer</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddNewPartner