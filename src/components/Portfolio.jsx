import React from 'react'

function Portfolio() {

    const PorfolioCards = [
        { url: 'turmet.netlify.app', ImgUrl: 'travel-app.png', heading: 'Travel App' },
        { url: 'restfolio.netlify.app', ImgUrl: 'restaurant-portfolio.png', heading: 'Restaurant Porfolio' },
        { url: 'aliraza-personalportfolio.netlify.app', ImgUrl: 'personal-portfolio.png', heading: 'Personal Porfolio' },
        { url: 'bit-matrix.netlify.app', ImgUrl: 'business-template.png', heading: 'Business Template' },
        { url: 'luxury-drive.netlify.app', ImgUrl: 'car-rental-theme.png', heading: 'Car Rental Theme' },
        { url: 'grillrestaurant-template.netlify.app', ImgUrl: 'restaurant-template.png', heading: 'Restaurant Theme' },
        { url: 'hungry-spoon.netlify.app', ImgUrl: 'recipe-finder.png', heading: 'Recipe Finder' },
        { url: 'abacusai.netlify.app', ImgUrl: 'chatbot.png', heading: 'Chat Bot' },
        { url: 'quizzzyfy.netlify.app', ImgUrl: 'quiz-app.png', heading: 'Quiz App' },
        { url: 'sigmastorm.netlify.app', ImgUrl: 'weather-app.png', heading: 'Weather App' },
    ]

    return (
        <section className='portfolio-main pb-8'>
            <div className="portfolio-content-main max-w-7xl mx-auto px-3 grid grid-cols-1 md:grid-cols-2 grid-rows-1 place-content-center gap-8">

                {PorfolioCards.map((card, i) => (
                    <div
                        key={i}
                        className="card-main group text-center flex flex-col items-center justify-center bg-(--bg-secondary) border border-(--color-border-2) hover:border-(--color-secondary)/70 transition-all duration-300 p-2 sm:p-3 rounded-3xl shadow-[0_0_25px_#fff]/6 cursor-pointer">
                        <a
                            href={`https://${card.url}/`}
                            target='_blank'
                        >
                            <div className="card-img sm:max-h-[450px] max-h-[350px] overflow-hidden rounded-2xl relative">
                                <img
                                    src={`/${card.ImgUrl}`}
                                    alt={`${card.heading} Img`}
                                    loading={i > 1 ? "lazy" : 'eager'}
                                />
                                <div
                                    className="overlay h-50 bg-linear-to-b to-black/70 from-transparent w-full absolute bottom-0 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100"
                                >

                                </div>
                                <div
                                    className="card-btn absolute left-1/2 -translate-x-1/2 bottom-4 translate-y-18 group-hover:translate-y-0 transition-all duration-300"
                                >
                                    <button
                                        className='bg-(--color-light) text-(--color-primary) font-semibold px-3 py-2 rounded-full text-sm cursor-pointer'
                                    >
                                        <a
                                            href={`https://${card.url}/`}
                                            target='_blank'
                                        >
                                            View Demo
                                        </a>
                                    </button>
                                </div>
                            </div>
                            <div
                                className="card-heading mt-5 text-xl lg:text-2xl font-semibold"
                            >
                                {card.heading}
                            </div>
                        </a>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Portfolio