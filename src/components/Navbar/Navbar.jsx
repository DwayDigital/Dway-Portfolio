import { navLinks } from "../../utils/navigation";
import Logo from "../common/Logo";

function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-6 py-5">

                <nav
                    className="
                    flex
                    items-center
                    justify-between

                    rounded-2xl

                    border
                    border-white/10

                    bg-white/5

                    backdrop-blur-xl

                    px-8

                    py-4
                "
                >

                    <Logo />

                    <ul className="hidden md:flex items-center gap-10">

                        {navLinks.map((link) => (

                            <li
                                key={link.id}
                                className="
                                text-gray-300
                                hover:text-[#C89B3C]
                                transition
                                duration-300
                                cursor-pointer
                            "
                            >

                                {link.title}

                            </li>

                        ))}

                    </ul>

                    <button
                        className="
                        hidden
                        md:block

                        bg-[#0E6B72]

                        hover:bg-[#17848D]

                        px-6

                        py-3

                        rounded-xl

                        transition

                        duration-300
                    "
                    >
                        Get Started
                    </button>

                </nav>

            </div>
        </header>
    );
}

export default Navbar;