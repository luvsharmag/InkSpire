import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";




const getData = async (id) => {
  const res = await fetch(process.env.NEXTAUTH_URL+`api/posts/${id}`, {
    cache: "no-store",
  });
  return res.json();
};

// export async function generateMetadata({params}){
//   const data = await getData(params.id);
//   return{
//     title:data.title,
//     description:data.desc
//   }
// }
const blogpost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.image}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />

            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={data.image}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          {data.content}
        </p>
      </div>
    </div>
  );
};

export default blogpost;