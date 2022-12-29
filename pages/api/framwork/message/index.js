import dbConnect from "lib/dbConnect";
import { doSuccess, doError } from "utils/response";
import Message from "models/framwork/message";
import _ from "lodash";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const messages = await Message.find({});
        return doSuccess(res, messages);
      } catch (err) {
        return doError(res, "EXCEPTION", err.message);
      }
    case "POST":
      try {
        const messages = await Message.insertMany(req.body);
        return doSuccess(res, messages);
      } catch (err) {
        return doError(res, "EXCEPTION", err.message);
      }
    default:
      return doError(res, "METHERR");
  }
}
