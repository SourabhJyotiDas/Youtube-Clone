import React from 'react';
import { SiYoutubemusic } from 'react-icons/si';
import { MdSubscriptions, MdVideoLibrary } from 'react-icons/md';
import { AiFillHome, AiOutlinePlusCircle } from 'react-icons/ai';


export default function BottomBar() {
    return (
        <div className='sm:hidden fixed bottom-0 z-20 bg-black w-[100%] py-2 text-gray-300 ' >
            <div className='flex justify-around text-[8px]'>
                <div className='flex flex-col justify-center items-center'><AiFillHome size="1rem" /> Home</div>
                <div className='flex flex-col justify-center items-center'><SiYoutubemusic size="1rem" /> Music</div>

                <AiOutlinePlusCircle size="2rem" />

                <div className='flex flex-col justify-center items-center'><MdSubscriptions size="1rem" /> Subscriptions</div>
                <div className='flex flex-col justify-center items-center'><MdVideoLibrary size="1rem" /> Library</div>
            </div>
        </div>
    )
}
