import React from 'react'
import styles from '../styles/Services.module.css';
import CustomHead from '@/components/CustomHead';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import SubscribePage from '@/components/SubscribePage';



export default  function services(){
  return (
    <div className={styles.body}>
      <CustomHead title='Services | ON GUARD 24/7'/>
      <Header />
      <div className={styles.ref}>
        <section className={styles.main_content}>
          <h1>Elevating security standards with<span className={styles.maincontent_span}>innovative, responsive protection </span>around the clock.</h1>
          <p>Security starts with awareness, awareness starts with us.</p>
        </section>
      </div>

      {/* Residential */}
      <div className={styles.residential}>
        <div className={styles.left_image}>
          <img src="/Residential-Security-Services.jpg" alt="" />
        </div>
        <div className={styles.right_content}>
          <div className={styles.right_heading}>
            <h1>Residential Security</h1>
          </div>
          <div className={styles.right_paras}>
            <ul>
                  <li className={styles.lines}>Monitor access to residential properties</li>
                  <li className={styles.lines}>Conduct regular security patrols on-site</li>
                  <li className={styles.lines}>Respond to alarms and emergency situations</li>
                  <li className={styles.lines}>Report security incidents to management or authorities</li>
                  <li className={styles.lines}>Ensure compliance with security protocols and rules</li>
                  <li className={styles.lines}>Provide assistance to residents and visitors</li>
                  <li className={styles.lines}>Maintain detailed logs of daily activities</li>
                </ul>
          </div>
        </div>
      </div>

      {/* Event */}
      <div className={styles.event}>
        <div className={styles.left_content}>
            <div className={styles.left_heading}>
                <h1>Event Security</h1>
            </div>
            <div className={styles.left_paras}>
              <ul>
                <li className={styles.lines}>Monitor all entry and exit points at events</li>
                <li className={styles.lines}>Thoroughly screen attendees for prohibited items</li>
                <li className={styles.lines}>Ensure effective crowd control and maintain order</li>
                <li className={styles.lines}>Respond swiftly and professionally to security incidents</li>
                <li className={styles.lines}>Patrol event venues for any suspicious behavior</li>
                <li className={styles.lines}>Escort VIPs and high-profile guests securely and discreetly</li>
                <li className={styles.lines}>Assist in orderly evacuations during emergencies or threats</li>
              </ul>
            </div>
        </div>
        <div className={styles.right_image}>
          <img src="/event-security.jpg" alt="" />
        </div>
      </div>

      {/* Site */}
      <div className={styles.residential}>
        <div className={styles.left_image}>
          <img src="/site-security.jpg" alt=""/>
        </div>
        <div className={styles.right_content}>
          <div className={styles.right_heading}>
            <h1>Site Security</h1>
          </div>
          <div className={styles.right_paras}>
            <ul>
                <li className={styles.lines}>Monitor and control access to the entire site</li>
                <li className={styles.lines}>Conduct thorough perimeter patrols to ensure safety</li>
                <li className={styles.lines}>Inspect buildings and grounds for security breaches</li>
                <li className={styles.lines}>Respond quickly and efficiently to security alarms</li>
                <li className={styles.lines}>Enforce strict site rules and safety regulations</li>
                <li className={styles.lines}>Coordinate with on-site staff for security protocols</li>
                <li className={styles.lines}>Ensure safety of equipment and valuable assets on-site</li>
                </ul>
          </div>
        </div>
      </div>

      <SubscribePage />
      <Footer />
    </div>
  )
}
