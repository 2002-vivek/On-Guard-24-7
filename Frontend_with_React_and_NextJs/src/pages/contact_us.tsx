import React, { useState } from 'react'
import styles from '../styles/Contact_Us.module.css';
import CustomHead from '@/components/CustomHead';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import ContactForm from '@/components/contact-us/ContactForm';
import SubscribePage from '@/components/SubscribePage';





const contact_us : React.FC = () => {

 

  const handleFormSubmit = async (formData: { name: string; email: string; message: string; phone: string }) => {

      

      try{
        const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
        const response = await fetch(`${BASE_URL}/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          throw new Error("Failed to send message");
        } 
        console.log("Message sent successfully");
      }
      catch(error){
        console.error("Error:", error);
      }

  };



  return (
    <div className={styles.body}>
      <CustomHead title='Contact Us | ON GUARD 24/7'/>
      <Header/>

      <div className={styles.container}>
        <div className={styles.form_container}>
            <div className={styles.left_container}>
                <div className={styles.left_inner_container}>
                    <h2 className={styles.h2}>Let's Chat</h2>
                    <p>Whether you have a question, want to join our company or simply want to connect.</p>
                    <br />
                    <p>Feel free to send me a message in the contact form</p>
                </div>
            </div>

            <div className={styles.right_container}>
                <div className={styles.right_inner_container}>

                    <ContactForm onSubmit={handleFormSubmit}/>

                </div>
            </div>
        </div>
      </div>

      <SubscribePage />
      <Footer/>
    </div>
  )
}

export default contact_us
