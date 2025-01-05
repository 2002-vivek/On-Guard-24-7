"use client";

import React, { useState } from "react";
import styles from "../../styles/Contact_Us.module.css";

interface ContactFormProps {
  onSubmit: (formData: { name: string; email: string; message: string; phone: string }) => void;
}



const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(formData.name.length < 3){
            setErrorMessage("Your name should be atleast 3 charecters long");
            return;
          }
          if (!formData.email.includes("@") || !formData.email.includes(".")) {
            setErrorMessage("Please enter a valid email address.");
            return;
          }
    
          if (!/^\d{10}$/.test(formData.phone)) {
            setErrorMessage("Phone number must be 10 digits and contain only numbers.");
            return;
          }
          const wordCount = formData.message.trim().split(/\s+/).length;
          if (wordCount <= 5) {
            setErrorMessage("Message must contain more than 5 words.");
            return;
          }
        if (!formData.name || !formData.email || !formData.message) {
          setErrorMessage("All fields are required.");
          return;
        }
        onSubmit(formData);
        setFormData({ name: "", email: "", message: "", phone: ""});
        setErrorMessage(null);
    };



  return (
    <form id ="form" onSubmit={handleSubmit}>
        <h2 className={styles.lg_view}>Contact</h2>
        <h2 className={styles.sm_view}>Let's Chat</h2>
        <p>* Required</p>

        <input className={styles.form_styles} value={formData.name} onChange={handleChange} type="text" name="name" placeholder="Name *" required  />
        <input className={styles.form_styles} value={formData.email} onChange={handleChange} type="email" name="email" placeholder="Email *" required />
        <input className={styles.form_styles} type="text" id="company" placeholder="Company" />
        <input className={styles.form_styles} value={formData.phone} onChange={handleChange} type="phone" name="phone" placeholder="Phone" required/>
        <textarea className={styles.form_styles} value={formData.message} onChange={handleChange} name="message" placeholder="Message" rows={4} required />
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        {/* {success && <p style={{ color: "green" }}>{success}</p>} */}
        <button className={styles.button} id="submit">Submit</button>
    </form>
  )
};

export default ContactForm;
