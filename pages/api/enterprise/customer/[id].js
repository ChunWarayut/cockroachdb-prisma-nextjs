import _ from "lodash";
import dbConnect from "lib/dbConnect";
import { doSuccess, doError } from "utils/response";
import Customer from "@/models/enterprise/customer";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const datas = await Customer.findOne({ _id: req.query.id });
        return doSuccess(res, datas);
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
        return doSuccess(res, datas);
      } catch (err) {
        return doError(res, "EXCEPTION", err.message);
      }
    case "DELETE":
      try {
        const datas = await Customer.deleteById(req.query.id);
        return doSuccess(res, datas);
        // res
        //   .status(200)
        //   .json({ success: true, data: _.omit(users, ["password"]) });
      } catch (err) {
        // res.status(400).json({ success: false });
        return doError(res, "EXCEPTION", err.message);
      }
    // break;
    default:
      return doError(res, "METHERR");
    //res.status(400).json({ success: false });
    // break;
  }
}
