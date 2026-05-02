import AboutTrust from "@/ui/sections/about/about-trust";
import AboutHero from "@/ui/sections/hero/about-hero";
import JobProcess from "@/ui/sections/process/job-process";
import Features from "@/ui/sections/services/features";
import Faqs from "@/ui/sections/testimonials/faqs";
import Newsletter from "@/ui/sections/testimonials/newsletter";
import Testimonials from "@/ui/sections/testimonials/testimonials";

export default function AboutPage() {
  return (
    <>
    <AboutHero />
    <AboutTrust />
    <JobProcess />
    <Features />
    <Testimonials />
    <Faqs />
    <Newsletter />
    </>
  );
}