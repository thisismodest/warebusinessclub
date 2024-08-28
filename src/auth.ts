import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";

import Google from 'next-auth/providers/google';
import LinkedInProvider from "next-auth/providers/linkedin";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google,
    LinkedInProvider({
      clientId: process.env.AUTH_LINKEDIN_CLIENT_ID,
      clientSecret: process.env.AUTH_LINKEDIN_CLIENT_SECRET
    })
  ],
  pages: {
    signIn: '/login',
  },
  // callbacks: {
  //   async signIn({ account, profile }) {
  //     if (account?.provider === "google") {
  //       return profile?.email_verified
  //     }
  //     return true // Do different verification for other providers that don't have `email_verified`
  //   },
  // },
})