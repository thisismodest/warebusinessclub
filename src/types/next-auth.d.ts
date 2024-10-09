import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      businessName: string | null | undefined,
      phoneNumber: string | null | undefined,
      businessEmail: string | null | undefined,
      website: string | null | undefined,
      socials: {
        tiktok: string | null | undefined,
        twitter: string | null | undefined,
        facebook: string | null | undefined,
        instagram: string | null | undefined,
        something: string | null | undefined,
      },
      description: string | null | undefined,
      businessLoc: string | null | undefined,
      businessMap: string | null | undefined,
      profileUrl: string | null | undefined,
      role: number,
    } & DefaultSession["user"]
  }
}

declare module "@auth/core/adapters" {
  interface AdapterUser {
    role: number
  }
}