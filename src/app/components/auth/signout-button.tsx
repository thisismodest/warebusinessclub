"use client"
import { signOut } from "next-auth/react"
import Button from "@/app/ui/button/button"

export function SignOut() {
  return <Button size="small" onClick={() => signOut()}>Log out</Button>
}