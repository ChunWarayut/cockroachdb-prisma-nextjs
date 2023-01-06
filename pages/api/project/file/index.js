import dbConnect from "lib/dbConnect";
import { doSuccess, doError } from "utils/response";
// import { createReadStream } from 'fs';
// import { createModel } from 'mongoose-gridfs';
// import Quotation from "models/project/quotation";


export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  // const Attachment = createModel();
  // console.log("file");

  switch (method) {
    case "GET":
      try {
        // const datas = await Quotation.find({});
        return doSuccess(res, {});
      } catch (err) {
        return doError(res, "EXCEPTION", err.message);
      }
    case "POST":
      try {
        // const datas = await Quotation.insertMany(req.body);
        console.log("hello");
        return doSuccess(res, {});
      } catch (err) {
        return doError(res, "EXCEPTION", err.message);
      }
    default:
      return doError(res, "METHERR");
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};