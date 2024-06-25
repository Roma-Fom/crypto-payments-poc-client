import { NextRequest, NextResponse } from "next/server";

const PrivateRoutes: Record<string, boolean> = {
  dashboard: true,
  checkout: true,
};

export default function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname.split("/")[1];
  if (PrivateRoutes[pathName] && !isAuth(request))
    return NextResponse.redirect(new URL("/", request.url));
  return NextResponse.next();
}

function isAuth(request: NextRequest): boolean {
  const header = process.env.AUTH_HEADER as string;
  const token = request.cookies.get(header);
  return Boolean(token);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
