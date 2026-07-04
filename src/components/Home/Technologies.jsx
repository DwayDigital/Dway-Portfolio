import {
    FaReact,
    FaNodeJs,
    FaJava,
    FaDocker,
    FaGithub,
    FaGitAlt,
    FaAws,
} from "react-icons/fa";

import {
    SiExpress,
    SiMongodb,
    SiMysql,
    SiSpringboot,
    SiFlutter,
    SiTailwindcss,
    SiFirebase,
    SiPostman,
} from "react-icons/si";

const technologies = [
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
    { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
    { name: "Java", icon: <FaJava />, color: "text-orange-500" },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-500" },
    { name: "Flutter", icon: <SiFlutter />, color: "text-sky-400" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-300" },
    { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-400" },
    { name: "Docker", icon: <FaDocker />, color: "text-blue-400" },
    { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
    { name: "GitHub", icon: <FaGithub />, color: "text-white" },
    { name: "AWS", icon: <FaAws />, color: "text-orange-400" },
    { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
];

function Technologies() {
    return (
        <section className="py-12 bg-[#030712]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">

                    <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
                        Technologies
                    </p>

                    <h2 className="text-5xl font-bold mt-4 text-white">
                        Built Using Modern Technologies
                    </h2>

                    <p className="text-slate-400 mt-6 max-w-3xl mx-auto leading-8">
                        We leverage the latest technologies and industry best practices
                        to deliver secure, scalable and high-performance digital products.
                    </p>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-20">

                    {technologies.map((tech) => (

                        <div
                            key={tech.name}
                            className="group rounded-2xl
                         bg-slate-900
                         border border-slate-800
                         p-8
                         hover:border-cyan-400
                         hover:-translate-y-2
                         transition-all duration-300"
                        >

                            <div className={`text-5xl ${tech.color} group-hover:scale-110 transition`}>
                                {tech.icon}
                            </div>

                            <h3 className="text-white font-semibold text-lg mt-6">
                                {tech.name}
                            </h3>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Technologies;