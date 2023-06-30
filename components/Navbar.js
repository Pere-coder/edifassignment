"use client"
import Link from "next/link";
import React from "react";
import { BiMenu } from 'react-icons/bi';
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
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
                        {/* <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          Panel title
                        </Dialog.Title> */}
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6  ">
                        <ul className="flex flex-col gap-10 justify-center items-center ">
                        <div className="text-orange-500 font-extrabold text-5xl font-sans  ">HISC   </div>

                        <div className="flex flex-col gap-12 mt-20">
                            <li>Home</li>
                            <li >About Us</li>
                            <li>Facility</li>
                        </div>
                            

                        <li className="bg-orange-500  text-white text-center rounded-3xl w-48 p-2 mt-64">
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
        <div className="text-orange-500 font-extrabold text-5xl font-sans mt-5 ">HISC   </div>
           
            <ul className="hidden  md:flex gap-10 mt-10  text-xs ">
                        <li className="p-2">
                    
                            Home
                        </li>
                        <li className="p-2">
                            About us
                        </li>
                        <li className="p-2">
                            Facility
                        </li>
                        <li className="bg-orange-500  
                        text-white text-center rounded-2xl w-28 p-2">
                            Sign up
                            
                        </li>
                        
                </ul>
                <div className="bg-gray-200 p-4 rounded-3xl flex items-center justify-center md:hidden mt-5 cursor-pointer" onClick={click}>
                    <BiMenu  className="text-black text-3xl " width='10' height='20' />
                </div>
          
                
            
        </nav>
        </>
     );
}
 
export default Navbar;