"use client";
import styles from "../../../styles/navbar.module.css";
import Image from "next/image";
const Logo = () => {
  return <Image alt="logo" className={styles.logo} height="60" width="200" src="/images/logo.png" />;
};

export default Logo;
