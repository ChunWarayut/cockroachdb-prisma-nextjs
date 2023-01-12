import { NextResponse } from "next/server";

const isAuthen = (user, pwd) => {
  if (user === process.env.API_USER && pwd === process.env.API_PASSWPRD)
    return true;
  return false;
};

export async function middleware(req) {
  const basicAuth = req.headers.get("authorization");
  if (req.nextUrl.pathname === "/api/auth/unauthorized")
    return NextResponse.next();
  if (basicAuth) {
    const auth = basicAuth.split(" ")[1];
    const [user, pwd] = Buffer.from(auth, "base64").toString().split(":");
    if (isAuthen(user, pwd)) {
      return NextResponse.next();
    }
  }
  req.nextUrl.pathname = "/api/auth/unauthorized";
  return NextResponse.redirect(req.nextUrl);
}

export const config = {
  matcher: ["/api/:path*"],
};
