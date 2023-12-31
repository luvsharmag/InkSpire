"use client"
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
const register = () => {
  const [err, setError] = useState(false);
  const router =useRouter();
  const HandlerSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      const res = await fetch(process.env.NEXTAUTH_URL + "/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type":"application/json",             
        },
        body:JSON.stringify({
          name,
          email,
          password
        })
      });
      res.status === 201 && router.push("/dashboard/login?success=Account has been created");

    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={HandlerSubmit}>
        <input
          type="text"
          placeholder="username"
          className={styles.input}
          required
        />
        <input
          type="email"
          placeholder="email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required
        />
        <button className={styles.button}>Register</button>
      </form>
      {err && "Something went wrong!"}
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
};

export default register;
