import {
    FaRocket,
    FaShieldAlt,
    FaClock,
    FaCode,
    FaUsers,
    FaHeadset,
} from "react-icons/fa";

const features = [
    {
        icon: <FaRocket />,
        title: "Fast Delivery",
        description:
            "Efficient development workflows ensure your project is delivered on time without compromising quality.",
    },
    {
        icon: <FaShieldAlt />,
        title: "Quality Assurance",
        description:
            "Every product is thoroughly tested to ensure performance, security, and reliability.",
    },
    {
        icon: <FaClock />,
        title: "On-Time Commitment",
        description:
            "We value your deadlines and maintain transparent communication throughout development.",
    },
    {
        icon: <FaCode />,
        title: "Modern Technologies",
        description:
            "Built using React, Node.js, Flutter, Spring Boot, Docker, and other production-ready technologies.",
    },
    {
        icon: <FaUsers />,
        title: "Client-First Approach",
        description:
            "Your goals guide every design decision, ensuring solutions tailored to your business needs.",
    },
    {
        icon: <FaHeadset />,
        title: "Long-Term Support",
        description:
            "Our partnership continues after launch with updates, maintenance, and technical support.",
    },
];

function WhyChooseUs() {
    return (
        <section className="relative bg-[#030712] py-16 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[150px] rounded-full" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400 tracking-wide">
                        WHY CHOOSE US
                    </span>

                    <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
                        More Than Developers.
                        <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            Your Technology Partner.
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-slate-400 leading-8">
                        We don't just build applications—we build long-term digital
                        solutions that help businesses grow with confidence.
                    </p>
                </div>

                {/* Highlight Card */}
                <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 lg:p-14 text-center">
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 text-4xl shadow-lg shadow-cyan-500/30">
                        🚀
                    </div>

                    <h3 className="mt-8 text-3xl font-bold text-white">
                        Premium Digital Solutions for Modern Businesses
                    </h3>

                    <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8 text-lg">
                        From idea validation and UI/UX design to scalable development and
                        ongoing support, we deliver complete digital products engineered for
                        performance, reliability, and long-term success.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]"
                        >
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-2xl text-white shadow-lg shadow-cyan-500/20">
                                {feature.icon}
                            </div>

                            <h3 className="mt-6 text-2xl font-semibold text-white">
                                {feature.title}
                            </h3>

                            <p className="mt-4 text-slate-400 leading-7">
                                {feature.description}
                            </p>

                            <div className="mt-6 h-[2px] w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;