import { NextRequest, NextResponse } from "next/server";

const PrivateRoutes: Record<string, boolean> = {
  "/dashboard": true,
};

export default function middleware(request: NextRequest) {
  if (PrivateRoutes[request.nextUrl.pathname] && !isAuth(request))
    return NextResponse.redirect(new URL("/", request.url));

  return NextResponse.next();
}

function isAuth(request: NextRequest): boolean {
  const token = request.cookies.get("token");
  return Boolean(token);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
