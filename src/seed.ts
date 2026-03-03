import { Request, Response } from "express";
import { readFile } from 'fs/promises';

import { model } from './orderController.js';

export const seed = async (req: Request, res: Response) => {
  let data = await readFile('./src/data/MOCK_DATA_MATERIALS.json', 'utf-8')
  let orders = JSON.parse(data)
  await model.deleteMany({}).exec();
  await model.insertMany(orders)
  res.json({
    count: orders.length,
  })
};