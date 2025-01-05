import CustomHead from '@/components/CustomHead'
import React from 'react'
import styles from '../styles/Portfolio.module.css';
import Card from '@/components/Card';
import RestrictedCard from '@/components/RestrictedCard';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import SubscribePage from '@/components/SubscribePage';


const portfolio = () => {

    const condominiums = [
        {imageSrc: '/1551Riverside.jpg', heading:'1551 RiverSide'},
        {imageSrc: '/Belkin Industry.jpg', heading:'Belkin Industry'},
        {imageSrc: '/Carlingtontowers.avif', heading:'Brant Hospital'},
        {imageSrc: '/HolidayInn.jpg', heading:'Carlington Towers'},
        {imageSrc: '/Novotel.jpg', heading:'Holiday Inn'},
        {imageSrc: '/1551Riverside.jpg', heading:'Novotel'},
    ];

    const embassis = [
        {imageSrc:'/Waterfield square.webp'},
        {imageSrc:'/omaxe lands.jpg'},
        {imageSrc:'/Miller place.jpg'},
        {imageSrc:'/imax.jpg'},
        {imageSrc:'/Douglasbuilding.jpg'},
    ];


  return (
    <div className={styles.body}>
      <CustomHead title='Portolio | ON GUARD 24/7'/>
      <Header/>
        <div className={styles.heading_container}>
            <div className={styles.heading}>
                <h1>Portfolio</h1>
            </div>
        </div>

        <div className={styles.main_content}>
            <div className={styles.side_heading}>
                <h2>Condominiums</h2>
            </div>
        

            <div className={styles.photo_grid}>
                {condominiums.map((item,index) => (
                    <Card key={index} imageSrc={item.imageSrc} heading={item.heading} />
                ))}
            </div>
        </div>

        <div className={styles.restricted_content}>
            <div className={styles.side_heading}>
                <h2>Embassies</h2>
            </div>
            <div className={styles.photo_grid}>
                {embassis.map((item, index) => (
                    <RestrictedCard key={index} imageSrc={item.imageSrc}/>
                ))}
            </div>
        </div>
    
        <SubscribePage />
      <Footer/>
    </div>
  )
}

export default portfolio
