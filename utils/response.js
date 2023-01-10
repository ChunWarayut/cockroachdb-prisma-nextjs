import dbConnect from "lib/dbConnect";
import { getMessage } from "./message";
import _ from "lodash";

export function createSuccess(res, data) {
  return res.status(201).json({
    result: {
      status: "SUCCESS",
      code: "SUCCESS",
      message: "Success",
      messageThai: "ทำรายการสำเร็จ",
    },
    data,
  });
}
export function redSuccess(res, data) {
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
export function updateSuccess(res, data) {
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
export function deleteSuccess(res) {
  return res.status(200).json({
    result: {
      status: "SUCCESS",
      code: "SUCCESS",
      message: "Success",
      messageThai: "ทำรายการสำเร็จ",
    },
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
