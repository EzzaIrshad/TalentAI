import HomeHero from "@/ui/sections/hero/home-hero";
import Workflow from "@/ui/sections/process/how-it-works";
import Features from "@/ui/sections/services/features";
import OurServices from "@/ui/sections/services/our-services";
import Faqs from "@/ui/sections/testimonials/faqs";
import Newsletter from "@/ui/sections/testimonials/newsletter";
import Pricing from "@/ui/sections/testimonials/pricing";
import Testimonials from "@/ui/sections/testimonials/testimonials";

export default function Home() {
    return (
        <>
            <HomeHero />
            {/* <HomeAbout /> */}
            <Features />
            {/* <JobProcess /> */}
            <Workflow />
            <OurServices />
            {/* <JobOpening /> */}
            <Pricing />
            <Testimonials />
            <Newsletter />
            <Faqs />
            {/* <OurBlogs /> */}
        </>
    );
}