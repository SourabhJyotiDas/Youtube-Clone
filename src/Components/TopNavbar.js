import React from 'react';
import { MdNotificationsNone } from 'react-icons/md';
import { BiVideoPlus } from 'react-icons/bi';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { FiYoutube } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
    Link
} from "react-router-dom";

export default function TopNavbar() {

    const togglemode = () => {
        document.getElementById('fulllist').classList.toggle('hidden')
        document.querySelector('.videoContainer').classList.toggle('sm:opacity-50')
    }

    return (
        <>
            <div className='top-0 sticky z-20'>

                <div className='flex justify-between items-center p-2 bg-black z-20  '>
                    <div className='flex items-center'>
                        <div className='hidden sm:block'>
                            <GiHamburgerMenu className='text-white cursor-pointer mx-2 lg:text-lg lg:ml-5' size="" onClick={togglemode}/>
                        </div>

                        <div className='flex items-center font-bold text-lg cursor-pointer sm:text-sm lg:text-base lg:ml-3 '>
                            <FiYoutube className='text-white mr-1  ' size="1.5rem" />
                            <Link to="/"> YouTube</Link>

                        </div>

                    </div>

                    <label className="relative  hidden  sm:w-[60%] sm:flex sm:items-center">
                        <input className=" bg-black w-full  rounded-sm py-1 px-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search" type="text" name="search" />
                        <button className='bg-gray-800 py-2 px-3 rounded-sm' ><AiOutlineSearch /></button>
                    </label>

                    <div className=' flex justify-between items-center space-x-1 sm:space-x-3 lg:space-x-5 lg:text-2xl '>
                        {/* <div className=''><AiOutlineSearch className='text-white cursor-pointer' size="1.5rem" /></div> */}
                        <div><MdNotificationsNone className='text-white cursor-pointer' size="" /></div>
                        <div><BiVideoPlus className='text-white  cursor-pointer' size="" /></div>
                        <div><MdOutlineAccountCircle className='text-white  cursor-pointer' size="" /></div>
                        <div></div>
                    </div>

                </div>


            </div>
        </>
    )
}
