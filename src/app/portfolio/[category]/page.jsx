import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/button";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (category) => {
  const data = items[category];
  if (!data) return notFound();
  return data;
};

const category = ({ params }) => {
  console.log(params);
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((el) => (
        <div className={styles.item} id={el.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{el.title}</h1>
            <p className={styles.desc}>{el.desc}</p>
            <Button text="See More" url="#" />
          </div>

          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={el.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default category;
