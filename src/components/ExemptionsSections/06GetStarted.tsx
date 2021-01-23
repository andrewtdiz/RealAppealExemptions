import React, {useEffect, useState} from 'react'

export default function GetStarted({nextStep, previousStep, userPersonal, userInfo, setInfo}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [infoAccepted, setInfoAccepted] = useState(false)

    useEffect(() => {
        if(firstName.length>0 && lastName.length>0 && email.length>0 && dateOfBirth.length>0 && phoneNumber.length>0) setInfoAccepted(true)
    }, [firstName, lastName, email, dateOfBirth, phoneNumber])

    useEffect(() => {
        setFirstName(userPersonal.firstName)
        setLastName(userPersonal.lastName)
        setEmail(userPersonal.email)
        setDateOfBirth(userPersonal.dateOfBirth)
        setPhoneNumber(userPersonal.phoneNumber)
    }, [])

    function handleChange(event) {
        let name = event.target.name
        let value = event.target.value
        // TODO Clean the input
        switch(name) {
            case 'firstName':
                setFirstName(value)
                break;
            case 'lastName':
                setLastName(value)
                break; 
            case 'email':
                setEmail(value)
                break; 
            case 'dateOfBirth':
                setDateOfBirth(value)
                break;
            case 'phoneNumber':
                setPhoneNumber(value)
                break; 
        }
    }

    // Makes sure that the info is accepted before continuing.
    async function checkAndContinue() {
        if(!infoAccepted) return
        setInfo({firstName, lastName, email, dateOfBirth, phoneNumber})
        nextStep()
    }

    return (
        <section className="exemption-container">
            <div className="container flex flex-col items-center">
                <div className="flex flex-col items-start justify-between w-3/4 relative">
                    <div className="flex w-full items-center mt-8">
                        <h1 className="exemption-title">Let's get started</h1>
                    
                    </div>
                    <p className="exemption-subtitle text-left mt-4">You’re on your way to savings — start by providing your legal name and contact information <br/> as they appear on your identification and property’s ownership records.</p>
                    <div className="w-full flex flex-wrap">
                        <div className="mt-6 mr-6 w-full ">
                            <div className="flex justify-between items-center">
                                <label className="exemption-label mb-0">
                                    Address
                                </label>
                            </div> 
                            <div className="flex mt-2 py-2 items-baseline">
                                <h3 className="mx-3 text-brand-default font-semibold"> {userInfo.address}  {userInfo.city+', '+userInfo.state+' '+userInfo.zipcode} </h3>
                                <button className="ml-auto text-blue-600 text-sm hover:underline">Wrong address?</button>
                            </div>
                            
                        </div>
                        <div className="border-b mt-6 w-full"> </div>
                        <div className="mt-6 w-1/2 pr-6">
                            <label className="exemption-label">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input className="exemption-input" type="text" placeholder="e.g. Jane" name="firstName" value={firstName} onChange={handleChange} />
                        </div>
                        <div className=" mt-6 w-1/2">
                            <label className="exemption-label">
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <input className="exemption-input" type="text" placeholder="e.g. Doe" name="lastName" value={lastName} onChange={handleChange} />
                        </div>
                        <div className="mt-6 w-2/5 pr-6">
                            <label className="exemption-label">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input className="exemption-input" type="text" placeholder="e.g. janedoe@gmail.com" name="email" value={email} onChange={handleChange} />
                        </div>
                        <div className=" mt-6 flex-1 pr-6">
                            <label className="exemption-label">
                                Date of Birth <span className="text-red-500">*</span>
                            </label>
                            <input className="exemption-input" type="text" placeholder="e.g. 06/16/1975" name="dateOfBirth" value={dateOfBirth} onChange={handleChange} />
                        </div>
                        <div className=" mt-6 flex-1">
                            <label className="exemption-label">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input className="exemption-input" type="text" placeholder="e.g. 012-345-6789" name="phoneNumber" value={phoneNumber} onChange={handleChange} />
                        </div>
                    </div>
                    
                    
                </div>
                <div className="exemption-bottom mt-24">
                    <button className="exemption-back" onClick={() => previousStep()}>Go Back</button>
                    <button className={""+(infoAccepted ? 'exemption-continue' : 'exemption-cannot-continue')} onClick={() => checkAndContinue()}>Continue</button>
                </div>
            </div>
        </section>
    )
}
