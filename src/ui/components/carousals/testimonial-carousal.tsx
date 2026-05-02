"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/ui/components/shadcn/carousel"
import Autoplay from "embla-carousel-autoplay"
import { testimonialData } from "@/constants/testimonial-data"
import Image from "next/image"

const TestimonialCarousal = () => {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 4000,
                }),
                
            ]}
            
            opts={{
                align: "start",
                loop: true
            }}
            className="w-full"
        >
            <CarouselContent>
                {testimonialData.map((testimonial, index) => (
                    <CarouselItem key={index} className="lg:basis-1/4 md:basis-1/2">

                        <div className="bg-white border border-[#e7e6e6] rounded-2xl flex flex-col min-h-80 justify-between p-5 xl:p-8">
                            <div className="flex gap-0.5">
                                {
                                    Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                                        <svg key={starIndex} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#E5BE37" stroke="#E5BE37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" /></svg>
                                    ))
                                }
                            </div>
                            <p className="text-muted-foreground text-base 2xl:text-lg max-112.5 mt-4.5 mb-3">
                                “{testimonial.quote}”
                            </p>
                            <div className="flex items-center gap-5">
                                <div className="rounded-full overflow-hidden">
                                    <Image
                                        src={testimonial.image}
                                        alt={`user ${index + 1}`}
                                        width={48}
                                        height={48}
                                        className="object-cover w-12 h-12"
                                    />
                                </div>
                                <div className=" mt-auto">
                                    <span className="text-lg font-medium block">{testimonial.name}</span>
                                    <span className="text-muted-foreground text-sm">{testimonial.position}</span>
                                </div>
                            </div>

                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="max-sm:hidden -top-[50%] left-[1%] bg-[linear-gradient(#4d4d4d,#000)] size-10 *:text-white" />
            <CarouselNext className="max-sm:hidden -top-[50%] right-[1%] bg-[linear-gradient(#4d4d4d,#000)] size-10 *:text-white" />
        </Carousel>

    )
}

export default TestimonialCarousal