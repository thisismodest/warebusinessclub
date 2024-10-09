import BusinessList from "@/app/components/business-list/business-list";
import { redirect } from "next/navigation";
import styles from "@/app/(pages)/dashboard/dashboard.module.css";

import { restrictedSession } from "@/helpers/session-helper";

import { getBusinesses } from "@/lib/user-data";

export default async function Page() {
  // Authenticate user
  const session = await restrictedSession() || redirect("/login");
  const hasValidRole = session.user.role > 0;

  if (!hasValidRole) return (
    <>
      <section className={styles.wrapper} style={{ textAlign: "center", paddingTop: "4rem" }}>
        <h2>Awaiting verification</h2>
        <p>If you're seeing this page, please <a href="mailto:businessclub@modestindustries.co">contact us</a> for verification.</p>
        <p>It may be because you haven't joined the early-access membership list yet, or your email address is different than what we have pre-approved.</p>
        <p>In the meantime, you can still view and edit your <a href="/profile/edit">profile details here</a>.</p>
      </section>
    </>
  )

  const userBusiness = await getBusinesses(session.user?.id);

  const businesses = userBusiness.map((user) => {
    return {
      image: user.image || "/img/not-found.png",
      businessName: user.businessName,
      humanName: user.name || "Business owner",
      profileUrl: user.profileUrl || user.id,
    }
  })

  return (
    <>
      <section className={styles.wrapper}>
        <h1>Dashboard</h1>
        <div className={styles["highlights-wrapper"]}>
          <section className={styles.highlight}>
            <h2>Local businesses:</h2>
            <BusinessList businesses={businesses} />
          </section>
          <section className={styles.highlight}>
            <h2>Local broadcasts:</h2>
            <ul className={styles.announcements}>
              <li><span>[29/07/2024]</span> WIT Meeting on Tuesday 24th September from 6pm. Venue TBC</li>
              <li><span>[27/08/2024]</span> REMINDER: WIT Meeting on Tuesday 24th September from 6pm</li>
              <li><span>[10/09/2024]</span> Swans loose and terrorising dogs along Star Street</li>
              <li><span>[16/09/2024]</span> Thieves operating in the area – distraction thefts and shoplifting</li>
            </ul>
            <br />
            <h2>Council updates:</h2>
            <ul className={styles.announcements}>
              <li><span>[01/07/2024]</span> Road closures on 27th August 2024 for Old Town Live</li>
              <li><span>[17/09/2024]</span> East Herts Council large grants scheme deadline approaching (30th Sept)</li>
              <li><span>[19/09/2024]</span> Dickensian Evening will return on Friday, 6th December 2024 from 6:30pm to 9:30pm (roads closed 6-10pm)</li>
            </ul>
          </section>
        </div>
      </section>
    </>
  )
}