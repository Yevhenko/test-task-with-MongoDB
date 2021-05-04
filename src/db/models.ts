import { model, Schema, Model, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
});

export interface ITicket extends Document {
  name: string;
  priority: number;
}

const TicketSchema: Schema = new Schema({
  name: { type: String, required: true },
  priority: { type: Number, required: true },
});

export const Ticket: Model<ITicket> = model('Ticket', TicketSchema);
export const User: Model<IUser> = model('User', UserSchema);
