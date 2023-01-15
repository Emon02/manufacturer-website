import React from 'react';
import { AiFillStar } from "react-icons/ai";

const ReviewsItem = ({ review }) => {
    const { name, description, img, job, rating } = review;
    return (
        <div className="flex flex-col overflow-hidden shadow-xl">
            <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                <div className="flex-1">
                    <div className="flex items-center">
                        {
                            rating === "1" && <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                        }
                        {
                            rating === "2" && <>
                                <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                            </>
                        }
                        {
                            rating === "3" && <>
                                <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                            </>
                        }
                        {
                            rating === "4" && <>
                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                        </>
                        }
                        {
                            rating === "5" && <>
                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                        </>
                        }
                    </div>

                    <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 ">{description}</p>
                    </blockquote>
                </div>

                <div className="flex items-center mt-8">
                    <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src={img} alt={name} />
                    <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 ">{name}</p>
                        <p className="mt-0.5 text-sm  text-gray-600">{job}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsItem;