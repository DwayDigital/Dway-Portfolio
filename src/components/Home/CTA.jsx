import {
    FaArrowRight,
    FaPhoneAlt,
    FaCheckCircle,
} from "react-icons/fa";

function CTA() {
    return (
        <section className="relative overflow-hidden bg-[#030712] py-16">
            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl">
                    {/* Decorative Gradient */}
                    <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />
                    <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

                    <div className="relative px-8 py-20 text-center md:px-16">
                        {/* Badge */}
                        <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm tracking-wide text-cyan-400">
                            LET'S BUILD SOMETHING AMAZING
                        </span>

                        {/* Heading */}
                        <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
                            Ready To Transform
                            <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Your Digital Presence?
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
                            Whether you're launching a startup, scaling your business, or
                            modernizing your existing platform, Dway Digital is ready to
                            design and develop solutions that drive measurable results.
                        </p>

                        {/* Buttons */}
                        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
                            <button className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(6,182,212,0.35)]">
                                Start Your Project
                                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </button>

                            <button className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-white/10">
                                <FaPhoneAlt />
                                Schedule a Call
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
                            <div className="flex items-center gap-2">
                                <FaCheckCircle className="text-cyan-400" />
                                Free Consultation
                            </div>

                            <div className="flex items-center gap-2">
                                <FaCheckCircle className="text-cyan-400" />
                                Transparent Pricing
                            </div>

                            <div className="flex items-center gap-2">
                                <FaCheckCircle className="text-cyan-400" />
                                Fast Project Delivery
                            </div>

                            <div className="flex items-center gap-2">
                                <FaCheckCircle className="text-cyan-400" />
                                Long-Term Support
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTA;