"use client";

import { motion } from "motion/react";
import TitleBadge from "@/ui/components/badge/title-badge"
import TestimonialCarousal from "@/ui/components/carousals/testimonial-carousal"

const Testimonials = () => {
    return (
        <section className='section-container py-10 lg:py-20'>
            <div className="flex flex-col gap-15 xl:gap-22">

                {/* Header */}
                <div className="flex flex-col items-center md:px-13.5 md:gap-4.5">
                    <TitleBadge text="Testimonials" />
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="text-[clamp(30px,4vw,42px)] text-center max-w-140 font-medium"
                    >
                        What Job Seekers Are Saying
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                        className="text-sm lg:text-md 2xl:text-lg text-center max-w-md my-2.5 text-muted-foreground">
                        See how TalentAI is helping users improve their job search.
                    </motion.p>
                    
                </div>

                {/* testimonial slider */}
                <TestimonialCarousal />
            </div>
        </section>
    )
}

export default Testimonials