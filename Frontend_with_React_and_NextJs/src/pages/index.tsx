"use client";
import CustomHead from '@/components/CustomHead'


import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import SubscribePage from '@/components/SubscribePage';




export default function Home(){

  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.hidden}`);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
            observer.unobserve(entry.target);
          }
        });
      },
      {threshold:0.1}
    );
    elements.forEach((element) => observer.observe(element));
    return() => observer.disconnect();
  }, []);



  return(
    
    < div className={styles.body}>
      <CustomHead title='Home | ON GUARD 24/7'/>
      <Header />
      <main className={styles.ref}>
        {/* Main Content */}
        <section className={styles.main_content}>
          <h1>Delivering Reliable <span className={styles.main_content_span}>Residential, Site, and Event Security</span> with On-Demand Flexibility</h1>
        </section>

        {/* Flex Section */}
        <section className={styles.services_section}>
          <div className={styles.flex_container}>
            {/* Flex Item-1 */}
            <div className={styles.flex_item}>
                <img src="/residential-security.svg" alt="Service 1 Logo" />
                <h2>Residential Security</h2>
                <p>
                  Comprehensive residential security solutions designed to safeguard your condo with 24/7 protection and rapid response.
                </p>
                <Link href="/services.html" className={styles.linkattribute}>Learn more</Link>
            </div>

            {/* Flex Item-2 */}
            <div className={styles.flex_item}>
              <img src="/site-security.png" alt="Service 2 Logo" />
              <h2>Site Security</h2>
                <p>
                  Tailored site security solutions offering real-time protection and proactive measures to secure your site around the clock.
                </p>
                <Link href="/services.html" className={styles.linkattribute}>Learn more</Link>
            </div>

            {/* Flex Item-3 */}
            <div className={styles.flex_item}>
              <img src="/event-security.png" alt="Service 3 Logo" />
                <h2>Event Security</h2>
                <p>
                  Expert event security services providing seamless crowd management, threat prevention, and 24/7 on-site protection for a safe experience.
                </p>
                <Link href="/services.html" className={styles.linkattribute}>Learn more</Link>
            </div>

          </div>
        </section>

      </main>

      {/* Who are we Section */}
      <section className={styles.who_section}>
        <div className={styles.who_container}>
          <div className={styles.who_content}>
            <h2 className={styles.hidden}>Who Are We?</h2>
            <p className={styles.hidden}>
              OnGuard 24/7 delivers top-tier residential, site, and event security with over 5 years of experience. Serving 50+ sites with 1,500+ professionals, we provide on-demand, 24/7 protection through our advanced, real-time service platform for maximum transparency.         
            </p>
          </div>
          <div className={styles.who_image}>
            <img src="/who-are-we.jpeg" alt="Who Are We Image" />
          </div>
        </div>
      </section>

      {/* Why Choose us Section */}
      <section className={styles.why_section}>
        <div className={styles.why_container}>
          <div className={styles.why_image}>
            <img src="/why-choose-us.jpg" alt="Who Are We Image" />
          </div>
          <div className={styles.why_content}>
            <h2 className={styles.hidden}>Why Choose Us?</h2>
            <p className={styles.hidden}>
              Choose OnGuard 24/7 for a cutting-edge, on-demand security solution that sets us apart from traditional security providers. Our unique platform allows clients to instantly request, scale, and manage security services 24/7, ensuring unmatched flexibility, efficiency, and real-time accountability.<br />
            </p>
          </div>
          
        </div>
      </section>

      {/* Quality and Assurance */}
      <section className={styles.quality_section}>
        <div className={styles.quality_container}>
          <div className={styles.quality_content}>
            <h2 className={styles.hidden}><strong>Quality</strong> and <strong>Assurance</strong> in all our services</h2>
            <p className={styles.hidden}>
              We provide unparalleled quality and assurance in all our services, ensuring reliability, professionalism, and customer satisfaction. Our dedicated team delivers top-tier solutions tailored to meet your security and safety needs 24/7.         
            </p>
          </div>
          <div className={styles.quality_image}>
          <img src="/quality.jpg" alt="CCTV" />
          </div>
        </div>
      </section>


      <div>
          <section className={styles.contactus_section}>
        <h2>Contact Us</h2>
        <div className={styles.contactus_container}>

          {/* Call Section */}

          <div className={styles.contact_item}>
            <div className={styles.contact_icon}>
              <img src="/phone-call.png" alt="Phone Icon" />
            </div>
            <div className={styles.contact_content}>
              <h3>Call</h3>
              <p>For Technical support, you can reach us on Toll No.</p>
              <p className={styles.contact_info}>+1 123-456-7890</p>
            </div>
          </div>

          {/* Email Section */}

          <div className={styles.contact_item}>
            <div className={styles.contact_icon}>
              <img src="/mail.png" alt="Email Icon" />
            </div>
            <div className={styles.contact_content}>
              <h3>Email</h3>
              <p>For Any type of support, query, you can email us at</p>
              <p className={styles.contact_info}>support@security.com</p>
            </div>
          </div>

          {/* Write US Section */}

          <div className={styles.contact_item}>
            <div className={styles.contact_icon}>
              <img src="/write_us.png" alt="Write Us Icon" />
            </div>
            <div className={styles.contact_content}>
              <h3>Write Us</h3>
              <p>
                Have queries, doubts, or suggestions? Raise an entry by filling
                out the form, and we'll be more than happy to help.
              </p>
              <div className={styles.contact_button}>
                <a href="/contact-us.html" className={styles.contact_link}>Click here</a>
              </div>
            </div>
          </div>

          {/* Live Chat Section */}

          <div className={styles.contact_item}>
            <div className={styles.contact_icon}>
              <img src="/live-chat.png" alt="Live Chat Icon" />
            </div>
            <div className={styles.contact_content}>
              <h3>Live Chat</h3>
              <p>
                Need assistance regarding booking? We'll get you the help you need.
              </p>
              <div className={styles.contact_button}>
                <a href="/contact-us.html" className={styles.contact_link}>Click here</a>
              </div>
            </div>
          </div>

        </div>

        


          </section>
      </div>
      <SubscribePage />
      <Footer />
    </div>
    
    
  )
}
