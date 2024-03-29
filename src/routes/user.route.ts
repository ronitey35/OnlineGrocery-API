import { createUser, getAllUsers } from '@/controllers/user.controller';
import express from 'express';

const router = express.Router();
export const userRoute = router;

router.get('/users', getAllUsers);
router.post('/register', createUser);
