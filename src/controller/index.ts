import { ITicket } from '../db/models';
import { getTickets } from '../models';

export const getAllTickets = async (): Promise<ITicket[] | null> => {
  try {
    const users = await getTickets();

    if (!users) return null;

    return users;
  } catch (error) {
    throw new Error(error);
  }
};
