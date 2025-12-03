import React from 'react'

function Hero() {
    return (
        <section className='hero-main'>
            <div className="hero-content-main py-20 md:py-25 lg:py-32 flex justify-center items-center flex-col text-center max-w-7xl mx-auto px-2 space-y-2">
                <h3 className='text-(--color-secondary) text-md md:text-xl'>Portfolio Showcase</h3>
                <h1 className='text-2xl md:text-4xl lg:text-6xl max-w-5xl'>Here’s a collection of my web design and frontend projects</h1>
                <button className="">
                    <a href='/Ali-Raza-Resume.pdf'
                        download
                        className='flex items-center gap-2 bg-(--color-light) text-(--color-primary) my-4 sm:px-4 px-2 py-1.5 rounded-full text-[12px] sm:text-sm cursor-pointer border transition-all duration-150 hover:bg-(--color-primary) hover:text-(--color-light) hover:border hover:border-(--color-border-2) group'
                    >
                        Download Resume
                        <span className="sm:w-10 w-8 h-8 sm:h-10 bg-black text-(--color-light) rounded-full overflow-hidden">
                            <ul className=' flex flex-col items-center justify-center'>
                                <li className='-translate-y-6 group-hover:translate-y-1 transition-all duration-400'> <i className="text-xs sm:text-lg bi bi-download"></i> </li>
                                <li className='-translate-y-3 sm:-translate-y-6 group-hover:translate-y-6 transition-all duration-400'> <i className="text-xs sm:text-lg bi bi-download"></i> </li>
                            </ul>
                        </span>
                    </a>
                </button>
            </div>
        </section>
    )
}

export default Hero