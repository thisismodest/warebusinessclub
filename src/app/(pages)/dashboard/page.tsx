import BusinessList from "@/app/components/business-list/business-list";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {

  const businesses = [
    {
      photo: "https://placehold.co/500x500",
      businessName: "Ware to work",
      humanName: "Marina",
      profileUrl: "",
    },
    {
      photo: "https://placehold.co/500x500",
      businessName: "Modest Industries Ltd",
      humanName: "Marcus Michaels",
      profileUrl: "",
    },
    {
      photo: "https://placehold.co/500x500",
      businessName: "Thickbrook accountants",
      humanName: "Someone cool",
      profileUrl: "",
    },
    {
      photo: "https://placehold.co/500x500",
      businessName: "Midest Ondostries Lootd",
      humanName: "Morcus Mochals",
      profileUrl: "",
    },
    {
      photo: "https://placehold.co/500x500",
      businessName: "Modest Industries Ltd",
      humanName: "Marcus Michaels",
      profileUrl: "",
    },
    {
      photo: "https://placehold.co/500x500",
      businessName: "Modest Industries Ltd",
      humanName: "Marcus Michaels",
      profileUrl: "",
    }
  ]

  const session = await auth();

  if (!session) {
    return redirect("/login");
  }

  return (
    <>
      <h1>Dashboard</h1>
      <section>
        <h2>Local businesses:</h2>
        <BusinessList businesses={businesses} />
      </section>
      <section>
        <h2>Council announcements:</h2>
        <ul>
          <li>Some fun event</li>
          <li>Some road closure</li>
          <li>Some other good-to-know-about thing</li>
        </ul>
      </section>
    </>
  )
}