const Footer = () => {
    return (
        <footer className="bg-gray-600 text-white py-6 mt-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="text-lg font-semibold">
                    Easy POS
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-400 transition">Home</a>
                    <a href="#" className="hover:text-gray-400 transition">Tours</a>
                    <a href="#" className="hover:text-gray-400 transition">Contact</a>
                    <a href="#" className="hover:text-gray-400 transition">About</a>
                </div>
                <div className="text-sm mt-4 md:mt-0">
                    © {new Date().getFullYear()} Easy POS. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
