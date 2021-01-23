import React from 'react'

export default function LetsCheck({nextStep}) {

    return (
        <section className="exemption-container">
           <div className="container flex flex-col">
            <div className="bg-brand-blue-100 flex flex-col items-center justify-between w-full">
                <h1 className="exemption-title mt-8">Let's check for tax exemptions</h1>
                <p className="exemption-subtitle mt-4">What are property tax exemptions?</p>
                <button className="text-blue-600 hover:underline">Learn more</button>

                <div className="h-48 w-48 relative mt-4">
                <svg className="absolute h-64 w-64" style={{left: '50%', top: '132%', transform: 'translate(-45%, -98%)'}} viewBox="0 0 293 268" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="-1.31134e-07" y1="203.5" x2="282" y2="203.5" stroke="#4F4F4F" strokeWidth="3"/>
                    <g>
                    <path d="M222.463 200.959H39.7845C31.6194 200.959 25 194.339 25 186.174V60.8428C25 52.6777 31.6194 46.0583 39.7845 46.0583H222.463C230.628 46.0583 237.247 52.6777 237.247 60.8428V186.174C237.247 194.339 230.628 200.959 222.463 200.959Z" fill="#9DC6FB"/>
                    <path d="M222.463 46.0583H208.628C216.793 46.0583 223.413 52.6777 223.413 60.8428V186.174C223.413 194.339 216.793 200.959 208.628 200.959H222.463C230.628 200.959 237.247 194.339 237.247 186.174V60.8423C237.247 52.6772 230.628 46.0583 222.463 46.0583Z" fill="#80B4FB"/>
                    <path d="M290.684 265.802L282.773 255.708C282.254 255.045 281.251 255.045 280.733 255.708L271.525 267.456C271.006 268.117 270.004 268.118 269.485 267.456L260.276 255.707C259.757 255.045 258.755 255.045 258.236 255.707L249.027 267.456C248.508 268.117 247.506 268.117 246.987 267.456L237.777 255.707C237.259 255.045 236.257 255.045 235.738 255.707L226.528 267.456C226.009 268.117 225.007 268.117 224.488 267.456L215.277 255.706C214.758 255.045 213.756 255.045 213.238 255.706L205.322 265.803C204.563 266.772 203.006 266.235 203.006 265.004V168.318L188.384 124.528H213.402H278.378C286.453 124.528 293 131.074 293 139.15V265.003C293 266.234 291.444 266.771 290.684 265.802Z" fill="#F9F6F9"/>
                    <path d="M278.378 124.528H267.779C275.854 124.528 282.401 131.074 282.401 139.15V255.393C282.538 255.473 282.667 255.573 282.773 255.708L290.684 265.802C291.444 266.771 293 266.234 293 265.003V139.15C293 131.074 286.453 124.528 278.378 124.528Z" fill="#DDDAEC"/>
                    <path d="M229.787 240.232C226.256 240.232 224.049 239.821 220.722 237.644C218.854 236.421 218.33 233.916 219.552 232.048C220.775 230.179 223.28 229.656 225.149 230.878C226.97 232.07 227.566 232.16 230.066 232.145C232.396 232.13 233.324 230.3 233.506 229.222C233.737 227.845 233.136 226.893 231.719 226.391C231.245 226.224 230.784 226.065 230.336 225.911C227.069 224.785 224.247 223.813 222.328 221.585C220.109 219.007 219.339 215.32 220.318 211.962C221.237 208.809 223.56 206.459 226.694 205.515C232.384 203.802 236.88 204.973 237.374 205.114C239.523 205.72 240.774 207.953 240.167 210.102C239.565 212.238 237.355 213.489 235.218 212.906C235.087 212.875 232.397 212.242 229.025 213.258C228.666 213.366 228.272 213.566 228.08 214.225C227.875 214.927 228.037 215.822 228.454 216.307C228.947 216.879 231.177 217.648 232.97 218.266C233.438 218.427 233.92 218.593 234.414 218.767C239.523 220.573 242.363 225.313 241.48 230.562C240.545 236.126 235.767 240.191 230.12 240.229C230.008 240.231 229.896 240.232 229.787 240.232Z" fill="#95D6A4"/>
                    <path d="M230.093 244.187C227.86 244.187 226.05 242.377 226.05 240.144V237.098C226.05 234.865 227.86 233.055 230.093 233.055C232.326 233.055 234.136 234.865 234.136 237.098V240.144C234.136 242.377 232.327 244.187 230.093 244.187Z" fill="#95D6A4"/>
                    <path d="M230.093 212.179C227.86 212.179 226.05 210.369 226.05 208.136V205.328C226.05 203.095 227.86 201.285 230.093 201.285C232.326 201.285 234.136 203.095 234.136 205.328V208.136C234.136 210.369 232.327 212.179 230.093 212.179Z" fill="#95D6A4"/>
                    <path d="M267.889 147.864H228.118C225.885 147.864 224.075 146.054 224.075 143.821C224.075 141.588 225.885 139.778 228.118 139.778H267.889C270.122 139.778 271.932 141.588 271.932 143.821C271.932 146.054 270.122 147.864 267.889 147.864Z" fill="#365E7D"/>
                    <path d="M226.518 170.953H218.007C215.774 170.953 213.964 169.143 213.964 166.91C213.964 164.677 215.774 162.867 218.007 162.867H226.518C228.751 162.867 230.561 164.677 230.561 166.91C230.561 169.143 228.751 170.953 226.518 170.953Z" fill="#365E7D"/>
                    <path d="M277.999 170.953H238.292C236.059 170.953 234.249 169.143 234.249 166.91C234.249 164.677 236.059 162.867 238.292 162.867H277.999C280.232 162.867 282.042 164.677 282.042 166.91C282.042 169.143 280.232 170.953 277.999 170.953Z" fill="#365E7D"/>
                    <path d="M226.518 189.615H218.007C215.774 189.615 213.964 187.805 213.964 185.572C213.964 183.339 215.774 181.529 218.007 181.529H226.518C228.751 181.529 230.561 183.339 230.561 185.572C230.561 187.805 228.751 189.615 226.518 189.615Z" fill="#365E7D"/>
                    <path d="M277.999 189.615H238.292C236.059 189.615 234.249 187.805 234.249 185.572C234.249 183.339 236.059 181.529 238.292 181.529H277.999C280.232 181.529 282.042 183.339 282.042 185.572C282.042 187.805 280.232 189.615 277.999 189.615Z" fill="#365E7D"/>
                    <path d="M277.999 215.829H257.876C255.643 215.829 253.833 214.019 253.833 211.786C253.833 209.553 255.643 207.743 257.876 207.743H277.999C280.232 207.743 282.042 209.553 282.042 211.786C282.042 214.019 280.232 215.829 277.999 215.829Z" fill="#365E7D"/>
                    <path d="M179.153 175.119H147.295C145.062 175.119 143.252 173.309 143.252 171.076C143.252 168.843 145.062 167.033 147.295 167.033H179.153C181.386 167.033 183.196 168.843 183.196 171.076C183.196 173.309 181.386 175.119 179.153 175.119Z" fill="#365E7D"/>
                    <path d="M203.007 182.99H175.925C174.731 182.99 173.763 182.022 173.763 180.828V139.15C173.763 131.074 180.309 124.528 188.385 124.528C196.46 124.528 203.007 131.074 203.007 139.15V182.99Z" fill="#D0CEE7"/>
                    <path d="M188.384 124.528C186.573 124.528 184.84 124.86 183.239 125.462C188.775 127.544 192.716 132.886 192.716 139.15V182.99H203.006V139.15C203.006 131.074 196.46 124.528 188.384 124.528Z" fill="#BEB9DD"/>
                    <path d="M138.538 120.079L237.247 79.2186V60.8423C237.247 52.6772 230.628 46.0578 222.463 46.0578H39.7845C31.6194 46.0583 25 52.6772 25 60.8428V79.2191L123.709 120.08C128.457 122.044 133.79 122.044 138.538 120.079Z" fill="#8993DA"/>
                    <path d="M222.463 46.0583H208.628C216.793 46.0583 223.413 52.6777 223.413 60.8428V84.9455L237.247 79.2186V60.8423C237.247 52.6772 230.628 46.0583 222.463 46.0583Z" fill="#707DD3"/>
                    <path d="M137.673 137.676H124.575C120.551 137.676 117.289 134.414 117.289 130.39V110.69C117.289 106.666 120.551 103.405 124.575 103.405H137.673C141.696 103.405 144.958 106.666 144.958 110.69V130.39C144.958 134.414 141.696 137.676 137.673 137.676Z" fill="#ECBE6B"/>
                    <path d="M137.673 103.404H124.916C128.94 103.404 132.202 106.666 132.202 110.689V130.39C132.202 134.414 128.94 137.675 124.916 137.675H137.673C141.696 137.675 144.958 134.414 144.958 130.39V110.689C144.958 106.666 141.696 103.404 137.673 103.404Z" fill="#E7A561"/>
                    <path d="M95.1658 46.0583V27.7479C95.1658 21.3908 100.337 16.2192 106.694 16.2192H155.552C161.909 16.2192 167.081 21.3913 167.081 27.7479V46.0583H183.252V27.7479C183.252 12.474 170.826 0.0476074 155.552 0.0476074H106.694C91.42 0.0476074 78.9936 12.474 78.9936 27.7479V46.0583H95.1658Z" fill="#407093"/>
                    <path d="M78.9947 36.27H95.1657V46.0583H78.9947V36.27Z" fill="#365E7D"/>
                    <path d="M167.081 36.27H183.252V46.0583H167.081V36.27Z" fill="#365E7D"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="268" height="268" fill="white" transform="translate(25)"/>
                    </clipPath>
                    </defs>
                </svg>
                </div>
            </div>
            
            <button className="exemption-continue mx-auto mt-24" onClick={() => nextStep()}>Continue</button>

           </div>
        </section>
    )
}
