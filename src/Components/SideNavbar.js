import React from 'react'
import { BiHomeAlt, BiHistory } from 'react-icons/bi';
import { SiYoutubemusic } from 'react-icons/si';
import { MdSubscriptions, MdVideoLibrary, MdOutlineWatchLater, MdOutlineExplore } from 'react-icons/md';
import { RiVideoLine } from 'react-icons/ri';
import { AiOutlineDown } from 'react-icons/ai';
import {
    Link
} from "react-router-dom";

export default function SideNavbar() {

    




    return (

        <>

            <div className=' text-white w-[25%] bg-black z-30 fixed top-15 font-mono sm:h-[100%] text-[10px] hidden' id='fulllist' >

                <div className=' flex flex-col justify-center items-start list-none py-3 '>
                    <Link className=' py-2 cursor-pointer hover:bg-gray-600 w-[100%] flex items-center' to="/"><BiHomeAlt className='mx-3' size="1rem" /> Home</Link>
                    <Link className='  py-2 cursor-pointer hover:bg-gray-600 w-[100%] flex items-center' to="/"><MdOutlineExplore className='mx-3' size="1rem" /> Explore</Link>
                    <Link className='  py-2 cursor-pointer hover:bg-gray-600 w-[100%] flex items-center' to="/"><SiYoutubemusic className='mx-3' size="1rem" /> Shorts</Link>
                    <Link className='  py-2 cursor-pointer hover:bg-gray-600 w-[100%] flex items-center' to="/"><MdSubscriptions className='mx-3' size="1rem" /> Subscriptions</Link>

                </div>

                <div className='flex flex-col justify-center items-start list-none border-solid border-b-2 border-t-2 border-white py-3'>

                    <Link className=' py-2 cursor-pointer hover:bg-gray-600 w-[100%] flex items-center' to="/"><MdVideoLibrary className='mx-3' size="1rem" /> Library</Link>
                    <Link className=' py-2 cursor-pointer hover:bg-gray-600 w-[100%] flex items-center ' to="/"><BiHistory className='mx-3 text-white' size="1rem" /> History</Link>
                    <Link className=' py-2 cursor-pointer hover:bg-gray-600 w-[100%] flex items-center' to="/"><RiVideoLine className='mx-3' size="1rem" /> Your videos</Link>
                    <Link className=' py-2 cursor-pointer hover:bg-gray-600 w-[100%] flex items-center' to="/"><MdOutlineWatchLater className='mx-3' size="1rem" /> Watch later</Link>
                    <Link className=' py-2 cursor-pointer hover:bg-gray-600 w-[100%] flex items-center' to="/"><AiOutlineDown className='mx-3' size="1rem" /> Show more</Link>
                </div>

                <div className='flex flex-col justify-center items-start list-none py-3'>
                    <li className='text-gray-400 font-bold px-10'>SUBSCRIPTION</li>
                    <li className=' py-2 cursor-pointer hover:bg-gray-600 w-[100%] flex items-center text-xs'><MdVideoLibrary className='mx-3' size="1rem" />Code with Sourabh</li>
                </div>

            </div>





            <div className='hidden sm:block text-white bg-black w-[10%] h-[100%] sticky top-10    font-mono sm:h-[100%] text-[6px] lg:text-[10px]' id='minilist' >

                <div className=' flex flex-col justify-center  list-none py-3 lg:space-y-5  '>
                    <Link className=' py-2 cursor-pointer hover:bg-gray-600 w-[100%] flex flex-col items-center' to="/"><BiHomeAlt className='' size="1rem" /> Home</Link>
                    <Link className='  py-2 cursor-pointer hover:bg-gray-600 w-[100%] flex flex-col items-center' to="/"><MdOutlineExplore className='' size="1rem" /> Explore</Link>
                    <Link className='  py-2 cursor-pointer hover:bg-gray-600 w-[100%] flex flex-col items-center' to="/"><SiYoutubemusic className='' size="1rem" /> Shorts</Link>
                    <Link className='  py-2 cursor-pointer hover:bg-gray-600 w-[100%] flex flex-col items-center' to="/"><MdSubscriptions className='' size="1rem" /> Subscriptions</Link>
                    <Link className=' py-2 cursor-pointer hover:bg-gray-600 w-[100%] flex flex-col items-center' to="/"><MdVideoLibrary className='' size="1rem" /> Library</Link>

                </div>

            </div>


        </>
    )
}
