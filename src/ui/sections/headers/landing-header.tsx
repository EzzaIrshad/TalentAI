"use client"
import { routes } from "@/app/routes"
import PrimaryButton from "@/ui/components/buttons/primary-button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const navLinks = [
    { label: "About", href: routes.landing.about },
    { label: "Services", href: routes.landing.services },
    { label: "Contact", href: routes.landing.contact },
    { label: "Blog", href: routes.landing.blogs },
]

const LandingHeader = () => {
    const [stickyNav, setStickyNav] = useState(false);
    const [showMenu, setShowMenu] = useState(false)
    const pathname = usePathname()

    // Shared styles for the spans to keep the code DRY
    const genericLine = `h-0.5 w-full rounded-full bg-black transition ease-in-out duration-300`;

    useEffect(() => {
        const handleScroll = () => {
            setStickyNav(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        // Cleanup on unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => setShowMenu(false);

    return (
        <>
            <header className={`max-w-7xl w-full absolute top-0 left-1/2 -translate-x-1/2 mx-auto px-10 bg-white py-2.5 rounded-b-2xl md:rounded-2xl z-50 transition-all ease-out duration-700  ${stickyNav ? 'fixed top-0 w-full box-border bg-white shadow-[5px_3px_40px_rgba(0,72,88,0.1)] animate-smooth-nav' : 'bg-transparent'}`}>
                <div className="flex items-center justify-between w-full my-3">

                    {/* Logo */}
                    <Link href={routes.landing.root} className="font-bold flex text-2xl md:text-4xl leading-none">
                        TalentAI
                        <Image src="/assets/svg/black-sparkle.svg" alt="Sparkles" width={24} height={24} className="max-md:size-4" />
                    </Link>

                    {/* menu button */}
                    <div className="relative w-6 md:hidden">
                        <button

                            className="flex flex-col gap-1 w-full group focus:outline-none"
                            onClick={() => setShowMenu(!showMenu)}
                            aria-label="Toggle menu"
                        >
                            <span
                                className={`${genericLine} ${showMenu ? "translate-y-1.5 rotate-45" : ""}`} ></span>
                            <span
                                className={`${genericLine} ${showMenu ? "opacity-0 scale-0" : "opacity-100"}`} ></span>
                            <span
                                className={`${genericLine} ${showMenu ? "-translate-y-1.5 -rotate-45" : ""}`} ></span>
                        </button>
                    </div>


                    <nav className="max-lg:hidden flex items-center justify-start gap-12.5 text-[#5d5c5c] text-lg font-medium tracking-wide">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`${pathname === link.href && "font-semibold underline underline-offset-4 text-[#222]"}`}
                            >
                                {link.label}
                            </Link>

                        ))}
                    </nav>

                    <div className="max-md:hidden">
                        <PrimaryButton
                            text='Get Started Free'
                            bgColor="linear-gradient(270deg, #434343, #000)"
                            link={routes.landing.contact}
                        />
                    </div>
                </div>
            </header>

            {/* Mobile Dropdown Menu */}
            <div className={`fixed left-0 right-0 top-0 z-40 h-full w-full md:hidden ${showMenu ? "bg-black/40" : "bg-none"} `}>
                <div
                    className={` bg-white mx-auto transition-all duration-300 ease-in-out lg:hidden rounded-lg ${showMenu ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                        }`}
                    style={{
                        marginTop: '72px',
                        maxWidth: '1280px',
                        width: 'calc(100% - 1rem)'
                    }}
                >
                    <div className="flex flex-col py-6 space-y-4 px-3 text-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-xl text-muted-foreground py-2 border-b rounded-lg border-gray-200 ${pathname === link.href && "font-semibold bg-gray-100"}`}
                                onClick={closeMenu}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-4 mx-auto">
                            <PrimaryButton
                                text='Get Started Free'
                                bgColor="linear-gradient(270deg, #434343, #000)"
                                link={routes.landing.contact}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingHeader