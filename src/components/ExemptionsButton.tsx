import React, {useState} from 'react'

export default function ExemptionsButton({val}) {
    const [clicked, setClicked] = useState(false);
    return (
        <button onClick={() => setClicked(prev => !prev)} className={"my-2 focus:outline-none appearance-none px-3 py-3 border rounded " + (!clicked ? "shadow-anim border-gray-200" : "text-brand-dark border-brand-default")}>
            {val}
        </button>
    )
}
