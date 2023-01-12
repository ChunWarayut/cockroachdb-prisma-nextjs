import dbConnect from "lib/dbConnect";
import Message from "models/framwork/message";
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
export async function doError(res, code, message) {
  await dbConnect();
  const msg = await Message.findOne({ code });
  msg.errorMessage = message;
  return res.status(200).json({
    results: msg,
  });
}
