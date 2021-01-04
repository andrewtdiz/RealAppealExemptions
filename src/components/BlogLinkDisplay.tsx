import React, {useState, useEffect} from 'react'

export default function BlogLinkDisplay(props:any) {
    const [hovering, setHovering] = React.useState<boolean>(false)

    useEffect(() => {
        console.log(hovering)
    }, [hovering])

    return (
        <div className="w-72 py-8 group overflow-hidden md:mx-4 flex flex-col text-gray-700 cursor-pointer hover:text-black items-center">
            <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className="w-72 h-64 overflow-hidden">
                <img src={props.img} className="rounded-sm h-full w-auto object-cover transition-all duration-300 ease-in-out" style={{transform: hovering ? 'scale(1.1)' : 'scale(1.0)'}} alt=""/>
            </div>
            <p onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className="pt-1 text-base group-hover:underline font-medium mx-6 text-center">Lorem Ipsum dolor sit amet, cnosectetur adipsicing elit, sed do eiusmod tempor</p>
        </div>
    )
}
