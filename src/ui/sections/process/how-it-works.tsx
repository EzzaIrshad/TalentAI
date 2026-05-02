"use client";

import { JSX } from 'react';
import TitleBadge from '@/ui/components/badge/title-badge'
import { motion } from "motion/react"


const Workflow = () => {
    const icon1 = <svg className='size-12 mb-4' viewBox="0 0 24 24" fill="none"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path d="M2 12C2 6.47715 6.47715 2 12 2C17.0667 2 21.2533 5.76811 21.9103 10.6548C21.2825 10.0898 20.4894 9.80936 19.6975 9.8134C18.7462 6.45802 15.6602 4 12 4C7.58172 4 4 7.58172 4 12C4 15.7884 6.63333 18.9618 10.1694 19.7896L10.0616 20.2209C9.91097 20.8233 10.0348 21.4034 10.3337 21.8618C5.60402 21.0685 2 16.9551 2 12Z" fill="#ff6900"></path> <path d="M12 6C14.7715 6 17.1042 7.87917 17.7933 10.4329C17.6524 10.5346 17.5178 10.6489 17.391 10.7757L15.9964 12.1703C15.9988 12.1138 16 12.0571 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C12.0571 16 12.1138 15.9988 12.1703 15.9964L11.4886 16.6781C11.1492 17.0175 10.8807 17.4186 10.6963 17.858C8.00945 17.2627 6 14.866 6 12C6 8.68629 8.68629 6 12 6Z" fill="#ff6900"></path> <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#ff6900"></path> <path d="M12.2149 17.5434L18.1173 11.6409C19.0099 10.7483 20.4571 10.7483 21.3497 11.6409C22.2423 12.5336 22.2423 13.9808 21.3497 14.8734L15.4473 20.7758C15.1032 21.1199 14.672 21.3641 14.1998 21.4821L12.3691 21.9398C11.573 22.1388 10.8518 21.4177 11.0509 20.6215L11.5086 18.7908C11.6266 18.3187 11.8707 17.8875 12.2149 17.5434ZM19.1779 12.7016L13.2755 18.604C13.1236 18.7559 13.0159 18.9462 12.9638 19.1546L12.673 20.3177L13.836 20.0269C14.0444 19.9748 14.2347 19.867 14.3866 19.7151L20.2891 13.8127C20.5959 13.5059 20.5959 13.0084 20.2891 12.7016C19.9822 12.3948 19.4848 12.3948 19.1779 12.7016Z" fill="#ff6900"></path> </g></svg>;

    const icon2 = <svg xmlns="http://www.w3.org/2000/svg" className='size-12 mb-4' fill="#ff6900" viewBox="0 0 24 24"><path d="m10.5 5 1-.67 1 .67-.33-1.17.83-.71L12 3l-.5-1-.5 1-1 .12.83.71zm9.83 8.67L19.5 12l-.83 1.67-1.67.21 1.39 1.18-.56 1.94 1.67-1.11L21.17 17l-.56-1.94L22 13.88zM4.83 9 6.5 7.89 8.17 9l-.56-1.95L9 5.88l-1.67-.21L6.5 4l-.83 1.67L4 5.88l1.39 1.17zm13.88-6.71a.996.996 0 0 0-1.41 0l-15.01 15a.996.996 0 0 0 0 1.41l3 3c.2.2.45.29.71.29s.51-.1.71-.29l15-15a.996.996 0 0 0 0-1.41zM16.5 9.08l-1.59-1.59L18 4.4l1.59 1.59z"></path></svg>;

    const icon3 = <svg className='size-12 mb-4' viewBox="0 0 24 24" fill="none" stroke="#ff6900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m9 15 2 2 4-4" stroke="#ff6900"></path></svg>;

    const renderProcessCard = (step: number, icon: JSX.Element, title: string, description: string, delay: number) => (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            viewport={{ once: true }}
            className={`relative flex flex-col items-center text-center bg-white border border-black/10
             rounded-[15px] md:max-w-85 lg:max-w-87.5 w-full px-3.5 2xl:px-7 pt-10 2xl:pt-11 pb-7.5 2xl:pb-9 ${step === 2 ? 'shadow-xl bg-linear-to-b from-white to-gray-50 scale-105' : ''}`}
        >
            <div className="inline-flex justify-center items-center mb-7.5 sm:mb-10 bg-linear-to-br from-gray-900 to-gray-600 border border-black/30 rounded-full py-1.75 px-5.5 whitespace-nowrap relative transition-all duration-300">
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rotate-45 size-3.75 bg-linear-to-r from-gray-700 to-gray-600 rounded-br-[4px] border-t-0 border-l-0 border border-black/30 transition-all duration-300" />
                <span className='text-[13px] font-medium tracking-[0.51px] text-white leading-none transition-all duration-300'>Phase {String(step).padStart(2, '0')}</span>
            </div>
            {icon}
            <h3 className='font-semibold text-[22px] sm:text-2xl mb-5 sm:mb-6'>{title}</h3>
            <p className='text-black/60 leading-6.5'>{description}</p>
        </motion.div>
    );

    const flowSvgForward = <svg className="max-[1200px]:hidden xl:min-w-32.5 2xl:min-w-41 mt-11" width="181" height="124" viewBox="0 0 181 124" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" id="theMotionPath11" d="M0 123H67.5C84.0685 123 97.5 109.569 97.5 93V31C97.5 14.4315 110.931 1 127.5 1H181" stroke="black"></path><path d="M0 0 L13 0" stroke="url(#paint0_linear_354_7441)" strokeLinecap="round" strokeWidth="2"><animateMotion dur="4s" begin="0s" repeatCount="indefinite" rotate="auto"><mpath href="#theMotionPath11"></mpath></animateMotion></path><defs><linearGradient id="paint0_linear_354_7441" x1="10" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse"><stop stopColor="var(--secondary-color)" offset="0"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></linearGradient></defs></svg>;

    const flowSvgReverse = <svg className="max-[1200px]:hidden xl:min-w-32.5 2xl:min-w-41 mt-11" width="181" height="124" viewBox="0 0 181 124" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" id="theMotionPath12" d="M181 123H113.5C96.9315 123 83.5 109.569 83.5 93V31C83.5 14.4315 70.0685 1 53.5 1H0" stroke="black"></path><path d="M0 0 L13 0" stroke="url(#paint0_linear_354_7442)" strokeLinecap="round" strokeWidth="2"><animateMotion dur="4s" begin="0s" repeatCount="indefinite" rotate="auto" keyPoints="1;0" keyTimes="0;1"><mpath href="#theMotionPath12"></mpath></animateMotion></path><defs><linearGradient id="paint0_linear_354_7442" x1="10" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse"><stop stopColor="var(--secondary-color)" offset="0"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></linearGradient></defs></svg>;

    return (
        <section className='section-container py-10 lg:py-20'>
            <div className='flex flex-col gap-10'>
                <div className="flex flex-col items-center md:px-13.5 md:gap-4.5">
                    <TitleBadge text="How It Works" />
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="text-[clamp(26px,4vw,42px)] text-center max-w-175 font-medium"
                    >
                        From Input to Results in Seconds
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                        className="text-sm lg:text-md 2xl:text-lg text-center max-w-md mb-2.5 text-muted-foreground">
                        Generate job-ready content using a simple AI-powered workflow.
                    </motion.p>
                </div>

                <div className="w-full px-3">
                    <div className='flex max-md:gap-6 md:max-lg:gap-4 max-lg:flex-wrap lg:max-xl:gap-6 2xl:gap-6 items-start'>
                        <div className="flex max-md:w-full gap-1 2xl:gap-6 min-[1200px]:mt-7.5">
                            {renderProcessCard(1, icon1, "Define Your Target Role", "Let the AI understand your experience and career direction.", 0.1)}
                            {flowSvgForward}
                        </div>

                        <div className="flex max-md:w-full ">
                            {renderProcessCard(2, icon2, "AI Crafts Your Content", "Instantly generate tailored resumes, cover letters, and insights.", 0.3)}
                        </div>

                        <div className="flex max-md:w-full gap-1 2xl:gap-6 min-[1200px]:mt-7.5">
                            {flowSvgReverse}
                            {renderProcessCard(3, icon3, "Refine, Export, and Apply", "Fine-tune your content, download it, and apply with confidence.", 0.5)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Workflow