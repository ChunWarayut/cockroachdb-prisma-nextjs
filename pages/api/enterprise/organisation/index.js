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
        return doSuccess(res, organisations);
      } catch (err) {
        return doError(res, "EXCEPTION", err.message);
      }
    case "POST":
      try {
        const organisations = await Organisation.create({ ...req.body });
        return doSuccess(res, organisations);
      } catch (err) {
        return doError(res, "EXCEPTION", err.message);
      }
    default:
      return doError(res, "METHERR");
  }
}
