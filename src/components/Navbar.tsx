import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log('Navbar', location.pathname);

    const routes = [
        { to: "/", name: "Home" },
        { to: "/about", name: "About" },
        { to: "/contact", name: "Contact" },
        { to: "/login", name: "Login" },
        { to: "/dashboard", name: "Dashboard" },
    ];

    const isActive = (to: string) => to === location.pathname;

    const onLoginPressed = (): void => {
        navigate('/login');
    };

    const onDashboardPressed = (): void => {
        navigate('/dashboard');
    };

    return (
        <nav className="bg-gradient-to-r from-blue-200 via-blue-300 to-white-300 text-white px-6 py-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Easy POS</h1>

                <div className="flex space-x-6 items-center">
                    {routes.map((route, index) => (
                        <Link
                            key={index}
                            to={route.to}
                            className={`flex items-center px-3 py-2 rounded transition ${
                                isActive(route.to)
                                    ? 'bg-black text-white'
                                    : 'text-gray-600 hover:text-blue-600'
                            }`}
                        >
                            {route.name}
                        </Link>
                    ))}

                    <button
                        onClick={onLoginPressed}
                        className=" text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition"
                    >
                    </button>

                    <button
                        onClick={onDashboardPressed}
                        className=" text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
