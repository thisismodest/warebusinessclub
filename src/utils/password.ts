import bcrypt from 'bcrypt';

export const saltAndHashPassword = (hashedPassword: string) => {
  const saltRounds = 12;
  let hashed = "";

  bcrypt.hash(hashedPassword, saltRounds, function (err, hash) {
    if (err) {
      return err;
    } else {
      hashed = hash;
    }
  });

  return hashed;
}

export const comparePassword = async (password: string, hashedPassword: string) => {
  try {
    await bcrypt.compare(password, hashedPassword);
  } catch (e) {
    console.error(e);
  }
}