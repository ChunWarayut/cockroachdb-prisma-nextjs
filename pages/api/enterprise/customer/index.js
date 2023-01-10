import dbConnect from "lib/dbConnect";
import { createSuccess, doError } from "utils/response";
import Customer from "@/models/enterprise/customer";
import _ from "lodash";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const datas = await Customer.find({});
        return redSuccess(res, datas);
      } catch (err) {
        return doError(res, "EXCEPTION", err.message);
      }
    case "POST":
      try {
        const datas = await Customer.insertMany(req.body);
        return createSuccess(res, datas);
      } catch (err) {
        return doError(res, "EXCEPTION", err.message);
      }
    default:
      return doError(res, "METHERR");
  }
}
