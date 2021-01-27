import React, {useState, useEffect} from 'react'
import AddressInput from '../AddressInput'

export default function MailingAddress({nextStep, previousStep, userInfo, setInfo }) {
    const [userAddress, setUserAddress] = useState()
    const [infoAccepted, setInfoAccepted] = useState(false)
    
    // Handles when any of the input fields change
    function handleChange(info) {
        let infoContainsEmptyValue = true
        for(let i of Object.keys(info).filter(val=>val!=='appartment')) {
            if(info[i]==='') {
                infoContainsEmptyValue = false
                break
            }
        }
        setInfoAccepted(infoContainsEmptyValue)
        setUserAddress(info)
    }

    // Makes sure that the info is accepted before continuing.
    async function checkAndContinue() {
        if(!infoAccepted) return
        setInfo(userAddress)
        nextStep()
    }

    // Here's a function that puts all the information into an object to test with an API
    // async function checkAPI() {
    //      let obj = {address, appartment, city, state, zipcode} 
    //      let result = fetch(API).then(..).data.isAccepted
    //      return result
    //  }

    return (
        <section className="exemption-container">
            <div className="container flex flex-col items-center">
                <div className="flex flex-col items-start justify-between w-3/4 relative">
                    <div className="flex w-full items-center mt-8 -ml-16">
                        <div className="h-10 w-10 mr-6">
                            <svg className="fill-current mt-1 text-brand-dark block h-10 w-10 top-0 left-0" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" >
                                <g>
                                    <g>
                                        <path d="M437.02,74.98C388.667,26.629,324.38,0,256,0S123.333,26.629,74.98,74.98C26.629,123.333,0,187.62,0,256
                                            s26.629,132.667,74.98,181.02C123.333,485.371,187.62,512,256,512s132.667-26.629,181.02-74.98
                                            C485.371,388.667,512,324.38,512,256S485.371,123.333,437.02,74.98z M256,70c30.327,0,55,24.673,55,55c0,30.327-24.673,55-55,55
                                            c-30.327,0-55-24.673-55-55C201,94.673,225.673,70,256,70z M326,420H186v-30h30V240h-30v-30h110v180h30V420z"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <h1 className="exemption-title">Enter your current mailing address</h1>
                    
                    </div>
                    <p className="exemption-subtitle text-left mt-4">We’re going check for available savings at your primary residence. <br/> Check to make sure the information below is where you primarily reside.</p>
                    
                    <AddressInput addressChange={handleChange} />
                    
                </div>
                <div className="exemption-bottom absolute top-750-px">
                    <button className="exemption-back" onClick={() => previousStep()}>Go Back</button>
                    <button className={""+(infoAccepted ? 'exemption-continue' : 'exemption-cannot-continue')} onClick={() => checkAndContinue()}>Continue</button>
                </div>
            </div>
        </section>
    )
}
