'use server';
import { auth } from "@/auth";


// const userAllowed = async (userId: string) => {
//   const session = await auth();

//   if (!session || !session?.user) return false;
//   if (session.user?.id !== userId) return false;

//   return true;
// }

// const sessionWithMinimumRole = async (minimumRole: number = 0) => {
//   const session = await auth();

//   if (!session || !session?.user) return false;
//   if (session.user.role < minimumRole) return false;

//   return true;
// }


interface Restrictions {
  userId?: string,
  // Available roles: unverified=0, guest=1, member=2, admin=3
  minimumRole?: 0 | 1 | 2 | 3
};

export const restrictedSession = async (restrictedBy: Restrictions | null = null) => {
  const session = await auth();

  // Generic session check
  if (!session || !session?.user) return null;

  // Check if session is restricted to a specific userId
  if (restrictedBy?.userId && session.user?.id !== restrictedBy.userId) return null;

  // Check if session is protected by a minimum role
  if (restrictedBy?.minimumRole && session.user?.role < restrictedBy.minimumRole) return null;


  // If we're here, nothing tripped the wire so we're theoretically good
  return session;
}