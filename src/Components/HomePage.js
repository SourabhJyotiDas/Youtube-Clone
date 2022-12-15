import React, { useState, useEffect } from 'react';
import moment from "moment";
import numeral from "numeral";
import { MdOutlineAccountCircle } from 'react-icons/md';


export default function HomePage() {

    const [videos, setvideos] = useState([]);

    let apiKey = `AIzaSyAZP-yyDYSjTbMSj4bbWZbfT-L5aEjaGBI`;
    let videoHttp = `https://www.googleapis.com/youtube/v3/videos?`;
    // let channelHttp = `https://www.googleapis.com/youtube/v3channels?`;

    const getPopularVideos = () => {
        fetch(videoHttp + new URLSearchParams({
            key: apiKey,
            part: "snippet,contentDetails,statistics",
            chart: "mostPopular",
            regionCode: "us",
            maxResults: 200,
            pageToken: " "
        })).then(res => res.json())
            .then(data => {
                // console.log(data);
                setvideos(data.items);

            })
    }

    







    useEffect(() => {
        // eslint-disable-next-line 
        getPopularVideos();
        // eslint-disable-next-line 
    }, [])



    return (
        <>
                
                <div className=' py-5 sm:flex sm:flex-wrap videoContainer lg:flex lg:justify-center lg:items-center'>
                    {videos.map((element) => {
                        return <div className=' sm:h-[27vh] sm:w-[30vw] sm:p-3 md:h-[23vh] md:w-[31vw] lg:h-[45vh] lg:w-[22vw] xl:h-[40vh] xl:w-[22vw]' key={element.id}>
                            <img className='cursor-pointer w-[100%] sm:w-[40vw]' src={element.snippet.thumbnails.medium.url} alt="" />
                            <div className='flex items-center py-2 '>
                                <div><MdOutlineAccountCircle className='mx-1' size="1.5rem" /></div>
                                <div className='sm:flex sm:flex-col'>
                                    {/* <div className=' my-2 cursor-pointer '>{element.contentDetails.contentRating.duration}</div> */}
                                    <div className=' text-[10px] cursor-pointer sm:w-auto sm:text-[10px] lg:text-sm lg:w-auto'>{element.snippet.localized.title}</div>
                                    <div className='flex sm:flex-col text-gray-400 text-[8px] lg:text-[13px]'>
                                        <div className=''>{element.snippet.channelTitle}</div>
                                        <div className=' flex sm:hidden'>
                                            -{numeral(element.statistics.viewCount).format("0.a")} views
                                            <div className='sm:hidden'>-{moment(element.snippet.publishedAt).fromNow()}</div>
                                        </div>
                                        <div className=' sm:flex  hidden '>
                                            {numeral(element.statistics.viewCount).format("0.a")} views -
                                        <div className='sm:block hidden'>{moment(element.snippet.publishedAt).fromNow()}</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            
        </>
    )
}
