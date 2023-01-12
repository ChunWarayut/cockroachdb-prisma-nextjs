import dbConnect from "lib/dbConnect";
import User from "@/models/enterprise/users";
import { createSuccess, redSuccess, doError } from "utils/response";
import { hashedPassword } from "utils/encrypt";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const datas = await User.find({});
        return redSuccess(res, datas);
      } catch (err) {
        return doError(res, "EXCEPTION", err.message);
      }
    case "POST":
      try {
        const users = req.body;
        users.password = hashedPassword(users.password);
        const datas = await User.insertMany(req.body);
        return createSuccess(res, datas);
      } catch (err) {
        return doError(res, "EXCEPTION", err.message);
      }
    default:
      return doError(res, "METHERR");
  }
}
