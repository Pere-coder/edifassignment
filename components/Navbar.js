"use client"
import Link from "next/link";
import React from "react";
import { BiMenu } from 'react-icons/bi';
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, Bars3BottomRightIcon } from '@heroicons/react/24/outline'
import { Truculenta } from "next/font/google";






const Navbar = () => {

    const [open, setOpen] = useState(false)

    const click = () => {
        setOpen(true);
    }


    return ( 

        <>
            <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
    
            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                    >
                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                        <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        >
                        <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                            <button
                            type="button"
                            className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setOpen(false)}
                            >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        </Transition.Child>
                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                        <div className="px-4 sm:px-6">
                           
                        </div>
                        <div className="relative mt-6 flex-1 px-4 sm:px-6  ">
                            <ul className="flex flex-col gap-10 justify-center items-center ">
                            <div className="text-custom font-700  text-46 leading-28 font-poppins  ">HISC   </div>

                            <div className=" mt-20 font-roboto font-500 text-26 leading-80 flex flex-col justify-center items-center text-center">
                                <li className="cursor-pointer">Home</li>
                                <li className="cursor-pointer">About Us</li>
                                <li className="cursor-pointer">Facility</li>
                            </div>
                                

                            <li className="bg-custom  text-white text-center flex items-center justify-center  text-13.85 font-500 font-roboto leading-16.23 rounded-3xl w-175 h-52  mt-64">
                            SIGN UP NOW
                            
                        </li>
                        
                            
                            </ul>
                            
                            </div>
                        </div>
                    </Dialog.Panel>
                    </Transition.Child>
                </div>
                </div>
            </div>
            </Dialog>
        </Transition.Root>





            <nav className="flex justify-between ">
                <div className="flex gap-2 mt-5">
                <div className="text-custom text-[50px] mt-5 md:text-[#0479CE] font-700 md:mt-0 md:text-80 font-poppins   ">HISC </div><div className="hidden lg:block mt-9 text-[#1F1F1F] w-[110px] h-[54px] font-custom font-400 text-[18px] leading-[16px]">Heartfulness International  Sports Center</div> 
                </div>
               
                    <ul className="hidden  md:flex gap-10 mt-16  font-roboto font-500 text-[20px]   ">
                        <li className="mt-1 cursor-pointer hover:border-b-4 h-8 border-b-[#0479CE]">Home </li>
                        <li className="mt-1 cursor-pointer hover:border-b-4 h-8  border-b-[#0479CE] ">About us</li>
                        <li className="mt-1 cursor-pointer hover:border-b-4 h-8  border-b-[#0479CE] ">Facility</li>
                        <li className="bg-[#0479CE] cursor-pointer text-white flex justify-center items-center text-center rounded-full w-[120px] h-[40px]  font-roboto font-500 text-16">Sign up</li>       
                    </ul>
                    <div className="bg-white  p-4 rounded-[15px] flex items-center justify-center w-[60px] h-[60px] md:hidden mt-12 cursor-pointer" onClick={click}>
                        <Bars3BottomRightIcon className="h-10 w-10 text-grey" aria-hidden="true" />
                    </div> 
            </nav>
        </>
     );
}
 
export default Navbar;