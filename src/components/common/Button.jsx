function Button({ children }) {
    return (
        <button className="bg-[#0E6B72] hover:bg-[#17848D] text-white px-6 py-3 rounded-xl transition duration-300">
            {children}
        </button>
    );
}

export default Button;