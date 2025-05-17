import { useState } from "react";
import CustomerForm from "../forms/CustomerForm.tsx";
import type { Customer } from "../types/Customer.ts";
import { customerData } from "../data/CustomerData.ts";

const CustomerPage = () => {
    const [customers, setCustomers] = useState<Customer[]>(customerData);
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    const onSubmit = (customer: Customer) => {
        setCustomers([...customers, customer]);
        setIsDialogOpen(false); // Close dialog after submit
    };

    const onAddCustomerClicked = () => {
        setIsDialogOpen(true); // Open dialog
    };

    const onCancel = () => {
        setIsDialogOpen(false); // Close dialog on cancel
    };

    return (
        <div className="p-6">
            <h3 className="text-xl font-bold mb-4">Customer List</h3>
            <button
                onClick={onAddCustomerClicked}
                className="bg-black text-white p-2 mb-4"
            >
                Add Customer
            </button>

            <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-blue-600 text-white">
                <tr>
                    <th className="py-2 px-4 border">ID</th>
                    <th className="py-2 px-4 border">Name</th>
                    <th className="py-2 px-4 border">Address</th>
                    <th className="py-2 px-4 border">DOB</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer) => (
                    <tr key={customer.id} className="hover:bg-gray-100">
                        <td className="py-2 px-4 border">{customer.id}</td>
                        <td className="py-2 px-4 border">{customer.name}</td>
                        <td className="py-2 px-4 border">{customer.address}</td>
                        <td className="py-2 px-4 border">{customer.dateOfBirth}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Show form only if dialog is open */}
            {isDialogOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-lg font-bold mb-4">Add Customer</h2>
                        <CustomerForm onSubmit={onSubmit} onCancel={onCancel} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomerPage;
