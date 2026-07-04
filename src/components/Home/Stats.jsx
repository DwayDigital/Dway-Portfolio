import {
    FaProjectDiagram,
    FaSmile,
    FaLaptopCode,
    FaHeadset,
} from "react-icons/fa";

const stats = [
    {
        icon: <FaProjectDiagram size={35} />,
        number: "20+",
        title: "Projects Delivered",
        color: "from-blue-600 to-cyan-500",
    },
    {
        icon: <FaSmile size={35} />,
        number: "100%",
        title: "Client Satisfaction",
        color: "from-green-500 to-emerald-400",
    },
    {
        icon: <FaLaptopCode size={35} />,
        number: "10+",
        title: "Technologies",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: <FaHeadset size={35} />,
        number: "24/7",
        title: "Support",
        color: "from-orange-500 to-yellow-500",
    },
];

function Stats() {
    return (
        <section className="py-24 bg-[#030712]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {stats.map((item) => (

                        <div
                            key={item.title}
                            className="relative overflow-hidden rounded-3xl
                         bg-slate-900
                         border border-white/10
                         p-8
                         hover:-translate-y-3
                         hover:border-cyan-500
                         transition-all duration-500"
                        >

                            <div
                                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color}
                            flex items-center justify-center text-white`}
                            >
                                {item.icon}
                            </div>

                            <h2 className="text-5xl font-bold mt-8">
                                {item.number}
                            </h2>

                            <p className="text-slate-400 mt-3">
                                {item.title}
                            </p>

                            {/* Glow */}
                            <div
                                className={`absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-gradient-to-r ${item.color} blur-3xl opacity-20`}
                            ></div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Stats;