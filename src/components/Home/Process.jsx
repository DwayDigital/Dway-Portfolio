import {
    FaComments,
    FaPencilRuler,
    FaCode,
    FaVial,
    FaRocket,
    FaHeadset,
} from "react-icons/fa";

const process = [
    {
        step: "01",
        icon: <FaComments />,
        title: "Discovery",
        description:
            "We understand your business goals, audience, project scope, and technical requirements before writing a single line of code.",
    },
    {
        step: "02",
        icon: <FaPencilRuler />,
        title: "UI / UX Design",
        description:
            "Beautiful wireframes and modern interfaces are crafted to provide the best user experience and brand consistency.",
    },
    {
        step: "03",
        icon: <FaCode />,
        title: "Development",
        description:
            "Our developers build scalable, secure, and high-performance applications using modern technologies.",
    },
    {
        step: "04",
        icon: <FaVial />,
        title: "Testing",
        description:
            "Every feature is carefully tested across devices and browsers to ensure reliability and exceptional quality.",
    },
    {
        step: "05",
        icon: <FaRocket />,
        title: "Launch",
        description:
            "Deployment, optimization, SEO setup, and performance tuning ensure a successful product launch.",
    },
    {
        step: "06",
        icon: <FaHeadset />,
        title: "Support",
        description:
            "After launch, we continue supporting your product with updates, maintenance, and future improvements.",
    },
];

function Process() {
    return (
        <section className="relative bg-[#030712] py-16 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm tracking-wide text-cyan-400">
                        OUR PROCESS
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
                        From Idea
                        <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            To Successful Product
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        Every successful project follows a structured process that ensures
                        quality, transparency, and timely delivery.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative mt-20">
                    {/* Center Line */}
                    <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 lg:block"></div>

                    <div className="space-y-16">
                        {process.map((item, index) => (
                            <div
                                key={item.step}
                                className={`flex flex-col items-center gap-8 lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Card */}
                                <div className="w-full lg:w-5/12">
                                    <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-2xl text-white shadow-lg shadow-cyan-500/20">
                                            {item.icon}
                                        </div>

                                        <h3 className="mt-6 text-2xl font-semibold text-white">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 leading-7 text-slate-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Step Circle */}
                                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-gradient-to-br from-blue-600 to-cyan-500 text-2xl font-bold text-white shadow-[0_0_40px_rgba(6,182,212,0.35)]">
                                    {item.step}
                                </div>

                                {/* Empty Side */}
                                <div className="hidden lg:block lg:w-5/12"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Process;