import { useState } from "react";
import CustomerForm from "../forms/CustomerForm.tsx";
import type { Customer } from "../types/Customer.ts";
import { customerData } from "../data/CustomerData.ts";

const CustomerPage = () => {
    const [customers, setCustomers] = useState<Customer[]>(customerData);
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [editCustomer, setEditCustomer] = useState<Customer | null>(null);

    const onSubmit = (customer: Customer) => {
        if (editCustomer !== null) {
            setCustomers(prevState =>
                prevState.map(orginalCustomer => (orginalCustomer.id === customer.id ? customer : orginalCustomer))
            );
        } else {

            const newId = Date.now();
            setCustomers(prev => [...prev, { ...customer, id: newId }]);
        }
        setIsDialogOpen(false);
        setEditCustomer(null);
    };

    const onAddCustomerClicked = () => {
        setEditCustomer(null);
        setIsDialogOpen(true);
    };

    const onCancel = () => {
        setIsDialogOpen(false);
        setEditCustomer(null);
    };

    const onDelete = (id: number) => {
        setCustomers(prev => prev.filter(c => c.id !== id));
    };

    const onEdit = (customer: Customer) => {
        setEditCustomer(customer);
        setIsDialogOpen(true);
    };

    return (
        <div className="p-6">
            <h3 className="text-xl font-bold mb-4">Customer List</h3>
            <button
                onClick={onAddCustomerClicked}
                className="bg-black text-white p-2 mb-4 rounded"
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
                    <th className="py-2 px-4 border">Edit</th>
                    <th className="py-2 px-4 border">Delete</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer) => (
                    <tr key={customer.id} className="hover:bg-gray-100">
                        <td className="py-2 px-4 border">{customer.id}</td>
                        <td className="py-2 px-4 border">{customer.name}</td>
                        <td className="py-2 px-4 border">{customer.address}</td>
                        <td className="py-2 px-4 border">{customer.dateOfBirth}</td>
                        <td className="py-2 px-4 border">
                            <button className="bg-yellow-400 px-2 py-1 rounded" onClick={() => onEdit(customer)}>
                                Edit
                            </button>
                        </td>
                        <td className="py-2 px-4 border">
                            <button className="bg-red-500 px-2 py-1 text-white rounded" onClick={() => onDelete(customer.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {isDialogOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-lg font-bold mb-4">
                            {editCustomer ? "Edit Customer" : "Add Customer"}
                        </h2>
                        <CustomerForm
                            onSubmit={onSubmit}
                            onCancel={onCancel}
                            initialValues={editCustomer ?? undefined}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomerPage;
