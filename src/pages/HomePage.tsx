const Home = () => {
    return (
        <div className="min-h-screen bg-blue-50 flex flex-col">
            <main className="flex-grow flex items-center justify-center px-4">
                <div className="text-center max-w-2xl">
                    <h2 className="text-4xl font-bold text-blue-800 mb-4">Powerful & Simple Point of Sale</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        EasyPOS is your all-in-one solution for managing sales, inventory, and customers with ease and efficiency.
                    </p>
                    <div className="space-x-4">
                        <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg shadow transition">
                            Get Started
                        </button>
                        <button className="bg-white hover:bg-gray-100 text-blue-700 border border-blue-700 px-6 py-3 rounded-lg shadow transition">
                            Learn More
                        </button>
                    </div>
                </div>
            </main>
            <footer className="bg-white text-center py-4 border-t mt-10">
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} EasyPOS. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Home;
