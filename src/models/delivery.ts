import { Schema } from "mongoose";
import { schema as address } from './address.js';

export interface Delivery {

}

export const schema = new Schema<Delivery>({
  first_name:{ type: String, required: true },
  last_name: { type: String, required: true },
  address: address,
})