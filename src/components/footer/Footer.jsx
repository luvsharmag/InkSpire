import React from 'react'
import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {

  console.log("first");
  return (
    <div className={styles.container}>
        <div>©2023 InkSpire. All rights reserved.</div>
        <div className={styles.social}>
          <Image src="/1.png" width={15} height={15} className={styles.icon} alt='Lama dev fb'/>
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt='Lama dev insta'/>
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt='Lama dev twt'/>
          <Image src="/4.png" width={15} height={15} className={styles.icon} alt='Lama dev ytb'/>
        </div>
    </div>
  )
}

export default Footer