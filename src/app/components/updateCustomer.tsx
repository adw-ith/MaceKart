"use client";
import { useState } from "react";
import axios from "axios";

interface CustomerFormProps {
  customerId: number;
  initialName?: string;
  initialPhone?: number;
  initialAddress?: string;
  initialEmail?: string;
}

const CustomerForm: React.FC<CustomerFormProps> = ({
  customerId,
  initialName = "",
  initialPhone = undefined,
  initialEmail = "",
  initialAddress = "",
}) => {
  const [name, setName] = useState(initialName);
  const [email] = useState(initialEmail);
  const [phone, setPhone] = useState<number | undefined>(initialPhone);
  const [address, setAddress] = useState(initialAddress);
  console.log(customerId);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.put(`/api/customer/update}`, {
        name,
        email,
        phone,
        address,
      });

      console.log("Customer updated:", response.data);
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Phone:
        </label>
        <input
          type="number"
          value={phone || ""}
          onChange={(e) => setPhone(parseInt(e.target.value, 10))}
          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Address:
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Update Customer
      </button>
    </form>
  );
};

export default CustomerForm;
