import express, {Router} from "express";

import radheKrishna from './RadheKrishna';
import taskRoutes from './taskRoutes';
import taskStatusRoutes from './taskStatusRoutes';


const router: Router = express.Router();

router.use('/',radheKrishna);
router.use('/',taskRoutes);
router.use('/',taskStatusRoutes);

export default router;

