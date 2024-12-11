import Image from 'next/image'
import React from 'react'
import { ChevronDown, Search, Bell, Menu, LocateFixed, User, Share2 } from 'lucide-react';
import { Input } from "@/components/ui/input"


const Header = () => {
    return (
        <div className='sticky top-0 z-50 bg-white p-4  px-5 shadow-md shadow-gray-300'>
            <div className='container mx-auto justify-between flex'>
                <div className='flex items-center '>
                    <Image src={"/logo.png"} alt={"Logo"} width={52} height={100} className={"object-cover"} />
                    <p className='text-3xl text-blue-800 font-semibold hidden lg:block'>HexaHome</p>
                </div>

                <div className='hidden lg:flex justify-center items-center border border-gray-200 rounded-md'>

                    <button className=' hover:bg-gray-300 flex p-3 px-5 gap-4 hover:bg- items-center justify-center border-r border-gray-200'>
                        <p>Residental Buy</p>
                        <ChevronDown />
                    </button>

                    <div className='flex'>
                    <Input type="email" placeholder="Search for city, locality, area" 
                    className='p-6 w-[250px] lg:w-[310px] border-none'
                    />
                    <button className='flex items-center justify-center px-3 text-blue-600' >
                        <LocateFixed />
                    </button>
                    <button className='flex items-center justify-center px-3  border-l border-gray-200'>
                        <Search />
                    </button>
                    </div>

                    <div>

                    </div>
                </div>

                {/* right section */}
                <div className='flex items-center justify-center gap-4'>

                    <button className='flex items-center p-1 gap-2 bg-[#E5F1F7] hover:scale-105 hover:transition  border border-gray-300 rounded-full px-5'>
                        <p>Post Property</p>
                        <div className=''>
                            <p className='bg-[#178C0C] text-white text-[7px] lg:text-xs p-1 px-2 rounded-full'>FREE</p>
                        </div>
                    </button>

                    <button className=' items-center justify-center hover:scale-110 hidden lg:flex'>
                        <Bell />
                    </button>

                    <button className=' items-center justify-center gap-1 hidden lg:flex'>
                        <span className='bg-gray-400 text-white rounded-full p-1'>
                        <User />
                        </span>
                        <p>Vivek..</p>
                        <ChevronDown />
                    </button>

                    <div>
                        <Menu className='hidden lg:block' />
                        <Share2 className=' lg:hidden' />
                    </div>

                    

                </div>


            </div>
        </div>
    )
}

export default Header