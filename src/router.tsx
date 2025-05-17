import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import OrdersPage from "./pages/OrdersPage.tsx";
import StockPage from "./pages/StockPage.tsx";
import CustomerPage from "./pages/CustomerPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: '/about', element: <AboutPage /> },
            { path: '/contact', element: <ContactPage /> },
            { path: '/login', element: <LoginPage /> },
            { path: '/dashboard', element: <Dashboard /> },
            { path: '/dashboard/customer', element: <CustomerPage /> },
            { path: '/dashboard/stocks', element: <StockPage /> },
            { path: '/dashboard/orders', element: <OrdersPage /> }
        ]
    }
]);

export default router;
