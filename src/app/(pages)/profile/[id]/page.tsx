'use server'
import ProfileCard from "@/app/ui/profile-card/profile-card";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {

  const session = await auth();
  if (!session) return redirect("/login");

  const { id } = params;

  return (
    <section style={{ paddingBottom: "5rem" }}>
      <ProfileCard profileId={id} />
    </section>
  );
}