import { NextApiRequest, NextApiResponse } from "next"

/**
 * 
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 
 */
export default function handler(req, res) {

  console.log(req.body)

  res.status(200).json({ message: "Recibido!" });
}