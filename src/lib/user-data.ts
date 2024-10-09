'use server'

// import { Prisma } from '@prisma/client'
import { prisma } from "@/prisma";
import { restrictedSession } from "@/helpers/session-helper";
// export const createUser = async (email: string, password: string) => {

//   try {
//     const User = await prisma.user.create({
//       data: {
//         email,
//         password
//       },
//     });
//     return User;
//   } catch (e) {
//     if (e instanceof Prisma.PrismaClientKnownRequestError) {
//       // The .code property can be accessed in a type-safe manner
//       if (e.code === 'P2002') {
//         console.log(
//           'There is a unique constraint violation, a new user cannot be created with this email'
//         );
//       }
//     }
//     throw e;
//   }
// }

// export const findSecureUser = async (email: string, hashedPassword: string) => {

//   try {
//     const User = await prisma.user.findUnique({ where: { email, password: hashedPassword } });
//     return User;
//   } catch (e) {
//     throw e;
//   }

// };

// export const findUser = async (email: string) => {

//   try {
//     const User = await prisma.user.findUnique({ where: { email } });
//     return User;
//   } catch (e) {
//     throw e;
//   }

// };

export const getBusinesses = async (userId: string | undefined) => {
  // Get all businesses profile's except the person who's requesting it

  try {
    const Businesses = await prisma.user.findMany({
      where: {
        id: { not: userId }
      },
      select: {
        id: true,
        image: true,
        businessName: true,
        name: true,
        profileUrl: true,
      }
    });

    return Businesses
  } catch (e) {
    throw e;
  }
}

export const getUserProfile = async (profileId?: string) => {
  try {
    const User = await prisma.user.findFirst({
      where: {
        OR: [
          {
            id: {
              equals: profileId,
              mode: 'insensitive'
            },
          },
          {
            profileUrl: {
              equals: profileId,
              mode: 'insensitive'
            }
          }
        ],
      },
      select: {
        name: true,
        email: true,
        image: true,
        businessName: true,
        phoneNumber: true,
        businessEmail: true,
        website: true,
        socials: true, // this is jsonb
        description: true,
        businessLoc: true,
        businessMap: true,
        profileUrl: true,
        role: true,
      }
    });

    return User;
  } catch (e) {
    throw e;
  }
}

export const updateUserProfile = async (userId: string, updateData: any) => {

  if (!await restrictedSession({ userId })) return false;

  try {
    const User = await prisma.user.update({
      where: {
        id: userId
      },
      data: updateData,
    });

    return User;
  } catch (e) {
    throw e;
  }
}