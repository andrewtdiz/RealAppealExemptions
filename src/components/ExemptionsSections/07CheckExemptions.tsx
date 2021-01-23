import { userInfo } from 'os'
import React, {useEffect, useState} from 'react'
import primaryResidence from '../../images/primaryResidence.png'
import movedIn from '../../images/movedIn.png'
import propertyPurchased from '../../images/propertyPurchased.png'
import ownsProperty from '../../images/ownsProperty.png'
import ExemptionsButton from '../ExemptionsButton'

export default function CheckExemptions({nextStep, previousStep, exemptions, userInfo}) {
    const [progress, setProgress] = useState(0);

    const getImageFromString = (str) => {
        switch(str) {
            case "primaryResidence":   
                return primaryResidence;
            case "movedIn":
                return movedIn;
            case "propertyPurchased":
                return propertyPurchased;
            case "ownsProperty":
                return ownsProperty;
        }
    }

    return (
        <section className="exemption-container">
            {exemptions.map(exemption => exemption.questions.map((question, ind) => (
                <div key={exemption.id+ind} className="container flex flex-col justify-center" style={{minHeight: "80vh"}}>
                    <div className="flex flex-col items-center justify-between w-full">
                        <img src={getImageFromString(question.image)} className="w-36 h-36" alt=""/>
                        <h1 className="exemption-title mt-8">{question.content}</h1>
                        <p className="exemption-subtitle w-3/5 mt-4">{question.description}</p>
                        <button className="text-blue-600 hover:underline">Learn more</button>

                        <div className="mt-8">
                            {question.options[0]==='Date' 
                            ? <div className="flex">
                                <input className="exemption-input w-full" type="date" placeholder={"Date"}/>
                              </div>
                            : <div className="flex flex-col">
                                {question.options.map((val,ind) => (
                                    <ExemptionsButton key={ind} val={val} />))}  
                              </div>}
                        </div>
                    </div>
                </div>
            )
            ))}
            <div className="exemption-bottom mt-12">
                <button className="exemption-back" onClick={() => previousStep()}>Go Back</button>
                <button className="exemption-continue" onClick={() => nextStep()}>Continue</button>
            </div>
        </section>
    )
}