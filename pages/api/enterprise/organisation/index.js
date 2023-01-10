import dbConnect from "lib/dbConnect";
import { createSuccess, redSuccess, doError } from "utils/response";
import Organisation from "models/enterprise/organisation";
import _ from "lodash";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const organisations = await Organisation.find({});
        return redSuccess(res, organisations);
      } catch (err) {
        return doError(res, "EXCEPTION", err.message);
      }
    case "POST":
      try {
        const organisations = await Organisation.create({ ...req.body });
        return createSuccess(res, organisations);
      } catch (err) {
        return doError(res, "EXCEPTION", err.message);
      }
    default:
      return doError(res, "METHERR");
  }
}
