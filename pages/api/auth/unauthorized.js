import { getMessage } from "utils/message";
export default async function handler(req, res) {
  res.status(401).json({ result: await getMessage("AUTERR") });
}
