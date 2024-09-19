'use server'

import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {

  const session = await auth();
  if (!session || !session?.user?.id) {
    return redirect("/login")
  } else {
    const { id: userId, profileUrl } = session.user;
    return redirect(`/profile/${profileUrl || userId}`);
  }
}