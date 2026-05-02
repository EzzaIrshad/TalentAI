import Image from 'next/image'
import { motion } from 'motion/react'

interface FeatureCardProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    index?: number;
}

const FeaturesCard = ({ imgSrc, imgAlt, title, index = 0 }: FeatureCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className='group bg-gray-100 max-h-75 gap-2 overflow-hidden rounded-xl pl-5 pt-5 border flex flex-col justify-between border-gray-100 shadow-sm transition-all duration-500 hover:bg-gray-700'
        >
            <h3 className='text-lg md:text-xl font-semibold text-gray-900 group-hover:text-white'>{title}</h3>

            <Image
                src={imgSrc}
                alt={imgAlt}
                width={400}
                height={200}
                className='w-full h-auto object-contain'
            />

        </motion.div>
    )
}

export default FeaturesCard
