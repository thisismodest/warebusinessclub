import styles from '@/app/(pages)/login/login.module.css';
import WareOutline from "@/app/svg/ware-outline";

import SignIn from '../../components/auth/signin-button';

import { redirect } from 'next/navigation';
import { restrictedSession } from '@/helpers/session-helper';

export default async function Page() {

  const session = await restrictedSession();

  if (session) {
    return redirect("/dashboard");
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
      <SignIn />
    </section>
  </>
}