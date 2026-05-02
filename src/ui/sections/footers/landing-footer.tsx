// "use client";
// import { routes } from '@/app/routes'
// import PrimaryButton from '@/ui/components/buttons/primary-button'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'

// const LandingFooter = () => {
//     const router = useRouter();
//     return (
//         <footer className='bg-primary py-12.5 px-5 md:px-7.5 lg:px-13.5'>
//             <div className="flex flex-col gap-4 section-container">

//                 {/* top links */}
//                 <div className="w-full flex max-lg:flex-col gap-6 items-center justify-between">
//                     <Link href={routes.landing.root} className="font-bold text-4xl text-white leading-none flex">
//                         TalentAI
//                         <Image
//                             src="/assets/svg/star.svg"
//                             alt="Sparkles"
//                             width={23}
//                             height={23}
//                         />
//                     </Link>
//                     <nav className="flex max-sm:flex-wrap items-center sm:h-7.5 font-medium justify-center sm:justify-start gap-x-4.5 gap-y-2.5 sm:gap-8 text-white/80 *:hover:text-white text-lg tracking-wide">
//                         <Link href={routes.landing.root}>Home</Link>
//                         <Link href={routes.landing.about}>About Us</Link>
//                         <Link href={routes.landing.services}>Services</Link>
//                         <Link href={routes.landing.blogs}>Blog</Link>
//                         <Link href={routes.landing.career}>Career</Link>
//                         <Link href={routes.landing.contact}>Contact</Link>
//                     </nav>
//                 </div>

//                 {/* middle section */}
//                 <div className='my-[8vh] flex flex-col gap-4 px-5 sm:px-7.5 md:px-5 lg:px-13.5 items-center'>
//                     <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 text-sm tracking-wide font-medium text-white">
//                         <Image
//                             src="/assets/svg/star.svg"
//                             alt="Sparkles"
//                             width={23}
//                             height={23}
//                         />
//                         Join Us Now
//                     </div>

//                     <h2 className='text-white text-[clamp(38px,5vw,62px)] text-center max-sm:mb-5 md:max-w-161.75 font-medium md:mt-4.5 sm:tracking-wide'>Ready to transform your career?</h2>

//                     <PrimaryButton
//                         text='Contact Us Now'
//                         bgColor='white'
//                         textColor='#1f1f1f'
//                         link={routes.landing.contact}
//                     />
//                 </div>

//                 {/* bottom copyright */}
//                 <div className='w-full text-center text-sm text-white'>© {new Date().getFullYear()} All rights reserved. Powered by ----</div>
//             </div>
//         </footer>
//     )
// }

// export default LandingFooter

"use client";
import { routes } from '@/app/routes'
import PrimaryButton from '@/ui/components/buttons/primary-button'
import Image from 'next/image'
import Link from 'next/link'

const linkStyle = "text-white/70 hover:text-white transition";

const LandingFooter = () => {
    return (
        <footer className='bg-primary pt-16 pb-5 px-5 md:px-7.5 lg:px-13.5'>
            <div className="section-container flex flex-col gap-12">

                {/* CTA SECTION */}
                <div className='flex flex-col items-center text-center gap-5 border-b border-white/10 pb-12'>
                    
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white">
                        <Image src="/assets/svg/star.svg" alt="Sparkles" width={18} height={18} />
                        Start Your Journey
                    </div>

                    <h2 className='text-white text-[clamp(36px,5vw,60px)] font-medium max-w-2xl'>
                        Start Building Your Future Today
                    </h2>

                    <PrimaryButton
                        text='Get Started Free'
                        bgColor='white'
                        textColor='#1f1f1f'
                        link={routes.landing.root}
                    />

                    <span className='text-white/50 text-sm'>
                        No credit card required
                    </span>
                </div>

                {/* FOOTER GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-white">

                    {/* BRAND */}
                    <div className="flex flex-col gap-4 mr-6">
                        <div className="flex items-center gap-1 text-2xl font-bold">
                            TalentAI
                            <Image src="/assets/svg/star.svg" alt="Sparkles" width={18} height={18} />
                        </div>

                        <p className="text-white/70 text-sm leading-relaxed text-justify">
                            AI-powered tools to help you build stronger applications and land your next job faster.
                        </p>
                    </div>

                    {/* PRODUCT */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold">Product</h4>
                        <Link href="#" className={linkStyle}>Features</Link>
                        <Link href="#" className={linkStyle}>Pricing</Link>
                        <Link href="#" className={linkStyle}>How It Works</Link>
                        <Link href="#" className={linkStyle}>Testimonials</Link>
                    </div>

                    {/* COMPANY */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold">Company</h4>
                        <Link href={routes.landing.about} className={linkStyle}>About</Link>
                        <Link href={routes.landing.blogs} className={linkStyle}>Blog</Link>
                        <Link href='/' className={linkStyle}>Careers</Link>
                        <Link href={routes.landing.contact} className={linkStyle}>Contact</Link>
                    </div>

                    {/* LEGAL */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold">Legal</h4>
                        <Link href="#" className={linkStyle}>Privacy Policy</Link>
                        <Link href="#" className={linkStyle}>Terms of Service</Link>
                        <Link href="#" className={linkStyle}>Cookies</Link>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className='text-center text-sm text-white/60 border-t border-white/10 pt-6'>
                    © {new Date().getFullYear()} TalentAI. All rights reserved.
                </div>

            </div>
        </footer>
    )
}

export default LandingFooter