// components/NavBar.js
'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const LinkItems = [  
    {link:"home", linkRef:"/"},
    {link:"about", linkRef:"/#about"},
    {link:"projects", linkRef:"/#projects"},
    {link:"stack", linkRef:"/#stack"},
    {link:"contact", linkRef:"/#contact"},
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
  
  
    return (
      <nav className=" w-full top-0 left-0 z-50  transition-all duration-300 bg-gray-900">{/*fixed*/}
        <div className="w-full mx-auto sm:px-6 lg:pl-24 sticky z-auto">
          <div className="flex px-5 items-center justify-between h-20">
          
          <div className="text-2xl font-bold text-white hover:scale-105 duration-100">
                    <Link href="/">My Portfolio</Link>
                </div>
  
            {/* //Tablet y Desktop */}
            {/* //TODO: SI HAY TIEMPO AGREGAR SUBRAYADO DINAMICO */}
            <div className="hidden md:block px-16">
                
              <div className="flex items-baseline space-x-4">
                {LinkItems.map(l => {
                  return <Link key={l.link} className={`${isScrolled ? 'text-black hover:text-green' : 'text-white'}  rounded-none  hover:scale-125 duration-100 lg:px-4 px-2 py-0 rounded-md lg:text-base  text-sm font-medium`} href={l.linkRef} >{l.link}</Link>
                }
                )}
              </div>
            </div>
            <div className="flex md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className={`inline-flex items-center justify-center rounded-md  focus:outline-none focus:bg-gray-900 `}>
                <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16m-16 6h16" />
                </svg>
                <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden fixed w-full`}>
          <div className="px-2 pt-2 space-y-1 sm:px-3  bg-gray-900">
            {LinkItems.map(l => {
              return <Link key={l.link} onClick={() => setIsOpen(false)} className={`border-b border-solid border-grey  text-white block px-1 mx-6 py-7 text-center text-base font-medium`} href={l.linkRef}>{l.link}</Link>
            }
            )}
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;