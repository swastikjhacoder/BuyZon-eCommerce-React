import React from 'react';
import logoDark from '../assets/logoDark.png';
import cartImg from '../assets/cart.png';
import userLogo from '../assets/userLogo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const productData = useSelector((state)=> state.buyzon.productData);
  const userInfo = useSelector((state) => state.buyzon.userInfo);
  console.log(userInfo);
  
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
          <Link to="/">
            <div>
              <img className='w-28' src={logoDark} alt='logoDark' />
            </div>
          </Link>
          <div className='flex items-center gap-8'>
            <ul className='flex items-center gap-8'>
              <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
              <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
              <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
              <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
              <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
            </ul>
            <Link to='/cart'>
              <div className='relative'>
                <img className='w-6' src={cartImg} alt='cartImg'/>
                <span className='absolute w-6 top-2 left-0 text-red-950 text-sm flex items-center justify-center font-semibold'>
                  {productData.length}
                </span>
              </div>
            </Link>
            <Link to='/login'>
              <img className='w-8 h-8 rounded-full' src={userInfo ? userInfo.image : userLogo} alt='userLogo' />
            </Link>
            {
              userInfo && <p className='text-base font-titleFont font-semibold underline underline-offset-2'>{userInfo.name}</p>
            }
          </div>
        </div>
    </div>
  )
}

export default Header 