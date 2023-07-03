import React from 'react';
import LogoLight from '../assets/logoLight.png';
import paymentLogo from '../assets/payment.png';
import {
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
} from 'react-icons/fa';
import { MdContactSupport } from 'react-icons/md';
import { BsPersonFill, BsPaypal } from 'react-icons/bs';
import { BiHome } from 'react-icons/bi';


const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
            {/* ==================== LogoIcon start ==================== */}
            <div className='flex flex-col gap-7'>
                <img className='w-32' src={LogoLight} alt="" />
                <p className='text-white text-sm tracking-wide'>🇮🇳 buyzon.com</p>
                <img className='w-56' src={paymentLogo} alt='paymentLogo' />
                <div className='flex gap-5 text-lg text-gray-400'>
                    <FaFacebookF className='hover:text-white duration-300 cursor-pointer'/>
                    <FaLinkedinIn className='hover:text-white duration-300 cursor-pointer'/>
                    <FaGithub className='hover:text-white duration-300 cursor-pointer'/>
                </div>
            </div>
            {/* ==================== LogoIcon end ==================== */}
            {/* ==================== LocateUs start ==================== */}
            <div>
                <h2 className='text-2xl font-semibold text-white mb-4'>Locate us</h2>
                <div className='text-base flex flex-col gap-2'>
                    <p>Address: Kolkata, West Bengal</p>
                    <p>Phone: (+91)-33-2582-5555</p>
                    <p>Mobile: (+91)-9674-910-207</p>
                    <p>Email: mr.swastikjha@gmail.com</p>
                </div>
            </div>
            {/* ==================== LocateUs end ==================== */}
            {/* ==================== Profile start ==================== */}
            <div>
                <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
                <div className='flex flex-col gap-2 text-base'>
                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                        <span>
                            <BsPersonFill />
                        </span>
                        My Account
                    </p>
                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                        <span>
                            <BsPaypal />
                        </span>
                        Checkout
                    </p>
                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                        <span>
                            <BiHome />
                        </span>
                        Order Tracking
                    </p>
                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                        <span>
                            <MdContactSupport />
                        </span>
                        Help & Support
                    </p>
                </div>
            </div>
            {/* ==================== Profile end ==================== */}
            {/* ==================== Subscribe start ==================== */}
            <div className='flex flex-col justify-center'>
                <input className='bg-transparent border px-4 py-2 text-sm' placeholder='E-mail' type='email'/>
                <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>
                    Subscribe
                </button>
            </div>
            {/* ==================== Subscribe end ==================== */}
        </div>
    </div>
  )
}

export default Footer