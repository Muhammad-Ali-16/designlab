import React from 'react'

function Footer() {
    return (
        <section className='footer-main'>
            <div className="footer-content-main max-w-7xl mx-auto px-3 py-5 text-white/70">
                <div className="social-links flex flex-col md:flex-row justify-center items-center md:justify-between gap-3 border-y border-white/20 py-6">
                    <h5>
                        Designed by 
                        <a
                            href='https://github.com/Muhammad-Ali-16'
                            target='_blank'
                            className='underline text-(--color-secondary) mx-1.5'
                        >
                            Ali Raza
                        </a>
                    </h5>
                    <div className='flex flex-row space-x-4'>
                        <h5>Follow Us:</h5>
                        <div className="links space-x-4">
                            <a
                                target='_blank'
                                href="https://github.com/Muhammad-Ali-16"
                                className='transition-all duration-150 hover:text-(--color-secondary)'
                            >
                                <i className="bi bi-github"></i>
                            </a>
                            <a
                                target='_blank'
                                href="https://www.linkedin.com/in/muhammad-ali18/"
                                className='transition-all duration-150 hover:text-(--color-secondary)'
                            >
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a
                                target='_blank'
                                href="https://www.instagram.com/m.ali._.raza/"
                                className='transition-all duration-150 hover:text-(--color-secondary)'
                            >
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a
                                target='_blank'
                                href="https://www.facebook.com/people/%D9%85%D8%AD%D9%85%D8%AF-%D8%B9%D9%84%DB%8C-%D8%B1%D8%B6%D8%A7/100086266104286/"
                                className='transition-all duration-150 hover:text-(--color-secondary)'
                            >
                                <i className="bi bi-facebook"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="copyright-txt text-center pt-4">
                    © 2025 Ali Raza — All Rights Reserved.
                </div>
            </div>
        </section>
    )
}

export default Footer