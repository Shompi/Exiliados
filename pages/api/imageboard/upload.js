import { NextApiRequest, NextApiResponse } from "next"
import * as fs from "fs"
import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

const imagePath = "./public/"
/**
 * 
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 
 */
export default async function handler(req, res) {

  await runMiddleware(req, res, cors)
  console.log("incoming request...");

  const base64Data = req.body.file.data.replace(/^data:image\/png;base64,/, "");
  fs.writeFileSync(imagePath + req.body.file.name, base64Data, { encoding: 'base64' });
  res.status(200).json({ message: "¡La imagen ha sido recibida exitosamente!" });
}