import React from "react";
import styles from "./blog.module.css";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const blog = async () => {
  const data = await getData();
  return (
    <div className={styles.maincontainer}>
      {data.map((post) => (
        <Link
          href={`blog/${post._id}`}
          className={styles.container}
          key={post._id}
        >
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={post.image}
              alt=""
              width={400}
              height={250}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default blog;
