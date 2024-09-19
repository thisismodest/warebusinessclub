'use server'
import ProfileCard from "@/app/components/profile-card/profile-card";
import FormModal from "@/app/components/form-modal/form-modal";

import { auth } from "@/auth";
import { updateUserProfile } from "@/lib/user-data";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Page() {

  const session = await auth();
  if (!session?.user?.id) return redirect("/login");

  const { id: userId, profileUrl } = session.user;


  const formFields = [
    {
      inputId: "name",
      inputLabel: "What do you like to be called?",
      inputPlaceholder: session.user?.name || "Jane Doe",
    },
    {
      inputId: "businessName",
      inputLabel: "Company Name",
      inputPlaceholder: session.user?.businessName || "Ware Business Club Ltd",
    },
    {
      inputId: "businessEmail",
      inputLabel: "Company email address",
      inputPlaceholder: session.user?.businessEmail || "jane.doe@example.com",
      inputType: "email",
    },
    {
      inputId: "phoneNumber",
      inputLabel: "Your phone number (ideally one that matches the WhatsApp group)",
      inputPlaceholder: session.user?.phoneNumber || "07777 777 777",
      inputType: "tel",
    },
    {
      inputId: "businessLoc",
      inputLabel: "Business address",
      inputType: "address",
      inputPlaceholder: session.user?.businessLoc || "123 Star Street, Ware, Sg12 XXX",
    },
    {
      inputId: "businessMap",
      inputLabel: "Google Maps embed URL",
      inputPlaceholder: session.user?.businessMap || "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39468.40064683778!2d-0.038486!3d51.810271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8821561722129%3A0x341d9150b6621ddd!2sWare!5e0!3m2!1sen!2suk!4v1726700789799!5m2!1sen!2suk",
    },
    {
      inputId: "description",
      inputLabel: "Description of you and the company",
      inputType: "textarea",
      inputPlaceholder: session.user?.description || "Some details about what you and your company do",
    },
    {
      inputId: "profileUrl",
      inputLabel: "Custom profile url",
      inputPlaceholder: session.user?.profileUrl || "your-business-name",
    },
  ];

  const formAction = async (data: any) => {
    "use server";

    if (Object.keys(data).length < 1) return;
    console.log(data);

    try {
      const updatedUser = await updateUserProfile(userId, data);
      console.log({ updatedUser });

    } catch (e) {
      throw e;
    }
    revalidatePath(`/profile/${profileUrl || userId}`);
    redirect(`/profile/${profileUrl || userId}`);
  }

  return (
    <section style={{ paddingBottom: "5rem" }}>
      <FormModal formFields={formFields} formAction={formAction} ctaText="Save and go to profile" />
      {/* <ProfileDetailsForm profileId={id} /> */}
    </section>
  );
}