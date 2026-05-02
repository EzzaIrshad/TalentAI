"use client";
import { motion } from "motion/react"
import TitleBadge from "@/ui/components/badge/title-badge"
import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import { BASE_PATH } from "@/lib/constants";

const ContactInfo = () => {
    return (

        <section className="section-container pt-25 pb-20 flex max-lg:items-end">

            {/* left content */}
            <div className="flex flex-col items-start justify-start w-full gap-3">
                {/* Header Section */}
                {/* Tag / Badge */}
                <div className="w-fit">
                    <TitleBadge text="Let's Build Something Together" />
                </div>
                {/* Title */}
                <h1 className="text-[clamp(26px,3vw,45px)] font-medium max-w-187.5">
                    We&apos;d love to learn about your goals. <br className="max-sm:hidden"/> Visit our office or connect online
                </h1>

                {/* call widget*/}
                <motion.div
                    initial={{ opacity: 0, x: 150 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="bg-white flex rounded-2xl items-center justify-start w-full gap-4 py-3 md:py-6 px-4.5 md:px-8 mt-10">
                    <div className="flex items-center justify-center size-10.5 md:size-13.5 rounded-full bg-[linear-gradient(#4d4d4d,#000)] p-2.5">
                        <Phone className="text-white" />
                    </div>
                    <div>
                        <p className="text-muted-foreground font-medium text-lg 2xl:text-2xl">Call us at</p>
                        <p className="text-sm lg:text-lg 2xl:text-xl font-medium">(+92) 3110462772</p>
                    </div>
                </motion.div>

                {/* email widget */}
                <motion.div
                    initial={{ opacity: 0, x: 150 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                    className="bg-white flex rounded-2xl items-center justify-start w-full gap-4 py-3 md:py-6 px-4.5 md:px-8 lg:ml-[15%]"
                >
                    <div className="flex items-center justify-center size-10.5 md:size-13.5 rounded-full bg-[linear-gradient(#4d4d4d,#000)] p-2.5">
                        <Mail className="text-white" />
                    </div>
                    <div>
                        <p className="text-muted-foreground font-medium text-lg 2xl:text-2xl">Email us on</p>
                        <p className="text-sm lg:text-lg 2xl:text-xl font-medium">info@paandaaa.com</p>
                    </div>
                </motion.div>

                {/* address widget */}
                <motion.div
                    initial={{ opacity: 0, x: 150 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
                    className="bg-white flex rounded-2xl items-center justify-start w-full gap-4 py-3 md:py-6 px-4.5 md:px-8 lg:ml-[35%]"
                >
                    <div className="flex items-center justify-center size-10.5 md:size-13.5 rounded-full bg-[linear-gradient(#4d4d4d,#000)] p-2.5">
                        <MapPin className="text-white" />
                    </div>
                    <div>
                        <p className="text-muted-foreground font-medium text-lg 2xl:text-2xl">Address</p>
                        <p className="text-sm lg:text-lg 2xl:text-xl font-medium">Multan, Pakistan</p>
                    </div>
            </motion.div>

        </div>

            {/* right image */ }
    <div className="max-md:hidden w-fit shrink-0 mt-2 z-20">
        <Image
            src={`${BASE_PATH}/assets/images/contact-banner.jpg`}
            alt="Banner image"
            width={424}
            height={600}
            className="rounded-xl object-cover h-103.5 lg:h-150 w-auto"
        />
    </div>
        </section >
    )
}

export default ContactInfo;