

import styles from "./page.module.css";
import Button from "./ui/button/button";
import WareOutline from "./svg/ware-outline";

import { auth } from "@/auth";


export default async function Home() {

  const session = await auth();

  console.log(session);

  const mailTo = "mailto:businessclub@modestindustries.co?subject=I want to join Ware Business Club&body=Hello :)%0D%0APlease fill in the details below:%0D%0A%0D%0A%0D%0ABusiness name:%0D%0AWebsite:%0D%0AEmail:%0D%0AReason for wanting to join:%0D%0A";

  return (
    <>
      <section className={styles["intro-section"]}>
        <div className={styles["intro-wrapper"]}>
          <div className={styles.intro}>
            <h1 className={styles.header}>Thrive with other local business owners</h1>

            <p>Elevate your business by becoming an exclusive Ware Business Club member, your local network for growth and collaboration.</p>

            <p>Connect with fellow entrepreneurs, share valuable insights, and enjoy exclusive member discounts. Together, we can help each other thrive.</p>

            <Button className={styles.button} goToUrl={mailTo}>Join now for free</Button>

            <p className={styles["beta-text"]}>During our beta program membership is <em>free for all businesses</em>.</p>
          </div>
          <WareOutline
            className={styles["intro-svg"]}
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
        </div>
      </section>
      <section className={styles.requirements}>
        <div className={"wrapper"}>
          <h2 className="section-title">Membership requirements:</h2>
          <ul>
            <li>
              <div className={styles["emoji-icon"]}>🏢</div>
              <p>You are a limited company director of any size</p>
            </li>
            <li>
              <div className={styles["emoji-icon"]}>📍</div>
              <p>Your business operates, or is physically based in or around Ware</p>
            </li>
            <li>
              <div className={styles["emoji-icon"]}>🤝</div>
              <p>You want to network with other local and likeminded businesses</p>
            </li>
            <li>
              <div className={styles["emoji-icon"]}>💞</div>
              <p>You like supporting other local businesses (e.g. offering advice and insights)</p>
            </li>
            <li>
              <div className={styles["emoji-icon"]}>💷</div>
              <p>You are open to offering member-only discounts that encourages local engagement</p>
            </li>
            <li>
              <div className={styles["emoji-icon"]}>👩‍🔬</div>
              <p>You are happy to join an exclusive group and be a beta tester of this platform</p>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles["code-of-conduct"]}>
        <div className={"wrapper"}>
          <h2 className="section-title">Code of conduct:</h2>
          <p>Ware Business Club is exclusively designed as a way for local businesses to connect with each other and help each other grow. Be kind, be helpful.</p>
        </div>
      </section>
      <section className={styles["working-bg-section"]}>
        <Button className={styles.button} invertColor={true} goToUrl={mailTo}>Become a member</Button>
      </section>
    </>
  );
}
