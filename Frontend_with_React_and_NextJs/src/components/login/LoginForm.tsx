"use client";

import React, { useState } from 'react'
import styles from '../../styles/login.module.css';


interface LoginFormProps {
    onLogin: (formData: { email: string; password: string }) => void;
    onSignup: (formData: { name: string; email: string; password: string }) => void;
  }
  

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onSignup }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
      });
    const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
    const [message, setMessage] = useState<string | null>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isLogin) {

          if (!formData.email.includes("@") || !formData.email.includes(".")) {
              setMessage("Please enter a valid email address.");
              return;
          }

          if (!formData.email || !formData.password) {
            setMessage("Email and password are required.");
            return;
          }
          onLogin({ email: formData.email, password: formData.password });
        } else {
          if (!formData.name || !formData.email || !formData.password) {
            setMessage("All fields are required.");
            return;
          }
          onSignup({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          });
        }
        setMessage(null); // Clear errors after submission
    };


    const loginToggleStyle = {
        backgroundColor: isLogin ? "#222" : "#fff",
        color: isLogin ? "#fff" : "#222",
        
        
    };
    const login_form_style={
        display: isLogin ? "block" : "none",
    };
    const signup_form_style={
        display: !isLogin ? "block" : "none",
    };
    const signupToggleStyle = {
        backgroundColor: !isLogin ? "#222" : "#fff",
        color: !isLogin ? "#fff" : "#222",
        // display: !isLogin ? "block" : "none",
    };




  return (
    <div>
        <div className={styles.form_toggle}>
            <button 
            style={loginToggleStyle}
            id={styles.login_toggle}  
            onClick={() => setIsLogin(true)} 
            >
                log in
            </button>
            <button 
            style={signupToggleStyle}
            id={styles.signup_toggle}
            onClick={() => setIsLogin(false)} 
            >
                sign up
            </button>
        </div>

        <div style={login_form_style} className={styles.login_form} onSubmit={handleSubmit}>
            <form>
                <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email or username"/>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter password"/>
                <button type="submit" className="btn login">login</button>
                <p><a href="javascript:void(0)">Forgotten account</a></p>
                {message && <p>{message}</p>}
                <hr/>
    
            </form>
        </div>
        <div style={signup_form_style} className={styles.signup_form} onSubmit={handleSubmit}>
            <form>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email"/>
                <input type="text"  name="name" value={formData.name} onChange={handleChange} placeholder="Choose username"/>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Create password"/>
                <button type="submit" className="btn signup">create account</button>
                <p>Clicking <strong>create account</strong> means that you are agree to our <a href="javascript:void(0)">terms of services</a>.</p>
                {message && <p>{message}</p>}
                <hr/>
            
            </form>
        </div>
    </div>
  );
};

export default LoginForm;
