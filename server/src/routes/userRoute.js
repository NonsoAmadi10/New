import express from 'express';

import controller  from '../controllers/user.controller';

const { Router } = express;

const router = Router();

router.post('/register', controller.signUp);

router.post('/signin', controller.loginUser);

export default router;