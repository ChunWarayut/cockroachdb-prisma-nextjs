import dbConnect from "lib/dbConnect";
import { createSuccess, redSuccess, doError } from "utils/response";
import ReferenceValue from "models/framwork/referencevalue";
import _ from "lodash";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const referencevsalue = await ReferenceValue.find({});
        return redSuccess(res, referencevsalue);
      } catch (err) {
        return doError(res, "EXCEPTION", err.message);
      }
    case "POST":
      try {
        const referencevsalue = await ReferenceValue.insertMany(req.body);
        return createSuccess(res, referencevsalue);
      } catch (err) {
        return doError(res, "EXCEPTION", err.message);
      }
    default:
      return doError(res, "METHERR");
  }
}
