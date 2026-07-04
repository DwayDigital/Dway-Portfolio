import {
    FaArrowRight,
    FaExternalLinkAlt,
    FaGithub,
} from "react-icons/fa";

const featuredProject = {
    title: "Dway Digital Agency Website",
    category: "Featured Project",
    description:
        "A premium agency website designed with modern UI/UX principles, glassmorphism, responsive layouts, and smooth user experience.",
    image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    tech: ["React", "Tailwind", "Framer Motion", "Node.js"],
};

const projects = [
    {
        title: "Room Finder Platform",
        image:
            "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800",
        tech: ["React", "Express", "MongoDB"],
    },
    {
        title: "Restaurant Ordering App",
        image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
        tech: ["Flutter", "Firebase"],
    },
    {
        title: "Enterprise Dashboard",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        tech: ["React", "Spring Boot", "MySQL"],
    },
];

function PortfolioPreview() {
    return (
        <section className="relative bg-[#030712] py-16 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm tracking-wide text-cyan-400">
                        OUR PORTFOLIO
                    </span>

                    <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
                        Projects That Speak
                        <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            For Themselves
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-slate-400 leading-8">
                        Every project is crafted with attention to detail, performance,
                        scalability, and exceptional user experience.
                    </p>
                </div>

                {/* Featured Project */}
                <div className="group mt-20 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

                    <div className="grid lg:grid-cols-2">

                        {/* Image */}
                        <div className="overflow-hidden">
                            <img
                                src={featuredProject.image}
                                alt={featuredProject.title}
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-10 lg:p-14">

                            <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                                {featuredProject.category}
                            </span>

                            <h3 className="mt-6 text-4xl font-bold text-white">
                                {featuredProject.title}
                            </h3>

                            <p className="mt-6 text-slate-400 leading-8">
                                {featuredProject.description}
                            </p>

                            {/* Tech */}
                            <div className="mt-8 flex flex-wrap gap-3">
                                {featuredProject.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="mt-10 flex flex-wrap gap-4">

                                <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105">
                                    View Case Study
                                    <FaArrowRight />
                                </button>

                                <button className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-white transition hover:border-cyan-400">
                                    Live Demo
                                    <FaExternalLinkAlt />
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Other Projects */}
                <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {projects.map((project) => (

                        <div
                            key={project.title}
                            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]"
                        >

                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-8">

                                <h3 className="text-2xl font-semibold text-white">
                                    {project.title}
                                </h3>

                                <div className="mt-6 flex flex-wrap gap-2">

                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}

                                </div>

                                <div className="mt-8 flex justify-between">

                                    <button className="flex items-center gap-2 text-cyan-400 transition hover:gap-3">
                                        View Project
                                        <FaArrowRight />
                                    </button>

                                    <FaGithub className="cursor-pointer text-xl text-slate-400 transition hover:text-white" />

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">

                    <button className="rounded-2xl border border-cyan-400/20 bg-white/5 px-8 py-4 text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]">
                        View Complete Portfolio
                    </button>

                </div>

            </div>
        </section>
    );
}

export default PortfolioPreview;