import React from 'react'

export default function Review({previousStep, userInfo, userPersonal}) {
    return (
        <section className="exemption-container">
            <div className="container flex flex-col">
                <div className="flex flex-col items-center justify-between w-full">
                    <h1 className="exemption-title mt-8">Let's review</h1>
                    <p className="exemption-subtitle mt-4">You’re almost done! Review the information below to make sure it’s correct. <br/> You can make changes using the “Edit” buttons. If everything looks OK, continue to the last step.</p>
                </div>
                <div className="flex w-full items-center mt-8 ">
                    <h1 className="text-2xl font-medium">Property Owner Information</h1>
                </div>
                <div className="flex flex-wrap">
                    <div className="mt-6 w-1/4 pr-6">
                        <label className="exemption-label">
                            Full Name
                        </label>
                        <p className="text-gray-600">{userPersonal.firstName} {userPersonal.lastName}</p>
                    </div>
                    <div className="mt-6 w-1/4 pr-6">
                        <label className="exemption-label">
                            Date of Birth
                        </label>
                        <p className="text-gray-600">{userPersonal.dateOfBirth}</p>
                    </div>
                    <div className="mt-6 w-1/4 pr-6">
                        <label className="exemption-label">
                            Primary Phone:
                        </label>
                        <p className="text-gray-600">{userPersonal.phoneNumber}</p>
                    </div>
                    <div className="mt-6 w-1/4 pr-6">
                        <label className="exemption-label">
                            Contact Email:
                        </label>
                        <p className="text-gray-600">{userPersonal.email}</p>
                    </div>
                    <div className="mt-6 w-1/4 pr-6">
                        <label className="exemption-label">
                            Ownership Status:
                        </label>
                        <p className="text-gray-600">Part Owner (50%)</p>
                    </div>
                    <div className="mt-6 w-1/4 pr-6">
                        <label className="exemption-label">
                            Identification
                        </label>
                        <p className="text-gray-600">Driver's License</p>
                    </div>
                    <div className="mt-6 w-1/4 pr-6">
                        <label className="exemption-label">
                            Income-Producting (%)
                        </label>
                        <p className="text-gray-600">0.00%</p>
                    </div>
                </div>
                <div className="flex w-full items-center mt-8 ">
                    <h1 className="text-2xl font-medium">Property Owner Information</h1>
                </div>
                <div className="flex flex-wrap">
                    <div className="mt-6 w-1/4 pr-6">
                        <label className="exemption-label">
                            Address
                        </label>
                        <p className="text-gray-600">{userInfo.address}</p>
                    </div>
                    <div className="mt-6 w-1/4 pr-6">
                        <label className="exemption-label">
                            Primary Residence:
                        </label>
                        <p className="text-gray-600">Yes</p>
                    </div>
                    <div className="mt-6 w-1/4 pr-6">
                        <label className="exemption-label">
                            Primary Phone:
                        </label>
                        <p className="text-gray-600">{userPersonal.phoneNumber}</p>
                    </div>
                    <div className="mt-6 w-1/4 pr-6">
                        <label className="exemption-label">
                            Purchased:
                        </label>
                        <p className="text-gray-600">01/16/2018</p>
                    </div>
                    <div className="mt-6 w-1/4 pr-6">
                        <label className="exemption-label">
                            Move-in Date:
                        </label>
                        <p className="text-gray-600">01/16/2019</p>
                    </div>
                </div>
                <div className="exemption-bottom absolute top-750-px">
                    <button className="exemption-back" onClick={() => previousStep()}>Go Back</button>
                    <button className="exemption-continue">Complete</button>
                </div>
            </div>
        </section>
    )
}
