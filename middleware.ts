import { NextRequest, NextResponse } from "next/server";
// export { default } from "next-auth/middleware";

// export const config = {
//   matcher: ["/"],
//   // matcher: ["/((?!register|api|login).*)"],
// };

export function middleware(request: NextRequest) {
  return NextResponse.next()
}