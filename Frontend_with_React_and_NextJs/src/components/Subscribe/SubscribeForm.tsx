"use client";

import React, { useState } from "react";
import styles from '../../styles/Subscribe.module.css';


interface SubscribeFormProps {
  onSubmit: (formData: { email: string }) => void;
}

const SubscribeForm: React.FC<SubscribeFormProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!email) {
        setErrorMessage("Email is required.");
        return;
      }
      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setErrorMessage("Invalid email address.");
        return;
      }
      onSubmit({ email });
      setEmail(""); // Reset the form
      setErrorMessage(null);
      setSuccessMessage("Subscription successful!");
    };

    return(
        <>
        <form className={styles.subscribe_form} onSubmit={handleSubmit}>
            <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleChange}
            required
            />
            
            <button id = "submit" type="submit">Sign Up</button>
            
        </form>
        {errorMessage && <div className="alert alert-danger" >{errorMessage}</div>}
        {successMessage && <div className="alert alert-success" >{successMessage}</div>}
        </>
        
    );

};

export default SubscribeForm;