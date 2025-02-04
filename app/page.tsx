'use client';
import { ArrowDown, ArrowUp, Car, ChevronDown, ChevronUp, MapPin, Plus, SpaceIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AddNewPartner from "./components/AddNewPartner";
import DropDown from "./components/DropDown";
import PartnersTable from "./components/PartnersTable";


const Links = [
  {
    icon: '/icons/storefront.svg',
    selected:true
  },
  {
    icon:'/icons/iconamoon_category-light.svg',
    selected:false
  },
  {
    icon: '/icons/Group.svg',
    selected:false
  },
  {
    icon: '/icons/setting-07.svg',
    selected:false
  },
]

export default function Home() {

  const [openAddPartner, setOpenAddPartner] = useState(false);
  const [openFilters, setOpenFilters] = useState(false);

  return (
    <div className="min-h-screen h-auto bg-[url('/background.png')] bg-cover relative">        
      <div className="flex backdrop-blur-[5px]">   
          <div className="relative z-40 flex-1 bg-white bg-opacity-10">
              <div className="min-h-screen h-full px-2 pt-10 flex flex-col items-center backdrop-blur-[5px]">
                <div className="flex items-center gap-2">
                  <Image src={'/PIASSA_LOGO.svg'} alt="logo" width={100} height={40} className="object-contain"/>
                </div>
                <div className="p-1 bg-white bg-opacity-20 rounded-full my-10">
                  <Link href={'/'} className="flex items-center justify-center p-2 bg-primary rounded-t-full">
                    <Image src={'/icons/storefront.svg'} alt="/" width={25} height={25} className="object-contain"/>
                  </Link>
                  <Link href={'/'} className="flex items-center justify-center p-2 rounded-b-full bg-white bg-opacity-10">
                    <Image src={'/icons/package_2.svg'} alt="/" width={25} height={25} className="object-contain"/>
                  </Link>
                </div>
                <div className="flex flex-col justify-center gap-2">
                  {Links.map((link,index) => {
                    return(
                      <Link href={'/'} key={index} className={`${link.selected ? 'bg-primary' : 'bg-white bg-opacity-10'} rounded p-2`}>
                        <Image src={link.icon} alt="/" width={25} height={25} className="object-contain"/>
                      </Link>
                    )
                  })}
                </div>
                <div >
                    <Link className="flex items-center justify-center mt-10" href={'/'}>  
                      <span className='bg-white bg-opacity-10 p-2 rounded'>
                        <Image src={'/icons/logout-05.svg'} alt="/" width={25} height={25} className="object-contain"/>
                      </span>
                    </Link>
                </div>
              </div>
          </div>
          <div className="flex-[9] pl-4 pr-20">
            <div className="flex items-center justify-between py-4">
              <form className="flex gap-5">
                <div className="w-[330px] h-[40px] flex items-center gap-2 bg-black bg-opacity-50 rounded px-2">
                  <div className="relative inline-block">
                    <span 
                      onClick={()=>setOpenFilters(!openFilters)}
                      className="cursor-pointer">
                      <Image src={'/logo.svg'} alt="/" width={25} height={25} className="object-contain"/>
                    </span>
                    {
                      openFilters && 
                      <div className="origin-top-right absolute right-0 w-full
                    rounded-md rounded-t-none bg-white bg-opacity-50 mt-[1px] ring-1 ring-black ring-opacity-5
                    focus:outline-none max-h-[200px] overflow-y-auto z-40">
                        <ul className="text-white">
                          <li className="w-full flex items-center justify-center cursor-pointer hover:bg-primary py-2"><Car size={15}/></li>
                          <li className="w-full flex items-center justify-center cursor-pointer hover:bg-primary py-2"><Car size={15}/></li>
                          <li className="w-full flex items-center justify-center cursor-pointer hover:bg-primary py-2"><Car size={15}/></li>
                          <li className="w-full flex items-center justify-center cursor-pointer hover:bg-primary py-2"><Car size={15}/></li>
                        </ul>
                      </div>
                    }
                  </div>
                  <input type="text" placeholder="Recherche" className="text-white focus:outline-none bg-transparent pl-2 border-l-[1px] border-white placeholder:text-white"/>
                </div>
                <DropDown/>
              </form>
              <div className="flex items-center gap-8 text-white">
                  <p className="font-semibold">Admin Name</p>
                  <div className="flex flex-col items-center">
                    <p>07-11-2001</p>
                    <p>11:30 AM</p>
                  </div>
              </div>
            </div>
            <div className="flex justify-end mt-5">
              <button onClick={()=>setOpenAddPartner(true)} className="flex items-center gap-5 text-white bg-primary p-2 duration-200 rounded">
                <p>Ajouter nouvel Partners</p>
                <Plus size={20}/>
              </button>
            </div>
            <PartnersTable/>
          </div>
          {openAddPartner && <AddNewPartner openAddPartner={openAddPartner} setOpenAddPartner={setOpenAddPartner}/>}
    </div>
    </div>
  );
}
