import { Request, Response } from "express";
import { query } from "../utils/sqlServer";
export const postClient = async (req: Request, res: Response) => {
  const { name, lastname, gender } = req.body
  res.send(await query(`INSERT INTO CLIENTS(Name, Lastname, Gender) Values('${name}', '${lastname}', '${gender}')`))
}