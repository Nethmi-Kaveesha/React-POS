import React, { useState } from "react";

export type CustomerFormData = {
    name: string;
    address: string;
    dateOfBirth: string;
};

type CustomerFormProps = {
    initialData?: CustomerFormData;
    onSubmit: (data: { name: string; dateOfBirth: string; address: string; id: number }) => void;
    onCancel: () => void;
};

const validate = (form: CustomerFormData) => {
    const errors: Partial<CustomerFormData> = {};
    if (!form.name.trim()) errors.name = "Name is required.";
    if (!form.address.trim()) errors.address = "Address is required.";
    if (!form.dateOfBirth) errors.dateOfBirth = "Date of birth is required.";
    return errors;
};

function initialForm(): CustomerFormData {
    return { name: "", address: "", dateOfBirth: "" };
}

const CustomerForm: React.FC<CustomerFormProps> = ({ initialData, onSubmit, onCancel }) => {
    const [form, setForm] = useState<CustomerFormData>(
        initialData || { name: "", address: "", dateOfBirth: "" }
    );
    const [errors, setErrors] = useState<Partial<CustomerFormData>>({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        const validationErrors = validate(form);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            const customer = {
                id: Math.floor(Math.random() * 100000),
                ...form,
            };
            console.log("customer:", customer);
            onSubmit({
                name: form.name,
                dateOfBirth: form.dateOfBirth,
                address: form.address,
                id: Date.now()
            });

            setForm(initialForm);
            setErrors({});
            alert("Customer added successfully!");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-6">
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                <input
                    name="name"
                    className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.name ? "border-red-400" : "border-gray-300"
                    }`}
                    value={form.name}
                    onChange={handleChange}
                    autoFocus
                />
                {submitted && errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Address</label>
                <input
                    name="address"
                    className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.address ? "border-red-400" : "border-gray-300"
                    }`}
                    value={form.address}
                    onChange={handleChange}
                />
                {submitted && errors.address && (
                    <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Birth</label>
                <input
                    type="date"
                    name="dateOfBirth"
                    className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.dateOfBirth ? "border-red-400" : "border-gray-300"
                    }`}
                    value={form.dateOfBirth}
                    onChange={handleChange}
                />
                {submitted && errors.dateOfBirth && (
                    <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>
                )}
            </div>

            <div className="flex justify-end gap-3 pt-4">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                    Save
                </button>
            </div>
        </form>
    );
};

export default CustomerForm;
