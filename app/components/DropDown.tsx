import React,{useState} from 'react'
import { MapPin, ChevronDown, ChevronUp, Check } from 'lucide-react'
import { wilayas } from '@/constants/wilayas';


const DropDown = () => {

      const [isOpen, setIsOpen] = useState(false);
      const [selectedWilaya, setSelectedWilaya] = useState('');

        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        };
    

  return (
    <div className="relative inline-block text-left min-w-[113px]">
            <div>
                <span
                    onClick={toggleDropdown}
                    className={`flex items-center justify-center w-full rounded
                    px-4 py-2  h-[40px] text-xs cursor-pointer focus:outline-none ${isOpen ? 'rounded-b-none text-black bg-white bg-opacity-85' : 'text-white bg-black bg-opacity-50'}`}
                >
                    {selectedWilaya === '' ?
                        <>
                        <MapPin size={20}/>
                        <span className='ml-2 mr-1'>Select Wilaya</span>
                        {isOpen ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
                        </> :
                        <span className='flex items-center justify-between w-full'>
                            {selectedWilaya}
                            <Check size={20}/>
                        </span>
                        }
                </span>
            </div>

            {isOpen && (
                <div
                    id='dropdown'
                    className="origin-top-right absolute right-0 w-full
                    rounded-md rounded-t-none bg-white bg-opacity-85 ring-1 ring-black ring-opacity-5
                    focus:outline-none max-h-[200px] overflow-y-auto z-40"
                    role="menu"
                >
                    <div className="" role="none">
                    <a
                                href="#"
                                className="block p-4 text-xs text-center text-gray-700 
                                hover:bg-primary hover:text-white"
                                role="menuitem"
                                onClick={() => {
                                    setSelectedWilaya("");
                                    setIsOpen(false);
                                }}
                            >
                                All states
                            </a>
                        {wilayas.map((wilaya, index) => (
                            <a
                                key={index}
                                href="#"
                                className="block p-4 text-xs text-center text-gray-700 
                                hover:bg-primary hover:text-white"
                                role="menuitem"
                                onClick={() => {
                                    setSelectedWilaya(wilaya);
                                    setIsOpen(false);
                                }}
                            >
                                {wilaya}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
  )
}

export default DropDown