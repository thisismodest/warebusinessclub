import BusinessList from "@/app/components/business-list/business-list";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import styles from "@/app/(pages)/dashboard/dashboard.module.css";

import { getBusinesses } from "@/lib/user-data";

export default async function Page() {
  // Authenticate user
  const session = await auth();
  if (!session) return redirect("/login");

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