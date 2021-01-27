import React, {useState, useEffect } from 'react'
import './ExemptionStyles.css'
import Footer from './Footer'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ExemptionsLoading from './ExemptionsSections/ExemptionsLoading'
import LetsCheck from './ExemptionsSections/01LetsCheck'
import AvailableSavings from './ExemptionsSections/02AvailableSavings'
import MailingAddress from './ExemptionsSections/03MailingAddress'
import Searching from './ExemptionsSections/04Searching'
import WellCheck from './ExemptionsSections/05WellCheck'
import GetStarted from './ExemptionsSections/06GetStarted'
import CheckExemptions from './ExemptionsSections/07CheckExemptions'
import Review from './ExemptionsSections/08Review'

interface UserAddress {
    address: String,
    appartment: String,
    city: String,
    state: String,
    zipcode: String,
}

interface UserPersonalInfo {
    firstName: String,
    lastName: String,
    email: String,
    dateOfBirth: String,
    phoneNumber: String,
}

interface Question {
    image: String,
    content: String,
    description: String,
    options: Array<String>,
    answer: String,
    learnMore: String
}

interface Exemption {
    id: Number,
    name: String,
    description: String,
    image: String,
    questions: Array<Question>
}

let exemptionsData = [
    {
        id: 0,
        name: 'Homestead Exemption',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco consequat. \n\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: '',
        questions: [
            {
                image:'primaryResidence',
                content: 'Will this be your primary residence in 2021?',
                description: 'According to state law in  Florida, primary residence is defined as the place your reside for 181 days or more of the year.',
                options: ['Yes, it will be', 'No, it won\'t be'],
                answer: '',
                learnMore: ''
            },
            {
                image:'movedIn',
                content: 'Approximately when did you move in?',
                description: 'Try to provide a date as close to your moving date as possible. You may be able to claim a refund if your previously qualified for a tax break, but did not receive it.',
                options: ['Date'],
                answer: '',
                learnMore: ''
            },
            {
                image:'propertyPurchased',
                content: 'When was this property purchased?',
                description: 'Different requirements may apply depending on when you first purchased your home. Try to provide the date you closed on the property, or as it’s reflected on the deed, if possible.',
                options: ['Date'],
                answer: '',
                learnMore: ''
            },
            {
                image:'ownsProperty',
                content: 'Who owns the property?',
                description: 'Depending on how the property is owned, different documentation may need to be submitted. Please provide ownership information as it is reflected in county records.',
                options: ['I am the sole owner.', 'There are multiple owners', 'It is owned through a trust', 'Other'],
                answer: '',
                learnMore: ''
            }
        ]
    },
    {
        id: 1,
        name: 'Senior Exemption',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco consequat. \n\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: '',
        questions: [
        ]
    },
    {
        id: 2,
        name: 'Veteran Exemption',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco consequat. \n\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: '',
        questions: [
        ]
    },
    {
        id: 3,
        name: 'Disabled Exemption',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco consequat. \n\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: '',
        questions: [
        ]
    }
]

export default function ExemptionContainer() {
    // An array [previous, current] that maintains the state of the view
    const [fromTo, setFromTo] = useState([1,1])
    
    // The viewPort array through which views are loaded/unloaded
    // Must be initialized to the first view from steps.
    const [viewPort, setViewPort] = useState<Array<JSX.Element | null>>([(
        <AvailableSavings nextStep={nextStep} previousStep={previousStep}/>
    )])

    const [hasFound, setHasFound] = useState(false)
    const [userAddress, setUserAddress] = useState<UserAddress>({address: '', appartment: '', city: '', state: '', zipcode: ''})
    const [exemptions, setExemptions] = useState<Array<Exemption>>([])
    const [userPersonalInfo, setUserPersonalInfo] = useState<UserPersonalInfo>({firstName: '', lastName: '', email: '', dateOfBirth: '', phoneNumber: ''})

    // Whenever the fromTo changes, change the viewPort after a random elapsed time
    useEffect(() => {
        if(fromTo[0]===fromTo[1]) return
        if((fromTo[0]===2 && fromTo[1]===3) && !hasFound) {
            // Search the API here for savings and return exemptionsData, then set Found savings to true.
            setExemptions(exemptionsData)
            setHasFound(true)
            setTimeout((val) => {
                setViewPort([states[val]])
            }, 200, fromTo[1])
            return
        } else if(fromTo[0]===2 && fromTo[1]===3) {
            setTimeout((val) => {
                setViewPort([states[val]])
            }, Math.random()*2000+500, fromTo[1]+1)
            return
        }
        setTimeout((val) => {
            setViewPort([states[val]])
        }, 200, fromTo[1])
    }, [fromTo])

    // Go to the next view
    // Involves clearing the viewport then inserting the appropriate view.
    function nextStep(val) {
        val = fromTo[1]+1
        setViewPort([])
        let hold = fromTo.slice(0)
        hold.shift()
        hold.push(val)
        setFromTo(hold)
    }

    // Go to the next view
    // Involves clearing the viewport then inserting the appropriate view.
    function previousStep(val) {
        val = fromTo[1]-1
        setViewPort([])
        let hold = fromTo.slice(0)
        hold.shift()
        hold.push(val)
        setFromTo(hold)
    }

    // The array of the potential states of the viewport
    let states = [
        <LetsCheck nextStep={nextStep} />,
        <AvailableSavings nextStep={nextStep} previousStep={previousStep}/>,
        <MailingAddress nextStep={nextStep} previousStep={previousStep} userInfo={userAddress} setInfo={setUserAddress}/>,
        <Searching nextStep={nextStep} previousStep={previousStep} userInfo={userAddress}/>, 
        <WellCheck nextStep={nextStep} previousStep={previousStep} userExemptions={exemptions}/>,
        <GetStarted nextStep={nextStep} previousStep={previousStep} userInfo={userAddress} userPersonal={userPersonalInfo} setInfo={setUserPersonalInfo}/>,
        <CheckExemptions nextStep={nextStep} previousStep={previousStep} userInfo={userAddress} exemptions={exemptions} />,
        <Review previousStep={previousStep} userInfo={userAddress} userPersonal={userPersonalInfo}/>
    ]

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="container ">
                {viewPort.length===0 && (
                    <ExemptionsLoading />
                )}
                <TransitionGroup
                    >
                    {viewPort.map((val) => (
                        <CSSTransition key={Math.random()*1000} timeout={500} classNames={fromTo[0]<fromTo[1] ? 'forward' : 'backward'}> 
                            {val}
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>  
        </div>
    )
}
