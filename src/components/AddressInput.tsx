import React, {useState, useEffect} from 'react'

export default function AddressInput({addressChange}) {
    const [address, setAddress] = useState('')
    const [appartment, setAppartment] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipcode, setZipCode] = useState('')

    // useEffect checks to see that all fields are not empty, any time one of the fields changes
    useEffect(() => {
        addressChange({address, appartment, city, state, zipcode} )
    }, [address, appartment, city, state, zipcode])

    // Handles when any of the input fields change
    function handleChange(event) {
        let name = event.target.name
        let value = event.target.value
        // TODO Clean the input
        switch(name) {
            case 'address':
                setAddress(value)
                break;
            case 'appartment':
                setAppartment(value)
                break; 
            case 'city':
                setCity(value)
                break; 
            case 'state':
                setState(value)
                break;
            case 'zipcode':
                setZipCode(value)
                break; 
        }
    }

    return (
        <div className="w-full flex flex-wrap mt-6">
            <div className="mt-6 w-3/5 pr-6">
                <label className="exemption-label">
                    Street Address <span className="text-red-500">*</span>
                </label>
                <input className="exemption-input" type="text" placeholder="e.g. 123 Main St." name="address" value={address} onChange={handleChange} />
            </div>
            <div className=" mt-6 w-2/5">
                <label className="exemption-label">
                    Apt #
                </label>
                <input className="exemption-input" type="text" placeholder="Apt #4206" name="appartment" value={appartment} onChange={handleChange} />
            </div>
            <div className="mt-6 w-1/3 pr-6">
                <label className="exemption-label">
                    City <span className="text-red-500">*</span>
                </label>
                <input className="exemption-input" type="text" placeholder="e.g. San Francisco" name="city" value={city} onChange={handleChange} />
            </div>
            <div className=" mt-6 flex-1 pr-6">
                <label className="exemption-label">
                    State <span className="text-red-500">*</span>
                </label>
                <input className="exemption-input" type="text" placeholder="e.g. CA" name="state" value={state} onChange={handleChange} />
            </div>
            <div className=" mt-6 flex-1">
                <label className="exemption-label">
                    Zip Code <span className="text-red-500">*</span>
                </label>
                <input className="exemption-input" type="text" placeholder="e.g. 94103" name="zipcode" value={zipcode} onChange={handleChange} />
            </div>
        </div>
    )
}
