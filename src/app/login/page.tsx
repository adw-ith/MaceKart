"use client"; // This tells Next.js that this is a Client Component

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function App() {
  const [currentForm, setCurrentForm] = useState<'login' | 'signup' | 'recover'>('login'); // Restricting form states
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', password: '' });
  const [message, setMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Logging in...', formData);
    // Add your login logic here
  };

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Signing up...', formData);
    // Add your signup logic here
  };

  const handleRecoverSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Sending recovery email to:', formData.email);
    setMessage('Recovery email sent! Please check your inbox.');
    setFormData({ ...formData, email: '' }); // Clear email input
  };

  const toggleForm = (form: 'login' | 'signup' | 'recover') => {
    setCurrentForm(form);
    setMessage(''); // Clear any message when toggling
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-black">
      <div className="flex items-center justify-center p-8 rounded-3xl shadow-[0_0_30px_rgba(0,255,255,0.5),_0_0_60px_rgba(0,0,0,0.8)] w-[700px] max-w-full">
        <div className="mr-12 bg-cyan-500 bg-opacity-10 p-4 rounded-xl shadow-inner">
          <Image 
            src="/cartimage1.jpeg" 
            alt="Shopping cart" 
            width={300} 
            height={300} 
          />
        </div>
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          {currentForm === 'login' && (
            <>
              <h2 className="text-cyan-400 text-center mb-4">Login</h2>
              <form className="flex flex-col" onSubmit={handleLoginSubmit}>
                <input 
                  className="p-2 mb-4 border-none rounded-md shadow-inner" 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
                <input 
                  className="p-2 mb-4 border-none rounded-md shadow-inner" 
                  type="password" 
                  name="password" 
                  placeholder="Password" 
                  value={formData.password}
                  onChange={handleInputChange}
                  required 
                />
                <button type="submit" className="bg-cyan-400 text-black p-2 text-sm rounded-md transition-colors duration-300 ease-in-out hover:bg-cyan-300">
                  Login
                </button>
              </form>
              <div className="text-white text-center mt-4">
                <p className="flex justify-between items-center mt-4">
                  <span className="text-cyan-400 cursor-pointer underline mr-5" onClick={() => toggleForm('signup')}>
                    Sign up
                  </span>
                  <Link href="#" onClick={() => toggleForm('recover')}>
                    <span className="text-cyan-400 cursor-pointer underline">
                      Forgot Password?
                    </span>
                  </Link>
                </p>
              </div>
            </>
          )}
          {currentForm === 'signup' && (
            <>
              <h2 className="text-cyan-400 text-center mb-4">Sign Up</h2>
              <form className="flex flex-col" onSubmit={handleSignupSubmit}>
                <input 
                  className="p-2 mb-4 border-none rounded-md shadow-inner" 
                  type="text" 
                  name="name" 
                  placeholder="Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
                <input 
                  className="p-2 mb-4 border-none rounded-md shadow-inner" 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
                <input 
                  className="p-2 mb-4 border-none rounded-md shadow-inner" 
                  type="password" 
                  name="password" 
                  placeholder="Password" 
                  value={formData.password}
                  onChange={handleInputChange}
                  required 
                />
                <button type="submit" className="bg-cyan-400 text-black p-2 text-sm rounded-md transition-colors duration-300 ease-in-out hover:bg-cyan-300">
                  Sign Up
                </button>
              </form>
              <div className="text-white text-center mt-4">
                <p className="text-cyan-400 cursor-pointer underline" onClick={() => toggleForm('login')}>
                  Login
                </p>
              </div>
            </>
          )}
          {currentForm === 'recover' && (
            <>
              <h2 className="text-cyan-400 text-center mb-4">Recover Your Password</h2>
              {message && <p className="text-green-400 mb-4">{message}</p>}
              <form className="flex flex-col" onSubmit={handleRecoverSubmit}>
                <input 
                  className="p-2 mb-4 border-none rounded-md shadow-inner" 
                  type="email" 
                  name="email" 
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
                <button type="submit" className="bg-cyan-400 text-black p-2 text-sm rounded-md transition-colors duration-300 ease-in-out hover:bg-cyan-300">
                  Send Recovery Email
                </button>
              </form>
              <div className="text-white text-center mt-4">
                <p className="text-cyan-400 cursor-pointer underline" onClick={() => toggleForm('login')}>
                  Login
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
