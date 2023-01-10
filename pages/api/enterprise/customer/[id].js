import _ from "lodash";
import dbConnect from "lib/dbConnect";
import { updateSuccess, deleteSuccess, doError } from "utils/response";
import Customer from "@/models/enterprise/customer";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const datas = await Customer.findOne({ _id: req.query.id });
        return redSuccess(res, datas);
      } catch (err) {
        return doError(res, "EXCEPTION", err.message);
      }
    case "PUT":
      try {
        const datas = await Customer.findByIdAndUpdate(
          req.query.id,
          { ...req.body },
          { upsert: true }
        );
        return updateSuccess(res, datas);
      } catch (err) {
        return doError(res, "EXCEPTION", err.message);
      }
    case "DELETE":
      try {
        await Customer.deleteById(req.query.id);
        return deleteSuccess(res);
      } catch (err) {
        return doError(res, "EXCEPTION", err.message);
      }
    default:
      return doError(res, "METHERR");
  }
}
