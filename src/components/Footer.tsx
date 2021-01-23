import React from 'react'
import logo from '../images/logo.svg'

export default function Footer() {
    return (
        <footer className="w-full flex justify-center mt-auto py-2 h-20">
            <div className="container flex justify-end text-sm items-start">
                <div className="flex flex-col items-end">
                    <img src={logo} className="w-32 mt-1 cursor-pointer" alt=""/>
                    <p className="text-xs">Copyright 2021 RealAppeal Technology Solutions Inc.</p>
                </div>
            </div>
        </footer>
    )
}
