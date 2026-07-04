import {
    FaArrowUp,
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt,
} from "react-icons/fa";

import Logo from "./Logo";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative overflow-hidden bg-[#030712] border-t border-white/10">

            {/* Background Glow */}
            <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-6 py-20">

                {/* Top Grid */}
                <div className="grid gap-14 lg:grid-cols-12">

                    {/* Company */}
                    <div className="lg:col-span-5">

                        <Logo />

                        <p className="mt-6 max-w-md leading-8 text-slate-400">
                            Dway Digital is a modern software agency delivering premium
                            websites, mobile applications, desktop software, UI/UX design,
                            and scalable digital solutions for startups and businesses.
                        </p>

                        <div className="mt-8 flex gap-4">

                            {[
                                FaLinkedinIn,
                                FaGithub,
                                FaInstagram,
                                FaFacebookF,
                            ].map((Icon, index) => (
                                <button
                                    key={index}
                                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]"
                                >
                                    <Icon />
                                </button>
                            ))}

                        </div>

                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">

                        <h3 className="text-lg font-semibold text-white">
                            Quick Links
                        </h3>

                        <ul className="mt-6 space-y-4 text-slate-400">

                            {[
                                "Home",
                                "About",
                                "Services",
                                "Portfolio",
                                "Contact",
                            ].map((item) => (
                                <li key={item}>
                                    <button className="transition hover:text-cyan-400">
                                        {item}
                                    </button>
                                </li>
                            ))}

                        </ul>

                    </div>

                    {/* Services */}
                    <div className="lg:col-span-2">

                        <h3 className="text-lg font-semibold text-white">
                            Services
                        </h3>

                        <ul className="mt-6 space-y-4 text-slate-400">

                            {[
                                "Website Development",
                                "Mobile Apps",
                                "Desktop Software",
                                "UI / UX Design",
                                "Backend APIs",
                            ].map((item) => (
                                <li key={item}>
                                    <button className="transition hover:text-cyan-400">
                                        {item}
                                    </button>
                                </li>
                            ))}

                        </ul>

                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-3">

                        <h3 className="text-lg font-semibold text-white">
                            Contact
                        </h3>

                        <div className="mt-6 space-y-5">

                            <div className="flex items-start gap-3 text-slate-400">
                                <FaMapMarkerAlt className="mt-1 text-cyan-400" />
                                <span>Pune, Maharashtra, India</span>
                            </div>

                            <div className="flex items-start gap-3 text-slate-400">
                                <FaEnvelope className="mt-1 text-cyan-400" />
                                <span>contact@dwaydigital.com</span>
                            </div>

                            <div className="flex items-start gap-3 text-slate-400">
                                <FaPhoneAlt className="mt-1 text-cyan-400" />
                                <span>+91 9699277785</span>
                            </div>

                        </div>

                    </div>

                </div>

                {/* Divider */}
                <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Bottom */}
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

                    <p className="text-center text-sm text-slate-500">
                        © {new Date().getFullYear()} Dway Digital. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 text-sm text-slate-400">
                        <button className="transition hover:text-cyan-400">
                            Privacy Policy
                        </button>

                        <button className="transition hover:text-cyan-400">
                            Terms of Service
                        </button>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]"
                    >
                        <FaArrowUp />
                    </button>

                </div>

            </div>
        </footer>
    );
}

export default Footer;