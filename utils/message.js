import dbConnect from "lib/dbConnect";
import Message from "models/framwork/message";
// import _ from "lodash";

export async function getMessage(code) {
  await dbConnect();
  const msg = await Message.findOne({ code });
  const result = {
    status: msg.status,
    code: msg.code,
    message: msg.message,
    localMessage: msg.localMessage,
  };

  return result;
}
