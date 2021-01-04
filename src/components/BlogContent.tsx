import React from 'react'
import image from "../images/main.png"
import img1 from "../images/story1.png"
import img2 from "../images/story2.png"
import img3 from "../images/story3.png"
import BlogLinkDisplay from './BlogLinkDisplay'

export default function Content() {
    return (
        <div className="mt-20 items-center">
            <div className="flex flex-col items-center w-full border-b-2 border-gray-300">
                <div className="container flex pt-6 md:pt-12 pb-6">
                    <div className="flex items-center">
                        <button className="ml-2 font-bold text-brand-default flex items-center hover:text-brand-dark"> 
                        <svg className="fill-current h-4 w-4 mr-2" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 492 492">
                        <g>
                            <g>
                                <path d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124    c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844    L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412    c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008    c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788    C492,219.198,479.172,207.418,464.344,207.418z"/>
                            </g>
                        </g>
                        </svg>
                        Back to more Blog Posts</button>
                    </div>
                </div>
                <div className="hidden sm:block container flex justify-center mb-4 md:mb-12">
                    <div className="flex w-5/6 sm:w-3/4 items-center">
                        <button className="bg-brand-default text-sm md:text-base text-white mr-4 hover:underline px-2 py-1 md:px-3 md:py-1 rounded-full">Residential</button>
                        <button className="text-sm md:text-base text-white mr-4 hover:underline px-2 py-1 md:px-3 md:py-1 rounded-full" style={{background: '#38495d'}}>Appeals</button>
                    </div>
                </div>
                <div className="container flex flex-col items-center">
                    <div className="flex flex-col items-stretch w-5/6 sm:w-3/4">
                        <h1 className="blog-title pl-2 md:pl-8">How realAppeal helped a Homeowner reduce their property taxes</h1>
                        <h2 className="blog-sub-title pl-2 md:pl-8">How filing a Decline-in-Value helped one customer save thousands of dollars on their property tax bill.</h2>
                        <img src="{image}" className="w-full" alt=""/>
                        <div className="bg-gray-700 my-8 w-full" style={{height: '2px'}}></div>
                        <p className="blog-text">In 2017, Brian and Fessica purchased their dream home in Southern California. Over the next few years, they watched their tax assessment and tax bill creep up as expected, but at the same time other homes in their neighborhood were selling for less than they paid for theirs. Jessica reached out to the county assessor’s office. She spent over 30 minutes on hold and was told to file something called a Proposition 8 claim that could be found on their website. Ater looking into the Decline in Value appeal and the Assessment Appeals Board they were not sure what to do.</p>
                        <h3 className="blog-heading">Finding a better way</h3>
                        <p className="blog-text">In search of help, a friend recommended realAppeal’s quick online service and they navigated to <button onClick={()=> window.open("http://therealappeal.com", "_blank")} className="text-brand-dark hover:text-brand-default">therealappeal.com</button>. In a few minutes, Jessica was able to fill out all the information necessary to get realAppeal’s tax experts started and with no upfront cost there was absolutely no downside. After signing up they did not lift another finger. </p>
                        <p className="blog-text">realAppeal’s tax experts evaluated the property the very next day, and identified recent sales in the area that demonstrated the home’s market value had fallen below its initial purchase price, and presently assessed value. realAppeal filed the necessary forms in days and negotiated a lower tax bil.By the time they received their next property tax bill, realAppeal reduced Brian and Jessica’s property tax assessment by 8%, or $450,000. Soon after, they received a tax refund of $5,625 for their prior payment. Because of the reduced tax assessment, Brain and Jessica pay less property taxes for years to come.</p>
                        <h3 className="blog-heading">What were the results?</h3>
                        <p className="blog-text">Prior Assessment: $6,250,000 <br/>
                        Post realAppeal Assessment: $5,800,000 <br/>
                        Property Asessment Reduction: $450,000 <br/>
                        First Year Tax Savings: $5,625 <br/>
                        </p>
                        <div className="flex flex-wrap py-12">
                            <button className="px-3 py-1 mt-3 md:mt-0 md:px-12 md:py-4 mr-4 border rounded border-gray-400 hover:border-gray-700 flex items-center">
                                <svg className="w-4 h-4 mr-2 fill-current" height="512" viewBox="0 0 512 512" width="512"><path d="m512 256c0-141.4-114.6-256-256-256s-256 114.6-256 256 114.6 256 256 256c1.5 0 3 0 4.5-.1v-199.2h-55v-64.1h55v-47.2c0-54.7 33.4-84.5 82.2-84.5 23.4 0 43.5 1.7 49.3 2.5v57.2h-33.6c-26.5 0-31.7 12.6-31.7 31.1v40.8h63.5l-8.3 64.1h-55.2v189.5c107-30.7 185.3-129.2 185.3-246.1z"/></svg>
                                Share on Facebook
                            </button>
                            <button className="px-3 py-1 mt-3 md:mt-0 md:px-12 md:py-4 border rounded border-gray-400 hover:border-gray-700 flex items-center">
                                <svg className="w-4 h-4 mr-2  fill-current" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512">
                                    <g>
                                        <g>
                                            <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016    c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992    c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056    c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152    c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792    c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44    C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568    C480.224,136.96,497.728,118.496,512,97.248z"/>
                                        </g>
                                    </g>
                                </svg>
                                Share on Twitter
                            </button>
                        </div>
                        <div className="flex flex-wrap pb-12 items-baseline">
                            <p>Tags:</p>
                            <button className="text-brand-default hover:underline font-medium ml-2">Residential</button>,
                            <button className="text-brand-default hover:underline font-medium ml-2">Property tax appeals</button>,
                            <button className="text-brand-default hover:underline font-medium ml-2">Decline-in-value</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center w-full">
                <div className="w-5/6 sm:w-3/4 flex flex-col items-center py-6">
                    <h1 className="blog-title py-6">More Success Stories</h1>
                    <div className="flex justify-center flex-wrap w-full">
                        <BlogLinkDisplay img={img1} title="Lorem Ipsum dolor sit amet, cnosectetur adipsicing elit, sed do eiusmod tempor"/>
                        <BlogLinkDisplay img={img2} title="Lorem Ipsum dolor sit amet, cnosectetur adipsicing elit, sed do eiusmod tempor"/>
                        <BlogLinkDisplay img={img3} title="Lorem Ipsum dolor sit amet, cnosectetur adipsicing elit, sed do eiusmod tempor"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
