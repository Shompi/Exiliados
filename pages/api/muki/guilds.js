import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import keyv from "keyv";

const GuildsDatabase = new keyv('sqlite://guilds.sqlite', { namespace: 'guilds' });

/**
 * 
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 
 */
async function POST(req, res) {
  console.log(`Recibido POST request a /guilds desde ${req.socket.remoteAddress}\nCon contenido ${req.body}`);

  if (req.headers['content-type'] !== 'application/json') {
    return res.status(400).json({ message: "ERROR: content-type is not set to application/json" });
  }

  const token = req.headers['token'];

  if (!token)
    return res.status(401).json({ message: "No se recibió un token valido en el header." });

  await GuildsDatabase.set('0', req.body);

  res.status(200).json({ message: "Tu request ha sido recibido con éxito!" });
}


/**
 * 
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 
 */
export default async function handler(req, res) {

  switch (req.method) {
    case 'POST':
      POST(req, res);
      break;

    case 'GET':
      const guilds = await GuildsDatabase.get('0') ?? [];
      res.status(200).json({ message: "GET request succesful", guilds });
      break;

    default:
      res.status(405).json({ message: "Este punto de la API no acepta este método de petición." });
  }
}
