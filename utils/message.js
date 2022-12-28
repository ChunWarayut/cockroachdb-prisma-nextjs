import dbConnect from "lib/dbConnect";
import Message from "models/framwork/message";
export async function getMessage(code) {
  await dbConnect();
  const msg = await Message.findOne({ code });
  return msg;
}
