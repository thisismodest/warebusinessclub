
import { signIn } from "@/auth";
import SignInWithGoogleButton from "@/app/ui/vendor/google/sign-in-with-google-button";
import SignInWithLinkedinButton from "@/app/ui/vendor/linkedin/sign-in-with-linkedin-button";

export default function SignIn() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyItems: "center" }}>
      <form
        action={async () => {
          "use server"
          await signIn("google")
        }}
      >
        <SignInWithGoogleButton type="submit" />
      </form>
      <form
        action={async () => {
          "use server"
          await signIn("linkedin")
        }}
      >
        <SignInWithLinkedinButton type="submit" />
      </form>
    </div >
  )
} 