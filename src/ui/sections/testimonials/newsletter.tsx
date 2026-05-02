import TitleBadge from '@/ui/components/badge/title-badge'
import Image from 'next/image'
import { newsletterBadgeData } from '@/constants/newsletter-badge-data'
import PrimaryButton from '@/ui/components/buttons/primary-button'



const Newsletter = () => {

    const hiddenBadge = [1, 2, 5, 6, 8]

    return (
        <section className="section-container py-10 md:py-15 lg:py-25">
            <div className="flex max-lg:flex-col gap-4 md:gap-8 py-16 md:py-25 sm:px-5 md:px-15 bg-white rounded-2xl">
                <div className="relative w-full md:w-162 h-62.5 shrink-0 bg-cover bg-position-[100%] bg-[url(/assets/images/Hero-Bg-Image.png)]">
                    <div className="absolute sm:-left-[3%] flex justify-start items-center gap-2 sm:gap-5 lg:gap-15 flex-wrap">
                        {
                            newsletterBadgeData.map((item, idx) => (
                                <div key={idx} className={`flex items-center justify-center animate-wiggle 
                                                            ${hiddenBadge.includes(idx) && "max-sm:opacity-0"}
                                                            ${(idx === 3 || idx === 4 || idx === 5) && "flex-row-reverse"}`}>
                                    <Image
                                        src={item.companyImg}
                                        width={160}
                                        height={75}
                                        alt='company'
                                        className='object-contain w-30 md:w-40 h-auto'
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="flex flex-col justify-between gap-8 w-full">
                    <div className="flex flex-col gap-2 items-start">
                        {/* Tag / Badge */}
                        <TitleBadge text="Hire smarter. Grow Faster." />
                        {/* Title */}
                        <h1 className="text-[clamp(26px,3vw,42px)] font-medium">
                            Everything You Need to Land Your Next Job
                        </h1>
                        
                        <p className="text-sm md:text-lg max-w-xl mb-2 text-muted-foreground">
                            From resumes to interviews, our AI helps you every step of the way.
                        </p>
                    </div>

                        {/* Button */}
                        <PrimaryButton
                            text="Get Started Free"
                            bgColor="linear-gradient(270deg, #434343, #000)"
                            link="/contact"
                        />
                </div>
            </div>
        </section>
    )
}

export default Newsletter