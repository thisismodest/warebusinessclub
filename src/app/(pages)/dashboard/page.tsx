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
    console.log(user);
    return {
      image: user.image || "not-found.png",
      businessName: user.businessName,
      humanName: user.name || "Business owner",
      profileUrl: user.profileUrl || user.id,
    }
  })

  console.log(businesses);

  return (
    <>
      <section className={styles.wrapper}>
        <h1>Dashboard</h1>
        <h2>Local businesses:</h2>
        <BusinessList businesses={businesses} />
      </section>

    </>
  )
}