"use client"
import { useState } from 'react';
import axios from 'axios';

interface ProductFormProps {
  onSubmit?: (data: ProductData) => void;
}

interface ProductData {
  name: string;
  price: number;
  quantity: number;
  description: string;
  categoryId: string;
}

const categories = [
  { id: '1', name: 'Electronics' },
  { id: '2', name: 'Fashion' },
  { id: '3', name: 'Home and Kitchen' },
  { id: '4', name: 'Beauty and Personal' },
  { id: '5', name: 'Sports and Outdoors' },
  { id: '6', name: 'Toys and Games' },
  { id: '7', name: 'Automotive' },
  { id: '8', name: 'Books and Stationary' },
  { id: '9', name: 'Health and Wellness' },
  { id: '10', name: 'Grocery and Gourmet Foods' },
];

const ProductForm: React.FC<ProductFormProps> = () => {
  const [formData, setFormData] = useState<ProductData>({
    name: '',
    price: 0,
    quantity: 0,
    description: '',
    categoryId: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    price: '',
    quantity: '',
    description: '',
    categoryId: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'price' || name === 'quantity' ? Number(value) : value,
    }));
  };

  const validate = () => {
    const newErrors = {
      name: formData.name ? '' : 'Name is required',
      price: formData.price > 0 ? '' : 'Price must be greater than zero',
      quantity: formData.quantity >= 0 ? '' : 'Quantity cannot be negative',
      description: formData.description ? '' : 'Description is required',
      categoryId: formData.categoryId ? '' : 'Category is required',
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post("/api/product/add", formData);
        console.log("Product added:", response.data);
        setFormData({ name: '', price: 0, quantity: 0, description: '', categoryId: '' });
      } catch (error) {
        console.error("Error adding product:", error);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Price Field */}
        <div>
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.price ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
        </div>

        {/* Quantity Field */}
        <div>
          <label className="block text-gray-700">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.quantity ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity}</p>}
        </div>

        {/* Description Field */}
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.description ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        {/* Category ID Dropdown */}
        <div>
          <label className="block text-gray-700">Category</label>
          <select
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.categoryId ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.categoryId && <p className="text-red-500 text-sm">{errors.categoryId}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
