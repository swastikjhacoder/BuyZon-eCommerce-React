import React, { useState } from 'react';
import { HiArrowSmLeft, HiArrowSmRight} from 'react-icons/hi';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/clothing-store-banner-design-template-e7332aaf6402c88cb4623bf8eb6f97e2_screen.jpg?ts=1620867237",
        "https://img.freepik.com/premium-vector/gradient-summer-sale-banner-template-with-photo_16148-1224.jpg",
        "https://marketplace.canva.com/EAFGd4tgXXU/1/0/400w/canva-purple-abstract-fashion-sale-banner-landscape-L1KxLmZOqF8.jpg",
        "https://i.ytimg.com/vi/_aX3gg7ZWf0/maxresdefault.jpg"
    ];
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0?3:(prev)=>prev-1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3?0:(next)=>next+1);
    };
  return (
    <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen h-[650px] relative'>
            <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className='w-[400vw] h-full flex transition-transform duration-1000'>
                <img className='w-screen h-full object-cover' src={data[0]} alt='ImgOne' loading='priority' />
                <img className='w-screen h-full object-cover' src={data[1]} alt='ImgOne' loading='priority' />
                <img className='w-screen h-full object-cover' src={data[2]} alt='ImgOne' loading='priority' />
                <img className='w-screen h-full object-cover' src={data[3]} alt='ImgOne' loading='priority' />
            </div>
            <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
                <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300 cursor-pointer'>
                    <HiArrowSmLeft />
                </div>
                <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300 cursor-pointer'>
                    <HiArrowSmRight />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner