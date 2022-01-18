import Commands from "../../../Resources/muki-comandos"

export default async function handler(req, res) {
  res.status(200).json(Commands)
}
