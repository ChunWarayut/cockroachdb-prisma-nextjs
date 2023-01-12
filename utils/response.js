import dbConnect from "lib/dbConnect";
import { getMessage } from "./message";
import _ from "lodash";

export function doSuccess(res, data) {
  return res.status(200).json({
    result: {
      status: "SUCCESS",
      code: "SUCCESS",
      message: "Success",
      messageThai: "ทำรายการสำเร็จ",
    },
    data,
  });
}
export async function doError(res, code, err) {
  await dbConnect();
  const msg = await getMessage(code);
  if (msg) msg.errMessage = err;
  return res.status(400).json({
    results: msg,
  });
}
