"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Form({ email }: { email: string }) {
  const [role, setRole] = useState("");
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formAddress, setFormAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const getRole = async () => {
    try {
      const user = await axios.post("/api/user/fetch", { email });
      const role = user.data.data.data.role;
      setRole(role);
    } catch (error) {
      console.error("Error fetching role:", error);
    }
  };

  useEffect(() => {
    getRole();
  }, [email]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updatedUser = await axios.put(
        `/api/${role === "user" ? "customer" : "supplier"}/update`,
        {
          email: formEmail,
          name: formName,
          phone: formPhone,
          address: formAddress,
        }
      );
      console.log("updated user", updatedUser.data);
    } catch (error) {
      console.error("Error updating user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-4 max-w-lg mx-auto md:px-6">
      <h1 className="text-xl font-bold mb-4 text-center">
        Update {role === "user" ? "Customer" : "Supplier"} Information
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
            className="border rounded w-full p-2"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formEmail}
            onChange={(e) => setFormEmail(e.target.value)}
            className="border rounded w-full p-2"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="phone">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            value={formPhone}
            onChange={(e) => setFormPhone(e.target.value)}
            className="border rounded w-full p-2"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            value={formAddress}
            onChange={(e) => setFormAddress(e.target.value)}
            className="border rounded w-full p-2"
            placeholder="Enter your address"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full p-2 mt-4 text-white ${
            loading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
          } rounded`}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Information"}
        </button>
      </form>
    </section>
  );
}
