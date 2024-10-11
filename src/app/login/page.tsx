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
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <div style={styles.imageWrapper}>
          <Image 
            src="/cartimage1.jpeg" 
            alt="Shopping cart" 
            width={300} 
            height={300} 
          />
        </div>
        <div style={styles.formWrapper}>
          {currentForm === 'login' && (
            <>
              <h2 style={styles.heading}>Login</h2>
              <form style={styles.form} onSubmit={handleLoginSubmit}>
                <input 
                  style={styles.input} 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
                <input 
                  style={styles.input} 
                  type="password" 
                  name="password" 
                  placeholder="Password" 
                  value={formData.password}
                  onChange={handleInputChange}
                  required 
                />
                <button type="submit" style={styles.button}>
                  Login
                </button>
              </form>
              <div style={styles.switchText}>
                <p style={styles.switchTextContainer}>
                  <span style={styles.link} onClick={() => toggleForm('signup')}>
                    Sign up
                  </span>
                  <Link href="#" onClick={() => toggleForm('recover')}>
                    <span style={styles.forgotPasswordLink}>
                      Forgot Password?
                    </span>
                  </Link>
                </p>
              </div>
            </>
          )}
          {currentForm === 'signup' && (
            <>
              <h2 style={styles.heading}>Sign Up</h2>
              <form style={styles.form} onSubmit={handleSignupSubmit}>
                <input 
                  style={styles.input} 
                  type="text" 
                  name="name" 
                  placeholder="Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
                <input 
                  style={styles.input} 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
                <input 
                  style={styles.input} 
                  type="password" 
                  name="password" 
                  placeholder="Password" 
                  value={formData.password}
                  onChange={handleInputChange}
                  required 
                />
                <button type="submit" style={styles.button}>
                  Sign Up
                </button>
              </form>
              <div style={styles.switchText}>
                <p style={styles.switchTextContainer}>
                  <span style={styles.link} onClick={() => toggleForm('login')}>
                    Login
                  </span>
                </p>
              </div>
            </>
          )}
          {currentForm === 'recover' && (
            <>
              <h2 style={styles.heading}>Recover Your Password</h2>
              {message && <p style={styles.message}>{message}</p>}
              <form style={styles.form} onSubmit={handleRecoverSubmit}>
                <input 
                  style={styles.input} 
                  type="email" 
                  name="email" 
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
                <button type="submit" style={styles.button}>
                  Send Recovery Email
                </button>
              </form>
              <div style={styles.switchText}>
                <p style={styles.switchTextContainer}>
                  <span style={styles.link} onClick={() => toggleForm('login')}>
                    Login
                  </span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, cyan, black)',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px',
    borderRadius: '25px',
    boxShadow: '0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(0, 0, 0, 0.8)',
    position: 'relative',
    width: '700px',
    maxWidth: '100%',
    overflow: 'hidden',
  },
  imageWrapper: {
    marginRight: '50px',
    background: 'rgba(0, 255, 255, 0.1)',
    padding: '10px',
    borderRadius: '15px',
    boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.7)',
  },
  formWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
  },
  heading: {
    color: '#00ffcc',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    border: 'none',
    borderRadius: '5px',
    boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.5)',
    color: 'black', // Set text color to black
  },
  button: {
    backgroundColor: '#00ffcc',
    color: 'black',
    padding: '6px',
    fontSize: '14px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  message: {
    color: '#00ff00',
    marginBottom: '15px',
  },
  switchText: {
    textAlign: 'center',
    marginTop: '10px',
    color: '#fff',
  },
  switchTextContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
    color: '#fff',
  },
  link: {
    color: '#00ffcc',
    cursor: 'pointer',
    textDecoration: 'underline',
    marginRight: '20px',
  },
  forgotPasswordLink: {
    color: '#00ffcc',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};
