import React from "react";
import Button from "@/components/Button/button";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title:"Mamamia Contact Information",
  description:"this is Contact Page"
};


const contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form action="" className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea  
            placeholder="message"
            cols="30"
            rows="10"
            className={styles.textArea}
          ></textarea>
          <Button text="Send" url="#"/>
        </form>
      </div>
    </div>
  );
};

export default contact;
