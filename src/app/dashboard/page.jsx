"use client";
import React from "react";
import { useEffect, useState } from "react";
import useSWR from "swr";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/Button/button";
// function Profile() {
//   const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

//   if (error) return <div>failed to load</div>
//   if (isLoading) return <div>loading...</div>
//   return <div>hello {data.name}!</div>
// }
//client side rendering with useeffect and promises
const dashboard = () => {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading,setIsLoading] = useState(false);
  // useEffect(() => {

  //   const getData = async (id) => {
  //     setIsLoading(true);
  //     const res = await fetch(
  //       `https://jsonplaceholder.typicode.com/posts`,
  //       {
  //         cache: "no-store",
  //       }
  //     );
  //     if (!res.ok) return setError(true);
  //     setData(await res.json());
  //     setIsLoading(false);
  //   };
  //   getData();
  // },[]);
  const session = useSession();
  const router = useRouter();
  //CSR using SWR
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data,mutuate, error, isLoading } = useSWR(
    `/api/posts?username=${session.data ?session.data.user.name:"test"}`,
    fetcher
  );

  // console.log(data);
  // console.log(session);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session.data.user.name,
        }),
      });
      mutuate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
    
  };
  const HandleDelete = async (id)=>{
    try{
      await fetch(`api/posts/${id}`,{
        method:"DELETE",
      })
      mutuate();
    }catch(error){
      console.log(error)
    }
  };
  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "loading..."
            : data.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image src={post.image} alt="" width={200} height={100} />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span className={styles.delete} onClick={()=>HandleDelete(post._id)}>X</span>
                </div>
              ))}        
        </div>

        <form className={styles.new} onSubmit={HandleSubmit}>
          <h1>Add new Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textarea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default dashboard;
