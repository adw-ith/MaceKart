"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function App() {
  const [currentForm, setCurrentForm] = useState<
    "login" | "signup" | "recover"
  >("signup"); // Change to "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router=useRouter()

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
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "/api/user/login",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Login successful:", response.data);
      if(response.data.data.status===200)
      {
        router.push('/pages/buyer/dashboard')
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleSignUp = async () => {
    // Basic validation to ensure passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "/api/user/signup",
        {
          role: "user",
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Signup successful:", response.data);
      if(response.data.data.status ===401) {
        console.log("in here")
        setCurrentForm("login")
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const handlePasswordRecovery = () => {
    // Handle the password recovery logic, such as making an API call
    console.log("Recovering password for", email);
  };

  return (
    <div className="w-dvw h-dvh grid place-items-center p-4">
      <div className="flex flex-row items-center justify-center gap-6 p-4 rounded-3xl shadow-lg shadow-slate-400/50 relative w-full max-w-5xl max-h-3/4 md:h-3/5 overflow-hidden transition-transform duration-500 hover:scale-105">
        <div className="hidden md:flex items-center justify-center bg-cyan-100/10 p-4 rounded-lg shadow-inner shadow-black/70 w-1/2 h-full">
          <img
            src="/cartimage1.jpeg"
            alt="Shopping cart"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col items-center justify-center bg-white/10 p-2 md:p-8 rounded-lg shadow-md shadow-black/50 w-full md:w-1/2 h-full">
          <h2 className="h-1/6 flex items-center justify-center text-center mb-0 md:mb-8 text-blue-500 text-2xl font-semibold tracking-wide pb-4">
            {currentForm === "login"
              ? "Login"
              : currentForm === "signup"
              ? "Sign Up"
              : "Recover Your Password"}
          </h2>
          <div className="h-5/6 flex items-center justify-center w-full">
            <form className="flex flex-col w-full px-4" onSubmit={handleSubmit}>
              {currentForm === "signup" && (
                <input
                  className="p-3 mb-4 border-none rounded-md shadow-inner shadow-black/50 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              )}
              <input
                className="p-3 mb-4 border-none rounded-md shadow-inner shadow-black/50 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {currentForm !== "recover" && (
                <input
                  className="p-3 mb-4 border-none rounded-md shadow-inner shadow-black/50 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
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
                  className="p-3 mb-4 border-none rounded-md shadow-inner shadow-black/50 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
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
                className="bg-blue-500  py-2 text-sm rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-800 text-white"
              >
                {currentForm === "login"
                  ? "Login"
                  : currentForm === "signup"
                  ? "Sign Up"
                  : "Send Recovery Email"}
              </button>
              <div className="mt-4 text-white">
                {currentForm === "login" && (
                  <div className="flex flex-row items-center justify-center gap-4">
                    <p className="text-sm text-center text-slate-900 border-r border-cyan-600 pr-2">
                      Forgot Your Password? <br />
                      <span
                        className="cursor-pointer underline text-blue-500 hover:text-blue-800 transition-colors"
                        onClick={() => setCurrentForm("recover")}
                      >
                        Recover
                      </span>
                    </p>
                    <p className="text-sm text-center text-slate-900">
                      Don{"'"}t have an account? <br />
                      <span
                        className="cursor-pointer underline text-blue-500 hover:text-blue-800 transition-colors"
                        onClick={() => setCurrentForm("signup")}
                      >
                        Sign up
                      </span>
                    </p>
                  </div>
                )}
                {currentForm === "signup" && (
                  <p className="text-sm text-center text-slate-900 pb-8">
                    Already have an account?{" "}
                    <span
                      className="cursor-pointer underline text-blue-500 hover:text-blue-800 transition-colors"
                      onClick={() => setCurrentForm("login")}
                    >
                      Login
                    </span>
                  </p>
                )}
                {currentForm === "recover" && (
                  <p className="text-sm text-center text-slate-900">
                    Know Your Password?{" "}
                    <span
                      className="cursor-pointer underline text-blue-500 hover:text-blue-800 transition-colors"
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
      {/* <CustomerForm></CustomerForm> */}
    </div>
  );
}
