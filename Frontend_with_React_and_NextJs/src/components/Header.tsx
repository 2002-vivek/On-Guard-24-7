"use client";
import React, { useEffect, useState } from 'react'
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Cookies from "js-cookie";


interface NavLink {
    name: string;
    path: string;
  }

export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRoles, setUserRoles] = useState<string[]>([]);
    const router = useRouter();
    

    useEffect(() => {
        const token = Cookies.get("authToken");
        const roles = Cookies.get("userRoles");
        setIsLoggedIn(!!token);
        setUserRoles(roles ? roles.split(",") : []);
      }, []);

      console.log(isLoggedIn);

    const handleLogout = () => {
        Cookies.remove("authToken");
        Cookies.remove("userRoles");
        setIsLoggedIn(false);
        setUserRoles([]);
        router.push("/login"); 
    };

    const handleLoginRedirect = () => {
        router.push("/login");
      };
      
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const navLinks: NavLink[] = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Contact Us", path: "/contact_us" },
      ];

    if (isLoggedIn) {
    // Add requestGuards for logged-in users
        navLinks.push({ name: "Service Booking", path: "/requestGuards" });

    // Add Users for admin role
        if (userRoles.includes("admin")) {
            navLinks.push({ name: "Users", path: "/admin" });
        }
    }

  return (
    <header className={styles.header}>
        <div className={styles.hamburger} id={styles.hamburger} onClick={toggleMenu}>
            <Image src="/hamburger-2-svgrepo-com.svg" alt="Menu" width={60} height={120}/>
        </div>

        <div className={styles.hamburger_menu} id={`${menuVisible ? styles.nav_links_show : styles.nav_links}`}>
            <ul className={styles.menu__box}>
                <li>{!isLoggedIn ? <button  className={styles.ham_btn} onClick={handleLogout}>Login </button> : <button className={styles.ham_btn} onClick={handleLoginRedirect}>Logout </button>}</li>
                {
                    navLinks.map((link) => (
                        <li key={link.path}>
                            <Link className={styles.menu__item} href={link.path}>
                            {link.name}
                            </Link>
                        </li>
                    ))
                }

            </ul>
        </div>

        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src="/logoq.png" alt="ON GUARD 24/7 Logo" />
            </div>

            <nav>
                <ul className={styles.navLinks}>
                    {
                        navLinks.map((link) => (
                            <li key={link.path}>
                                <Link href={link.path}>
                                {link.name}
                                </Link>
                            </li>
                        ))
                    }
                    {/* <li><Link href="/">Home</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/contact_us">Contact</Link></li>
                    <li><Link href="/requestGuards">Service Booking</Link></li>
                    <li><Link href="/admin">Users</Link></li> */}
                </ul>
            </nav>

            <div className={styles.auth_options}>
                {isLoggedIn ? <button className={styles.login_btn} onClick={handleLogout}>Logout </button> : <button className={styles.login_btn} onClick={handleLoginRedirect}>Login </button>}
            </div>
        </div>

    </header>
  );
}
