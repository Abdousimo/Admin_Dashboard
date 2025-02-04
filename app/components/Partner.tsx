'use client';
import React from 'react'
import { Partner } from '@/entities/partner.entity'
import { ChevronDown, ChevronLeft, ChevronRight, CircleHelp, Eye, Pencil, Trash, Trash2 } from 'lucide-react'
import Image from 'next/image';
import EditInfos from './EditInfos';
import Stats from './Stats';

type PartnerProps = {
    partner:Partner
}



export const  deletePartnerModal = (setOpenDelete:React.Dispatch<React.SetStateAction<boolean>>) =>{
    return (
        <div className='fixed z-40 top-0 left-0 w-full h-screen flex items-center justify-center backdrop-blur-[4px]'>
            <div className='bg-white w-[20rem] p-8 flex flex-col rounded-md'>
                <span className='text-lg font-semibold text-primary flex justify-center mb-4'>
                    <CircleHelp size={50}/>
                </span>
                <span className='text-lg font-bold text-text mb-4'>Are you sure you want to delete ?</span>
                <p className='text-center text-[#52575C] mb-6'>Please do not close this page</p>
                <div className='flex justify-center gap-4'>
                    <button className='bg-white text-primary rounded-md px-4 py-2 border-[1px] border-primary'>Yes</button>
                    <button onClick={()=>setOpenDelete(false)} className='bg-text text-white rounded-md px-4 py-2'>No</button>
                </div>
            </div>
        </div>
    )
}


const PartnerII = ({partner}:PartnerProps) => {
    const [open, setOpen] = React.useState(false)
    const [openDelete, setOpenDelete] = React.useState(false)
    const [openEditProfile, setOpenEditProfile] = React.useState(false)
    const [openViewProfile, setOpenViewProfile] = React.useState(false)
    const [openSelectOption,setOpenSelectOption] = React.useState(false)


    const toggleOpenPartner = () => {
        setOpen(!open)
        setOpenEditProfile(false)
        setOpenViewProfile(false)
    }
  return (
    <>    
        <div className={`mt-2 flex bg-white relative p-6 ${open ? '-left-96' : 'left-0'} transition-all duration-300 ease-in-out rounded-md`}>
            <span className='td'>
                <div className='flex flex-col items-start gap-2'>
                    <span className='text-sm font-semibold'>{`${partner.firstname} ${partner.surname}`}</span>
                    <span className='text-xs'>{partner.email}</span>
                </div>
            </span>
            <span className='td'>
                <div className='flex flex-col items-start gap-2 text-xs'>
                    <span>{`${partner.wilaya}`}</span>
                    <span className='text-xs'>{partner.adress}</span>
                </div>
            </span>
            <span className='td'>
                <div className='flex flex-col items-start gap-2 text-xs'>
                    <span>{`${partner.phone_one}`}</span>
                    <span className='text-xs'>{partner.phone_two}</span>
                </div>
            </span>
            <span className='td'>
                <div className='flex flex-col items-start gap-2 text-xs'>
                    <span>{`${partner.start_date}`}</span>
                </div>
            </span>
            <span className='td'>
                <div className='flex flex-col items-start gap-2 text-xs font-semibold'>
                    <span className=''>{`${partner.storename}`}</span>
                </div>
            </span>
            <span className='td'>
                <div className='flex flex-col items-start justify-center gap-2 text-xs'>
                    <span className={`${partner.status ? 'text-green-400' : 'text-red-600'}`}>{`${partner.status ? "Active" : "Inactive"}`}</span>
                </div>
            </span>
            <span className='td'>
                <div className='relative inline-block border-text'>
                    <div onClick={()=> setOpenSelectOption(!openSelectOption)} className={`flex items-center gap-2 rounded-md p-2 border-[1px] border-grey text-text text-sm cursor-pointer ${openSelectOption && 'rounded-b-none border-b-0'}`}>
                        <p className='text-xs'>select speciality</p>
                        <ChevronDown size={15} className=''/>
                    </div>
                    {openSelectOption && 
                        <div className='absolute z-50 w-full origin-top-right border-[1px] border-grey border-t-0 right-0 bg-white rounded-b-md'>
                            <ul className='py-2'>
                                <li className='p-2 cursor-pointer flex items-center justify-between text-xs'>
                                    <input type='checkbox'/>
                                    <span className=''>option 1</span>
                                    <span className='w-4 h-4 rounded-full bg-text'/>
                                </li>
                                <li className='px-2 py-4 cursor-pointer flex items-center justify-between text-xs'>
                                    <input type='checkbox'/>
                                    <span className=''>option 1</span>
                                    <span className='w-4 h-4 rounded-full bg-text'/>
                                </li>
                                <li className='p-2 cursor-pointer flex items-center justify-between text-xs'>
                                    <input type='checkbox'/>
                                    <span className=''>option 1</span>
                                    <span className='w-4 h-4 rounded-full bg-text'/>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </span>

            <span onClick={toggleOpenPartner} className='absolute top-1/2 bottom-1/2 -translate-y-1/2 -right-[64px] w-[56px] h-[56px] flex items-center justify-center cursor-pointer bg-white bg-opacity-30 text-white rounded-md'>
                {open ? <ChevronLeft size={25}/> : <ChevronRight size={25}/>}
            </span>

            <button disabled={openViewProfile ? true :false} onClick={()=>setOpenEditProfile(!openEditProfile)} className={`absolute top-1/2 bottom-1/2 -translate-y-1/2 -right-[144px] w-[56px] h-[56px] flex items-center justify-center cursor-pointer bg-white bg-opacity-30 text-white rounded-md ${openEditProfile&&'bg-opacity-60'} ${openViewProfile&&'disabled'}`}>
                <Pencil size={25}/>
            </button>

            <button disabled={openEditProfile ? true : false} onClick={()=>setOpenViewProfile(!openViewProfile)} className={`absolute top-1/2 bottom-1/2 -translate-y-1/2 -right-[224px] w-[56px] h-[56px] flex items-center justify-center cursor-pointer bg-white bg-opacity-30 text-white rounded-md ${openViewProfile&&'bg-opacity-60'} ${openEditProfile&&'disabled'}`}>
                <Eye size={25}/>
            </button>

            <span onClick={()=>setOpenDelete(!openDelete)} className={`absolute top-1/2 bottom-1/2 -translate-y-1/2 -right-[304px] w-[56px] h-[56px] flex items-center justify-center cursor-pointer bg-white bg-opacity-30 text-white rounded-md ${openDelete&&'bg-opacity-60'}`}>
                <Trash2 size={25}/>
            </span>
        </div>
        {openEditProfile && <EditInfos discard={setOpenEditProfile} partner={partner}/>}
        {openViewProfile && <Stats partner={partner}/>}
        {openDelete && deletePartnerModal(setOpenDelete) }
    </>
  )
}

export default PartnerII