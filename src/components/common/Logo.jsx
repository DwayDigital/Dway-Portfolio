import logo from "../../assets/logo/Logo/Dway_Logo_main.png";
import { company } from "../../constants/siteData";

function Logo() {
    return (
        <div className="flex items-center gap-3 cursor-pointer">
            <img
                src={logo}
                alt={company.name}
                className="w-12 h-12 object-contain"
            />

            <h2 className="text-2xl font-bold text-white">
                {company.name}
            </h2>
        </div>
    );
}

export default Logo;