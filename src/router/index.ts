import express from 'express';

import tickets from './tickets';

const router = express.Router();

router.use(tickets);

export = router;
