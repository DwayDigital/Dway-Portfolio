import { FaArrowRight, FaPlay } from "react-icons/fa";

function Hero() {
    return (
        <section className="relative pt-10 min-h-screen flex items-center overflow-hidden bg-slate-950">
            {/* Background Glow */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side */}
                    <div>

                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 text-sm font-semibold border border-blue-500/20">
                            🚀 Your Digital Growth Partner
                        </span>

                        <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                            Building
                            <span className="text-blue-500"> Websites</span>,
                            <br />

                            <span className="text-cyan-400">
                                Mobile Apps
                            </span>

                            &
                            <br />

                            Custom Software
                        </h1>

                        <p className="mt-8 text-lg text-slate-400 leading-8 max-w-xl">
                            At Dway Digital, we create fast, modern and scalable digital
                            solutions that help startups, businesses and entrepreneurs grow
                            online with confidence.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-5">

                            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition">
                                Start Your Project
                                <FaArrowRight />
                            </button>

                            <button className="border border-slate-700 hover:border-blue-500 px-8 py-4 rounded-xl flex items-center gap-3 transition">
                                <FaPlay />
                                View Portfolio
                            </button>

                        </div>

                        {/* Stats

                        <div className="grid grid-cols-3 gap-8 mt-14">

                            <div>

                                <h2 className="text-4xl font-bold text-blue-500">
                                    20+
                                </h2>

                                <p className="text-slate-400 mt-2">
                                    Projects
                                </p>

                            </div>

                            <div>

                                <h2 className="text-4xl font-bold text-cyan-400">
                                    10+
                                </h2>

                                <p className="text-slate-400 mt-2">
                                    Technologies
                                </p>

                            </div>

                            <div>

                                <h2 className="text-4xl font-bold text-green-400">
                                    100%
                                </h2>

                                <p className="text-slate-400 mt-2">
                                    Client Focus
                                </p>

                            </div>

                        </div> */}

                    </div>

                    {/* Right Side */}

                    <div className="relative">

                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

                            <img
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
                                alt="Developer"
                                className="rounded-2xl"
                            />

                            <div className="mt-8 grid grid-cols-2 gap-5">

                                <div className="bg-slate-800 rounded-xl p-5">

                                    <h3 className="text-blue-400 font-bold text-2xl">
                                        Website
                                    </h3>

                                    <p className="text-slate-400 mt-2">
                                        Modern & Responsive
                                    </p>

                                </div>

                                <div className="bg-slate-800 rounded-xl p-5">

                                    <h3 className="text-cyan-400 font-bold text-2xl">
                                        Mobile Apps
                                    </h3>

                                    <p className="text-slate-400 mt-2">
                                        Android & Flutter
                                    </p>

                                </div>

                                <div className="bg-slate-800 rounded-xl p-5">

                                    <h3 className="text-green-400 font-bold text-2xl">
                                        Desktop
                                    </h3>

                                    <p className="text-slate-400 mt-2">
                                        Windows Software
                                    </p>

                                </div>

                                <div className="bg-slate-800 rounded-xl p-5">

                                    <h3 className="text-purple-400 font-bold text-2xl">
                                        API
                                    </h3>

                                    <p className="text-slate-400 mt-2">
                                        Backend Solutions
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;