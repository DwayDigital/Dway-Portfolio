// import { navLinks } from "../../utils/navigation";
// import Logo from "../common/Logo";

// function Navbar() {
//     return (
//         <header className="fixed top-0 left-0 w-full z-50">
//             <div className="max-w-7xl mx-auto px-6 py-4">

//                 <nav
//                     className="
//                     flex
//                     items-center
//                     justify-between

//                     rounded-2xl

//                     border
//                     border-white/10

//                     bg-white/5

//                     backdrop-blur-xl

//                     px-8

//                     py-5
//                 "
//                 >

//                     <Logo />

//                     <ul className="hidden md:flex items-center gap-10">

//                         {navLinks.map((link) => (

//                             <li
//                                 key={link.id}
//                                 className="
//                                 text-gray-300
//                                 hover:text-[#C89B3C]
//                                 transition
//                                 duration-300
//                                 cursor-pointer
//                             "
//                             >

//                                 {link.title}

//                             </li>

//                         ))}

//                     </ul>

//                     <button
//                         className="
//                         hidden
//                         md:block

//                         bg-[#0E6B72]

//                         hover:bg-[#17848D]

//                         px-6

//                         py-3

//                         rounded-xl

//                         transition

//                         duration-300
//                     "
//                     >
//                         Get Started
//                     </button>

//                 </nav>

//             </div>
//         </header>
//     );
// }

// export default Navbar;

import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Logo from "../common/Logo";
import { navLinks } from "../../utils/navigation";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-6 py-5">

                <nav className="flex items-center justify-between
                        bg-slate-900/70
                        backdrop-blur-2xl
                        border border-white/10
                        rounded-2xl
                        px-8
                        py-4
                        shadow-2xl">

                    <Logo />

                    {/* Desktop Menu */}

                    <ul className="hidden lg:flex items-center gap-10">

                        {navLinks.map((link) => (
                            <li
                                key={link.id}
                                className="relative text-slate-300 font-medium cursor-pointer
                           transition duration-300 hover:text-white group"
                            >
                                {link.title}

                                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>

                            </li>
                        ))}

                    </ul>

                    {/* CTA */}

                    <button className="hidden lg:block
                             bg-gradient-to-r
                             from-blue-600
                             to-cyan-500
                             px-6
                             py-3
                             rounded-xl
                             font-semibold
                             hover:scale-105
                             transition">

                        Let's Talk

                    </button>

                    {/* Mobile */}

                    <button
                        className="lg:hidden text-white text-3xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>

                </nav>

                {/* Mobile Menu */}

                {menuOpen && (

                    <div className="lg:hidden mt-3 rounded-2xl
                          bg-slate-900/95
                          backdrop-blur-xl
                          border border-white/10">

                        {navLinks.map((link) => (

                            <div
                                key={link.id}
                                className="px-8 py-5 border-b border-white/10 text-slate-300 hover:text-cyan-400 cursor-pointer"
                            >
                                {link.title}
                            </div>

                        ))}

                    </div>

                )}

            </div>
        </header>
    );
}

export default Navbar;