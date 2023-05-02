import { Request, Response } from "express";
import { query } from "../utils/sqlServer";
export const getClients = async (req: Request, res: Response) => {
  res.send(await query('SELECT * FROM Clients'))
}