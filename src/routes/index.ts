import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ ok: 'main' }));

export default routes;
