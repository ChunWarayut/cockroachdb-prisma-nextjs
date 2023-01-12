import dbConnect from "lib/dbConnect";
import { doSuccess, doError } from "utils/response";
import Organisation from "models/enterprise/organisation";
import _ from "lodash";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const organisations = await Organisation.find({});
        // res.status(200).json({ success: true, data: organisations });
        return doSuccess(res, organisations);
      } catch (error) {
        return doError(res, "DATANF", error);
        //res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const organisations = await Organisation.create({ ...req.body });
        // res.status(201).json({ success: true, data: organisations });
        return doSuccess(res, organisations);
      } catch (error) {
        return doError(res, "DATANF", error.message);
        // res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
