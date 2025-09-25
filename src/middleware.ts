import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { campuses } from "./lib/campuses";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host") || "";

  // ✅ Local dev fallback: allow ?campus=northshore
  if (hostname.includes("localhost")) {
    const campusQuery = url.searchParams.get("campus");
    if (campusQuery && campusQuery in campuses) {
      url.pathname = `/${campusQuery}${url.pathname}`;
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  // ✅ Production: check subdomain
  if (hostname === "avantlifechurch.com" || hostname === "www.avantlifechurch.com") {
    return NextResponse.next(); // main homepage
  }

  const subdomain = hostname.split(".")[0];

  if (subdomain in campuses) {
    url.pathname = `/${subdomain}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
