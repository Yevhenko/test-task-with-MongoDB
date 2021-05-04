import { ITicket, Ticket } from '../db/models';

export const getTickets = async (query: any): Promise<ITicket[]> => {
  try {
    const users = await Ticket.find({ userId: query.userId, priority: query.priority });

    return users;
  } catch (error) {
    throw new Error(error);
  }
};
