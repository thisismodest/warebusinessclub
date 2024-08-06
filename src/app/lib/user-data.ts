'use server'

import { Prisma } from '@prisma/client'
import prisma from "../../prisma";

interface UserProps {
  email: string;
  name: string;
  password: string;
}

export const createUser = async (userObj: UserProps) => {
  const { email, name, password } = userObj;

  try {
    const User = await prisma.user.create({
      data: {
        email,
        name,
        password
      },
    });
    return {
      success: true,
      user: User
    };
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