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
  callbacks: {
    session({ session, user }) {

      // console.log("Session callback", session, user);
      console.log("SEESSS", { user })
      session.user.role = user.role
      return session
    }
  },
})