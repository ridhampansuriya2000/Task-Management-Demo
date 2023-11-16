import express, { Router } from 'express';
import {getHTMLPage} from "./controller";
const router: Router = express.Router();

router.get('/', getHTMLPage);


export default router;