"use client";
import { signOut } from "../Lib/auth";
import { Calistoga } from "next/font/google";
import { useSession } from "next-auth/react";

const roboto = Calistoga({ subsets: ["latin"], weight: "400", style: "normal" });
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  const { data: session, status } = useSession();
  const handleLogout = () => signOut();

  return (
    <nav className={`${styles.header} ${roboto.className}`}>
      <section className={styles.logo}>
        <Link href="/">LIBRARY-SYSTEM</Link>
      </section>
      <section className={styles.links}>
        <Link href="/">HOME</Link>
        <Link href="/inventory">BOOKS</Link>
        <Link href="/admin">ADMIN</Link>
        <Link href="/user">USER</Link>
        <Link href="/about-us">ABOUT-US</Link>
      </section>
      <section className={styles.sign}>{session ? <div onClick={handleLogout}>SIGN-OUT</div> : <Link href="/sign-in">SIGN-IN</Link>}</section>
    </nav>
  );
}
