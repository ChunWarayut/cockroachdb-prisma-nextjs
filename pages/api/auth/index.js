import _ from "lodash";

import dbConnect from "lib/dbConnect";
import { doSuccess, doError } from "utils/response";
import { comparePassword } from "utils/encrypt";
import User from "@/models/enterprise/users";
import Role from "@/models/framwork/role";

export default async function handler(req, res) {
  try {
    await dbConnect();
    const code = req.body.user;
    const password = req.body.password;
    if (!password || !code) {
      return doError(res, "AUTERR");
    }
    const userInfo = await User.findOne({ code }).populate("userRoles.roleId");
    const isAuthen = await comparePassword(password, userInfo.password);
    userInfo.password = undefined;
    if (isAuthen) return doSuccess(res, userInfo);
    return doError(res, "AUTERR");
  } catch (err) {
    return doError(res, "EXCEPTION", err.message);
  }
}
