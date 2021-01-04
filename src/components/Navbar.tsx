import React from 'react'
import logo from '../images/logo.svg'

export default function Navbar() {
    return (
        <div className="w-full fixed z-40 top-0 left-0 bg-white h-20 shadow-md flex justify-center">
            <div className="container flex justify-between items-center">
                <div className="flex flex-col ml-2 sm:ml-0 justify-center items-start">
                    <img src={logo} className="flex-1 w-auto mt-1 cursor-pointer" alt=""/>
                    <p className="text-sm -mt-1 font-light">simple & fast property appeals</p>
                </div>
                <div className="flex" style={{fontFamily: 'Montserrat', fontWeight: 500}}>
                    <button className="navButton hidden sm:block">Home</button>
                    <button className="navButton hidden sm:block">Appeal</button>
                    <button className="navButton hidden sm:block text-brand-default">Blog</button>
                    <button className="navButton hidden sm:block">About</button>
                    <button className="navButton hidden sm:block">More</button>
                    <svg className="w-6 fill-current text-brand-default h-6 mr-4 block sm:hidden" height="384pt" viewBox="0 -53 384 384" width="384pt"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/></svg>
                </div>
            </div>
        </div>
    )
}
