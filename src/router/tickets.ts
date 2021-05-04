import express from 'express';

import { getAllTickets } from '../controller';

const tickets = express.Router();

tickets.get('/tickets', async (req, res, next) => {
  try {
    const { query } = req;
    const response = await getAllTickets(query);

    if (!query) return res.sendStatus(404).send('query not found');

    return res.json(response);
  } catch (error) {
    return next(error);
  }
});

export = tickets;
