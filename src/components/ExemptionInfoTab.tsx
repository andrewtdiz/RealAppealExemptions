import React, {useState} from 'react'

export default function ExemptionInfoTab({name, description}) {
    const [open, setOpen] = useState(false)

    return (
        <div className="border hover:border-gray-300 rounded w-full py-1 px-3 mt-6 flex flex-col">
            <div onClick={() => setOpen(!open)} className="flex items-center justify-between cursor-pointer ">
                <h1 className="text-lg select-none ">{name}</h1>
                <div className="w-3 h-3 flex justify-center items-center">
                    {open ? ( 
                            <svg className="h-3 w-3 fill-current text-brand-default" viewBox="0 0 124 124">
                                <g>
                                    <path d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"/>
                                </g>
                            </svg>) : 
                        (
                            <svg className="h-3 w-3 fill-current text-brand-default" viewBox="0 0 448 448"><path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"/></svg>
                        )
                    }

                </div>
            </div>
            <div className={"overflow-y-hidden transition-all linear duration-500 " + (open ? 'max-h-32' : 'max-h-0')}>
                <p className="text-sm select-none mt-1 px-2">{description}</p>
            </div>
        </div>
    )
}
