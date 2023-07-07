"use client"
import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>@2023. All Right Researved</div>
        <div className='styles.social'>
          <Image src='/facebook.png'  width={15} height={15} className='styles.icon' alt='fb' />
          <Image src='/google.png' width={15} className='styles.icon' height={15} alt='fb' />
          <Image src='/youtube.png' width={15} className='styles.icon' height={15} alt='fb' />
          <Image src='/twitter.png' width={15} className='styles.icon' height={15} alt='fb' />
        </div>
    </div>
  )
}

export default Footer