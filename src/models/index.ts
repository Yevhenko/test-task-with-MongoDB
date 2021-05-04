import { ITicket, Ticket } from '../db/models';

export const getTickets = async (): Promise<ITicket[]> => {
  try {
    const users = await Ticket.find();

    return users;
  } catch (error) {
    throw new Error(error);
  }
};
