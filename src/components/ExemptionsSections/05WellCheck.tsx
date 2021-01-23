import React from 'react'
import ExemptionInfoTab from '../ExemptionInfoTab'

export default function WellCheck({nextStep, previousStep, userExemptions}) {

    return (
        <section className="exemption-container">
        <div className="container flex flex-col items-center">
            <div className="flex flex-col items-start justify-between w-3/4 relative">
                <div className="flex w-full items-center mt-8 ">
                    <h1 className="exemption-title">Here's what we'll check for you</h1>
                </div>
                <p className="exemption-subtitle text-left mt-4">Based on your residence, you qualify for a number of exemptions. <br/> Read more below or click continue to get started!</p>
                { userExemptions.map((exemption,ind) => (
                    <ExemptionInfoTab key={ind} name={exemption.name} description={exemption.description}/>
                ))
                }
                
            </div>
            <div className="exemption-bottom mt-32">
                <button className="exemption-back" onClick={() => previousStep()}>Go Back</button>
                <button className="exemption-continue" onClick={() => nextStep()}>Continue</button>
            </div>
        </div>
    </section>
    )
}
