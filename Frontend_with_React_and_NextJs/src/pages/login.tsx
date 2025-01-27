import React, { useState } from 'react'
import styles from '../styles/login.module.css';
import CustomHead from '@/components/CustomHead';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import Cookies from "js-cookie";
import LoginForm from '@/components/login/LoginForm';



const login: React.FC = () => {

    
    const router = useRouter();

    



        const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
        
        const handleLogin = async (formData: { email: string; password: string }) => {
            try {
                const response = await fetch(`${BASE_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
                });
        
                if (!response.ok) {
                throw new Error("Invalid email or password");
                }
        
                const data = await response.json();
                Cookies.set("authToken", data.access_token, { expires: 1 });
                const payload = JSON.parse(atob(data.access_token.split('.')[1]));
                Cookies.set("userRoles", payload.roles.join(","), { expires: 1 });
                Cookies.set("userId", payload.sub, { expires: 1 });
                router.push("/"); // Redirect to the homepage
            } catch (error: any) {
                alert(error.message || "An error occurred during login.");
            }
        };

        const handleSignup = async (formData: { name: string; email: string; password: string }) => {
            try {
              const response = await fetch(`${BASE_URL}/admin/signup`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              });
        
              if (!response.ok) {
                throw new Error("Signup failed. Please try again.");
              }
        
              const data = await response.json();
              alert(data.message);
              router.push("/login"); // Redirect to the homepage
            } catch (error: any) {
              alert(error.message || "An error occurred during signup.");
            }
        };
        


  return (
    <div className={styles.body}>
        <CustomHead title='Login Page'/>
        <Header/>
        <div className={styles.form_modal}>
            <LoginForm onLogin={handleLogin} onSignup={handleSignup}/>
        </div>
        <Footer/>
    </div>
  )
}

export default login
