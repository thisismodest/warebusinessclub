'use server'
import ProfileCard from "@/app/components/profile-card/profile-card";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {

  const session = await auth();
  if (!session || !session?.user?.id) return redirect("/login");

  const { id: userId } = session?.user;

  return (
    <section style={{ paddingBottom: "5rem" }}>
      <div>EDIT</div>
      <ProfileCard profileId={userId} />
    </section>
  );
}