"use client"
import TitleBadge from '@/ui/components/badge/title-badge'
import FeaturesCard from '@/ui/components/cards/features-card'
import { featuresCardData } from '@/constants/features-card-data'
import { motion } from "motion/react"


const Features = () => {

    return (
        <section className='section-container py-10 lg:py-20'>
            <div className="flex flex-col gap-15">
                {/* Header */}
                <div className="flex flex-col items-center md:px-13.5 md:gap-4.5">
                    {/* Tag / Badge */}
                    <TitleBadge text="Powerful Features" />

                    {/* Title */}
                    <h1 className="text-[clamp(26px,4vw,42px)] text-center font-medium max-w-125">
                        Everything You Need to Get Hired Faster
                    </h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="text-sm text-md 2xl:text-lg text-center max-w-md mb-2.5 text-muted-foreground">
                            Powerful AI tools designed to simplify your job search and boost your chances of success.
                    </motion.p>
                </div>

                <div className='p-3 md:p-8 xl:p-12 rounded-2xl bg-white'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {featuresCardData.map((feature, index) => (
                            <FeaturesCard
                                key={feature.id}
                                imgSrc={feature.imgSrc}
                                imgAlt={feature.imgAlt}
                                title={feature.title}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features