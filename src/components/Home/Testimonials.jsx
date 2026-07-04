import {
    FaQuoteLeft,
    FaStar,
} from "react-icons/fa";

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Startup Founder",
        company: "TechNova",
        initials: "RS",
        review:
            "Dway Digital completely transformed our online presence. The website is fast, beautiful, and helped us generate significantly more leads within weeks.",
    },
    {
        name: "Priya Patel",
        role: "Business Owner",
        company: "Urban Studio",
        initials: "PP",
        review:
            "Professional communication, clean code, and timely delivery. They understood our requirements perfectly and exceeded expectations.",
    },
    {
        name: "Amit Verma",
        role: "CEO",
        company: "FinEdge",
        initials: "AV",
        review:
            "The entire development process was transparent and smooth. We now have a scalable platform that's ready for future growth.",
    },
    {
        name: "Sneha Joshi",
        role: "Marketing Director",
        company: "BrightWave",
        initials: "SJ",
        review:
            "Outstanding UI/UX and attention to detail. Our customers love the new experience and engagement has noticeably improved.",
    },
];

function StarRating() {
    return (
        <div className="flex gap-1 text-yellow-400">
            {Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index} />
            ))}
        </div>
    );
}

function Testimonials() {
    const [featured, ...others] = testimonials;

    return (
        <section className="relative overflow-hidden bg-[#030712] py-16">
            {/* Background Glow */}
            <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm tracking-wide text-cyan-400">
                        TESTIMONIALS
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
                        Trusted By
                        <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            Businesses & Startups
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        We build long-term partnerships by delivering reliable digital
                        solutions that create measurable business value.
                    </p>
                </div>

                {/* Featured Testimonial */}
                <div className="group mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.18)] lg:p-14">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-4xl">
                            <FaQuoteLeft className="mb-6 text-5xl text-cyan-400/70" />

                            <p className="text-xl leading-9 text-slate-300">
                                "{featured.review}"
                            </p>

                            <div className="mt-8">
                                <StarRating />
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-2xl font-bold text-white shadow-lg shadow-cyan-500/30">
                                {featured.initials}
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-white">
                                    {featured.name}
                                </h3>

                                <p className="text-slate-400">
                                    {featured.role}
                                </p>

                                <p className="text-cyan-400">
                                    {featured.company}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Testimonials */}
                <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {others.map((item) => (
                        <div
                            key={item.name}
                            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]"
                        >
                            <FaQuoteLeft className="text-3xl text-cyan-400/60" />

                            <p className="mt-6 leading-8 text-slate-400">
                                "{item.review}"
                            </p>

                            <div className="mt-6">
                                <StarRating />
                            </div>

                            <div className="mt-8 flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 font-semibold text-white">
                                    {item.initials}
                                </div>

                                <div>
                                    <h3 className="font-semibold text-white">
                                        {item.name}
                                    </h3>

                                    <p className="text-sm text-slate-400">
                                        {item.role}
                                    </p>

                                    <p className="text-sm text-cyan-400">
                                        {item.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;