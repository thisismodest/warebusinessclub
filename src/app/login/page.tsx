'use client'

import styles from '@/app/login/login.module.css';
// import pageStyles from '@/app/page.module.css';
import WareOutline from "@/app/svg/ware-outline";

import Button from '../ui/button/button';
import Input from '../ui/input/input';
import { useState } from 'react';

export default function Page() {
  const mailTo = "mailto:businessclub@modestindustries.co?subject=I want to join Ware Business Club&body=Hello :)%0D%0APlease fill in the details below:%0D%0A%0D%0A%0D%0ABusiness name:%0D%0AWebsite:%0D%0AEmail:%0D%0AReason for wanting to join:%0D%0A";

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    if (!formJson.email || !formJson.password) {
      setErrorMessage("Email or password is missing")
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setErrorMessage("Unsuccessful attempt");
      }, 500);
    }
  }

  return <>
    <WareOutline
      className={styles["ware-town-svg"]}
      strokeColor="#c9e6dd"
      strokeWidth={10}
    >
      <div className={styles.circle} style={{ top: "30%", right: "30%" }}></div>
      {/* <div className={styles.circle} style={{ top: "40%", right: "40%" }}></div> */}
      <div className={styles.circle} style={{ top: "13%", right: "53%" }}></div>
      <div className={styles.circle} style={{ top: "54%", right: "90%" }}></div>
      {/* <div className={styles.circle} style={{ top: "60%", right: "40%" }}></div> */}
      <div className={styles.circle} style={{ top: "63%", right: "50%" }}></div>
      {/* <div className={styles.circle} style={{ top: "40%", right: "60%" }}></div> */}
      <div className={styles.circle} style={{ top: "13%", right: "10%" }}></div>
      <div className={styles.circle} style={{ top: "44%", right: "17%" }}></div>
    </WareOutline>
    <section className={`wrapper ${styles.header}`}>
      <h1>Login to your local business network</h1>
      <form method="post" className={styles.form} onSubmit={handleSubmit}>
        <Input id="email" name="email" labelName='Email address' placeholder="email address" type="email" />
        <Input id="password" name="password" labelName='Password' placeholder="password" type="password" />
        <span style={{ color: "red" }}>{errorMessage}</span>
        <Button type="submit" submitText={!loading ? "Log in" : "Logging in..."} disabled={loading} onClick={handleSubmit} className={styles.button} size='small' />
      </form>
    </section>
    {/* <section className={pageStyles["working-bg-section"]}>
      <Button className={pageStyles.button} invertColor={true} goToUrl={mailTo}>Become a member</Button>
    </section> */}
  </>
}