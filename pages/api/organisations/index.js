import dbConnect from "lib/dbConnect";
import Organisation from "models/enterprise/organisation";
import _ from "lodash";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const organisations = await Organisation.find({});
        res.status(200).json({ success: true, data: organisations });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const organisations = await Organisation.create({ ...req.body });
        res.status(201).json({ success: true, data: organisations });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
