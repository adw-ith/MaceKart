"use client"; // This tells Next.js that this is a Client Component

import { useState } from "react";

export default function App() {
  const [currentForm, setCurrentForm] = useState<"login" | "signup" | "recover">("signup"); // Change to "signup"
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
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setCurrentForm("signup"); // Reset to "signup" after submission if needed
  };

  const handleLogin = () => {
    // Here you can handle the login logic, such as making an API call
    console.log("Logging in with", { email, password });
  };

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Handle the signup logic, such as making an API call
    console.log("Signing up with", { name, email, password });
  };

  const handlePasswordRecovery = () => {
    // Handle the password recovery logic, such as making an API call
    console.log("Recovering password for", email);
  };

  return (
    <div className="w-dvw h-dvh grid place-items-center bg-gradient-to-r from-cyan-500 to-black p-4">
      <div className="flex flex-row items-center justify-center gap-6 p-4 rounded-3xl shadow-lg shadow-cyan-400/50 relative w-full max-w-5xl max-h-3/4 md:h-3/5 overflow-hidden transition-transform duration-500 hover:scale-105">
        <div className="hidden md:flex items-center justify-center bg-cyan-100/10 p-4 rounded-lg shadow-inner shadow-black/70 w-1/2 h-full">
          <img src="/cartimage1.jpeg" alt="Shopping cart" className="w-full h-full object-cover rounded-md" />
        </div>
        <div className="flex flex-col items-center justify-center bg-white/10 p-2 md:p-8 rounded-lg shadow-md shadow-black/50 w-full md:w-1/2 h-full">
          <h2 className="h-1/6 flex items-center justify-center text-center mb-0 md:mb-8 text-cyan-400 text-2xl font-semibold tracking-wide">
            {currentForm === "login" ? "Login" : currentForm === "signup" ? "Sign Up" : "Recover Your Password"}
          </h2>
          <div className="h-5/6 flex items-center justify-center w-full">
            <form className="flex flex-col w-full px-4" onSubmit={handleSubmit}>
              {currentForm === "signup" && (
                <input
                  className="p-3 mb-4 border-none rounded-md shadow-inner shadow-black/50 text-black focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              )}
              <input
                className="p-3 mb-4 border-none rounded-md shadow-inner shadow-black/50 text-black focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {currentForm !== "recover" && (
                <input
                  className="p-3 mb-4 border-none rounded-md shadow-inner shadow-black/50 text-black focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all"
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
                  className="p-3 mb-4 border-none rounded-md shadow-inner shadow-black/50 text-black focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all"
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
                className="bg-cyan-400 text-black py-2 text-sm rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-cyan-500 hover:text-white"
              >
                {currentForm === "login" ? "Login" : currentForm === "signup" ? "Sign Up" : "Send Recovery Email"}
              </button>
              <div className="mt-4 text-white">
                {currentForm === "login" && (
                  <div className="flex flex-row items-center justify-center gap-4">
                    <p className="text-sm text-center border-r border-cyan-600 pr-2">
                      Forgot Your Password? <br />
                      <span
                        className="cursor-pointer underline text-cyan-400 hover:text-cyan-300 transition-colors"
                        onClick={() => setCurrentForm("recover")}
                      >
                        Recover
                      </span>
                    </p>
                    <p className="text-sm text-center">
                      Don't have an account? <br />
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
                  <p className="text-sm text-center">
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
                  <p className="text-sm text-center">
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
