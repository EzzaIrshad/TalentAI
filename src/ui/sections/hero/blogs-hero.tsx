"use client";

import { motion } from "motion/react"
import TitleBadge from '@/ui/components/badge/title-badge'

const BlogsHero = () => {
    return (
        <section className="section-container bg-white mt-18 py-10 md:py-25 rounded-2xl">

            {/* header */}
            <div className="flex flex-col items-center justify-start gap-4 md:px-13.5">
                {/* header badge */}
                <TitleBadge text="Blogs" />

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-[clamp(38px,5vw,62px)] leading-12 md:leading-19 text-center max-w-175 font-medium"
                >
                    Latest Stories & News
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                    className="text-sm md:text-lg text-center max-w-xl mb-2.5 text-muted-foreground">
                    Discover career insights, hiring trends, and expert guidance—all in one place.
                </motion.p>

            </div>
        </section>
    )
}

export default BlogsHero