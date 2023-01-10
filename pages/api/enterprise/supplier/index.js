import dbConnect from "lib/dbConnect";
import { createSuccess, redSuccess, doError } from "utils/response";
import Supplier from "@/models/enterprise/supplier";
import _ from "lodash";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const datas = await Supplier.find({});
        return redSuccess(res, datas);
      } catch (err) {
        return doError(res, "EXCEPTION", err.message);
      }
    case "POST":
      try {
        const datas = await Supplier.insertMany(req.body);
        return createSuccess(res, datas);
      } catch (err) {
        return doError(res, "EXCEPTION", err.message);
      }
    default:
      return doError(res, "METHERR");
  }
}
