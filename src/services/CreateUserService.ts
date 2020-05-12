import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const users = getRepository(User);

    const checkUserExists = await users.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new Error('Email address already used.');
    }
    // Gera o hash do password
    const hashedPassword = await hash(password, 8);

    const user = users.create({
      name,
      email,
      password: hashedPassword,
    });

    await users.save(user);

    return user;
  }
}

export default CreateUserService;
