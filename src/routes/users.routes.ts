import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

usersRouter.post('/', async (request, response) => {
  const { email, password, name } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    password,
  });

  delete user.password;

  return response.json(user);
});

usersRouter.get('/', ensureAuthenticated, async (request, response) => {
  const user = request.user;

  return response.json(user);
});

export default usersRouter;
