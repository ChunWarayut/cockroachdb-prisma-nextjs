import dbConnect from "lib/dbConnect";
import { doSuccess, doError } from "utils/response";
import Quotation from "models/project/quotation";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const datas = await Quotation.find({});
        return doSuccess(res, datas);
      } catch (err) {
        return doError(res, "EXCEPTION", err.message);
      }
    case "POST":
      try {
        const datas = await Quotation.insertMany(req.body);
        return doSuccess(res, datas);
      } catch (err) {
        return doError(res, "EXCEPTION", err.message);
      }
    default:
      return doError(res, "METHERR");
  }
}
