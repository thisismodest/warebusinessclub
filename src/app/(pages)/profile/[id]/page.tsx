'use server'
import ProfileCard from "@/app/components/profile-card/profile-card";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {

  const session = await auth();
  if (!session || !session?.user?.id) return redirect("/login");

  const { id: userId, profileUrl } = session.user;
  const { id } = params;

  const userCanEdit =
    id.toLowerCase() === userId.toLowerCase()
    || id.toLowerCase() === profileUrl?.toLowerCase();

  console.log({ userCanEdit });
  return (
    <section style={{ paddingBottom: "5rem" }}>
      <ProfileCard profileId={id} editable={userCanEdit} />
    </section>
  );
}