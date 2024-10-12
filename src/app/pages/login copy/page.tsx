"use client"; // This tells Next.js that this is a Client Component

import { useState } from "react";

export default function App() {
  const [currentForm, setCurrentForm] = useState<"login" | "signup" | "recover">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (currentForm === "login") {
      handleLogin();
    } else if (currentForm === "signup") {
      handleSignUp();
    } else if (currentForm === "recover") {
      handlePasswordRecovery();
    }
    
    // Reset form fields and go back to login state
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setCurrentForm("login");
  };

  const handleLogin = () => {
    console.log("Logging in with", { email, password });
  };

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signing up with", { name, email, password });
  };

  const handlePasswordRecovery = () => {
    console.log("Recovering password for", email);
  };

  return (
    <div className="w-full h-screen grid place-items-center bg-gradient-to-r from-cyan-500 to-black p-4">
      <div className="relative w-full max-w-5xl h-auto md:h-3/5 grid grid-cols-1 md:grid-cols-2 items-center justify-center rounded-3xl shadow-lg shadow-cyan-400/50 overflow-hidden">
        {/* Image Container */}
        <div
          className={`w-full h-full p-4 bg-cyan-100/10 rounded-lg shadow-inner shadow-black/70 transition-transform duration-700 ease-in-out ${
            currentForm === "login" ? "order-1" : "order-2"
          }`}
        >
          <img src="/cartimage1.jpeg" alt="Shopping cart" className="w-full h-full object-cover rounded-md" />
        </div>

        {/* Form Container */}
        <div
          className={`w-full h-full p-8 bg-white/10 backdrop-blur-md rounded-lg shadow-inner shadow-black/70 transition-transform duration-700 ease-in-out ${
            currentForm === "login" ? "order-2" : "order-1"
          }`}
        >
          <h2 className="text-2xl font-semibold text-cyan-400 tracking-wide mb-4">
            {currentForm === "login" ? "Login" : currentForm === "signup" ? "Sign Up" : "Recover Your Password"}
          </h2>

          <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
            {currentForm === "signup" && (
              <input
                className="w-full p-3 mb-4 border-none rounded-md shadow-inner shadow-black/50 text-black focus:outline-none focus:ring-2 focus:ring-cyan-300"
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            )}
            <input
              className="w-full p-3 mb-4 border-none rounded-md shadow-inner shadow-black/50 text-black focus:outline-none focus:ring-2 focus:ring-cyan-300"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {currentForm !== "recover" && (
              <input
                className="w-full p-3 mb-4 border-none rounded-md shadow-inner shadow-black/50 text-black focus:outline-none focus:ring-2 focus:ring-cyan-300"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            )}
            {currentForm === "signup" && (
              <input
                className="w-full p-3 mb-4 border-none rounded-md shadow-inner shadow-black/50 text-black focus:outline-none focus:ring-2 focus:ring-cyan-300"
                type="password"
                name="confirmPassword"
                placeholder="Re-type Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            )}
            <button
              type="submit"
              className="bg-cyan-400 text-black py-2 w-full rounded-md cursor-pointer transition-all duration-500 ease-in-out hover:bg-cyan-500 hover:text-white"
            >
              {currentForm === "login" ? "Login" : currentForm === "signup" ? "Sign Up" : "Send Recovery Email"}
            </button>
          </form>

          <div className="mt-4 text-white text-center">
            {currentForm === "login" && (
              <div className="flex flex-col items-center gap-4">
                <p className="text-sm border-b border-cyan-600 pb-2">
                  Forgot Your Password?{" "}
                  <span
                    className="cursor-pointer text-cyan-400 hover:text-cyan-300 transition-colors"
                    onClick={() => setCurrentForm("recover")}
                  >
                    Recover
                  </span>
                </p>
                <p className="text-sm">
                  Don't have an account?{" "}
                  <span
                    className="cursor-pointer underline text-cyan-400 hover:text-cyan-300 transition-colors"
                    onClick={() => setCurrentForm("signup")}
                  >
                    Sign up
                  </span>
                </p>
              </div>
            )}
            {currentForm === "signup" && (
              <p className="text-sm">
                Already have an account?{" "}
                <span
                  className="cursor-pointer underline text-cyan-400 hover:text-cyan-300 transition-colors"
                  onClick={() => setCurrentForm("login")}
                >
                  Login
                </span>
              </p>
            )}
            {currentForm === "recover" && (
              <p className="text-sm">
                Know Your Password?{" "}
                <span
                  className="cursor-pointer underline text-cyan-400 hover:text-cyan-300 transition-colors"
                  onClick={() => setCurrentForm("login")}
                >
                  Login
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
