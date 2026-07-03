function Heading({ title, subtitle }) {
    return (
        <div className="mb-14 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
                {title}
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                {subtitle}
            </p>
        </div>
    );
}

export default Heading;