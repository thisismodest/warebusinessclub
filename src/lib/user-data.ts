'use server'

import { Prisma } from '@prisma/client'
import { prisma } from "@/prisma";

export const createUser = async (email: string, password: string) => {

  try {
    const User = await prisma.user.create({
      data: {
        email,
        password
      },
    });
    return User;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === 'P2002') {
        console.log(
          'There is a unique constraint violation, a new user cannot be created with this email'
        );
      }
    }
    throw e;
  }
}

export const findSecureUser = async (email: string, hashedPassword: string) => {

  try {
    const User = await prisma.user.findUnique({ where: { email, password: hashedPassword } });
    return User;
  } catch (e) {
    throw e;
  }

};

export const findUser = async (email: string) => {

  try {
    const User = await prisma.user.findUnique({ where: { email } });
    return User;
  } catch (e) {
    throw e;
  }

};