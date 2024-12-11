import { IndianRupee, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Carousel from './Crousel'

const PropertyCard = ({ Buildingtype, bhkType, location, ownerName, price, feature1, feature2, feature3 }:
    { Buildingtype: string, bhkType: string, location: string, ownerName: string, price: string, feature1: string | undefined, feature2: string | undefined, feature3: string | undefined }) => {

    return (
        <div className='w-full grid grid-cols-1  md:flex gap-4 cursor-pointer justify-center items-center p-4 hover:shadow-md hover:shadow-gray-300'>
            <div className="relative">
                <Image
                    src={"/rooms/room1.jpg"}
                    alt={"Room1"}
                    width={250}
                    height={100}
                    className="object-cover rounded-xl hover:scale-105 w-full"
                />
                <p className="absolute top-2 left-3 text-white bg-black bg-opacity-60 p-2 rounded-xl">
                    {Buildingtype}
                </p>
            </div>

            <div className='flex flex-col items-start gap-2 '>
                <div className='flex items-center justify-center hover:underline-offset-1 hover:underline'>
                    <IndianRupee strokeWidth={2.5} className='text-black w-4 h-4 font-bold' />
                    <p className='font-bold text-xl'>{price}</p>
                </div>

                <div className='flex gap-1'>
                    <button className='font-bold hover:underline-offset-1 hover:underline text-gray-800'>{bhkType}</button>
                    <button className='hover:underline hover:underline-offset-1'>{location}</button>
                </div>

                <div>
                    <Carousel />
                </div>

                <div className='flex justify-center text-sm gap-3 px-4'>
                    <p>{feature1}</p>
                    <p>{feature2}</p>
                    <p>{feature3}</p>
                </div>

                <div className='flex justify-between w-full px-4 pt-3'>
                    <div className='flex gap-2 text-sm items-center justify-center '>
                        <div className='bg-gray-500 rounded-full text-white p-1'>
                            <User size={20} />
                        </div>
                        <p>{ownerName}</p>
                    </div>
                    <p className='text-blue-600 text-sm'>view Number</p>
                </div>
            </div>

        </div>
    )
}

export default PropertyCard