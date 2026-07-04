import {
    FaGlobe,
    FaMobileAlt,
    FaDesktop,
    FaPaintBrush,
    FaServer,
    FaTools,
    FaArrowRight,
} from "react-icons/fa";

const services = [
    {
        icon: <FaGlobe />,
        title: "Website Development",
        description:
            "Modern, responsive, lightning-fast websites built with the latest technologies for businesses and startups.",
    },
    {
        icon: <FaMobileAlt />,
        title: "Mobile App Development",
        description:
            "Cross-platform Android & iOS applications developed using Flutter with premium user experiences.",
    },
    {
        icon: <FaDesktop />,
        title: "Desktop Applications",
        description:
            "Scalable desktop software for business automation, management systems, and enterprise workflows.",
    },
    {
        icon: <FaPaintBrush />,
        title: "UI / UX Design",
        description:
            "Clean, intuitive, and visually stunning interfaces designed to maximize engagement and usability.",
    },
    {
        icon: <FaServer />,
        title: "Backend & API Development",
        description:
            "Secure REST APIs, authentication systems, databases, cloud integrations, and scalable backend architecture.",
    },
    {
        icon: <FaTools />,
        title: "Maintenance & Support",
        description:
            "Continuous updates, performance optimization, bug fixing, monitoring, and long-term technical support.",
    },
];

function Services() {
    return (
        <section className="relative bg-[#030712] py-16 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-32 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[150px]" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm tracking-wide">
                        OUR SERVICES
                    </span>

                    <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
                        Building Digital Experiences
                        <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            That Drive Growth
                        </span>
                    </h2>

                    <p className="mt-6 text-slate-400 text-lg leading-relaxed">
                        We transform ideas into high-performance digital products using
                        modern technologies, scalable architecture, and exceptional user
                        experiences.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-transparent hover:from-blue-200 hover:via-cyan-300 transition-all duration-500"
                        >
                            <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:border-cyan-400/40">
                                {/* Glow */}
                                <div className="absolute -top-10 -right-10 w-36 h-36 bg-cyan-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                                {/* Icon */}
                                <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 text-white text-2xl shadow-lg shadow-cyan-500/20">
                                    {service.icon}
                                </div>

                                {/* Content */}
                                <h3 className="mt-8 text-2xl font-semibold text-white">
                                    {service.title}
                                </h3>

                                <p className="mt-4 text-slate-400 leading-7 text-white">
                                    {service.description}
                                </p>

                                {/* Arrow */}
                                <div className="mt-8 flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-4 transition-all duration-300">
                                    Learn More
                                    <FaArrowRight />
                                </div>

                                {/* Bottom Border Animation */}
                                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-500"></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;