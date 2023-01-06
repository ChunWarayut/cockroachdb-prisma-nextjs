import { NextResponse } from "next/server";
// import asyncBusboy from "async-busboy";

const isAuthen = (user, pwd) => {
  if (user === process.env.API_USER && pwd === process.env.API_PASSWPRD)
    return true;
  return false;
};

export async function middleware(req) {
  const basicAuth = req.headers.get("authorization");
  if (req.nextUrl.pathname === "/api/auth/unauthorized") {
    console.log("NextResponse.next()");
    return NextResponse.next();
  }
  if (basicAuth) {
    const auth = basicAuth.split(" ")[1];
    const [user, pwd] = Buffer.from(auth, "base64").toString().split(":");
    if (isAuthen(user, pwd)) {
      // if (req.nextUrl.pathname === "/api/project/file") {
      //   // req.nextUrl.pathname = "/blog";
      //   // console.log(req.body.fileType);
      //   return NextResponse.redirect(req.nextUrl);
      // }
      return NextResponse.next();
    }
  }
  console.log("yyy");
  req.nextUrl.pathname = "/api/auth/unauthorized";
  return NextResponse.redirect(req.nextUrl);
}

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
  matcher: ["/api/:path*"],
};
