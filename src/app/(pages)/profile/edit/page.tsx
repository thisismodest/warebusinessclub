'use server'
import ProfileCard from "@/app/components/profile-card/profile-card";
import ProfileDetailsForm from "@/app/components/profile-details-form/profile-details-form";

import FormModal from "@/app/components/form-modal/form-modal";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {

  const session = await auth();
  if (!session?.user) return redirect("/login");

  const { id } = session.user;

  const formFields = [
    {
      inputId: "personal-name",
      inputLabel: "What do you like to be called?",
      inputPlaceholder: "Jane Doe",
    },
    {
      inputId: "business-name",
      inputLabel: "Company Name",
      inputPlaceholder: "Ware Business Club Ltd",
    },
    {
      inputId: "business-email",
      inputLabel: "Company email address",
      // inputValue: "",
      inputType: "email",
      inputPlaceholder: "jane.doe@example.com",
    },
    {
      inputId: "personal-phone",
      inputLabel: "Your phone number (ideally one that matches the WhatsApp group)",
      // inputValue: "",
      inputType: "tel",
      inputPlaceholder: "07777 777 777",
    },
    {
      inputId: "business-map",
      inputLabel: "Google Maps embed URL",
      // inputValue: "",
      inputPlaceholder: "jane.doe@example.com",
    },
    {
      inputId: "business-description",
      inputLabel: "Company Name",
      inputPlaceholder: "Ware Business Club Ltd",
    },
  ]
  return (
    <section style={{ paddingBottom: "5rem" }}>

      <FormModal formFields={formFields} formAction={() => { console.log("hey") }} />

      <ProfileCard profileId={id} />

      {/* <ProfileDetailsForm profileId={id} /> */}
    </section>
  );
}