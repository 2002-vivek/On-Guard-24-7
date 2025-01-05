
import React, { useState } from 'react'
import styles from '../styles/Subscribe.module.css';
import Link from 'next/link';
import SubscribeForm from './Subscribe/SubscribeForm';




const subscribe: React.FC = () => {

  const handleSubscribe = async (formData: { email: string }) => {
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
      const response = await fetch(`${BASE_URL}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      console.log("Subscription successful");
    } catch (error) {
      console.error("Error:", error);
    }
  };



  return (
    <div>
      <section className={styles.subscribe_follow_section}>
        <div className={styles.subscribe_container}>
            <div className={styles.stay_updated}>
                <h3>Stay Updated</h3>
                <p>Subscribe to our newsletter for the latest updates and news.</p>
                <SubscribeForm onSubmit={handleSubscribe} />
          </div>
        

            <div className={styles.follow_us}>
                <h3>Follow Us</h3>
                <p>Follow us on social media for the latest updates.</p>
                <div className={styles.social_icons}>
                    <Link href="https://www.facebook.com/"><img src="/facebook.png" alt="Facebook" /></Link>
                    <Link href="https://x.com/"><img src="/twitter.png" alt="Twitter" /></Link>
                    <Link href="https://www.instagram.com/"><img src="/instagram.png" alt="Instagram" /></Link>
                    <Link href="https://www.linkedin.com/home"><img src="/linkedin.png" alt="LinkedIn" /></Link>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default subscribe
