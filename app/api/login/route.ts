import { apiCaller } from "@/shared/lib";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await apiCaller.post<{ message: string }>(
      "/auth/login",
      body
    );
    const cookie = result.headers["set-cookie"]?.[0];
    if (!cookie)
      return Response.json({ message: "Unauthorized" }, { status: 500 });
    setClientCookie(cookie);
    return Response.json({ message: "Hello!" });
  } catch (e) {
    return Response.json({ message: "An error occurred" }, { status: 500 });
  }
}

function setClientCookie(cookie: string) {
  const cookieStore = cookies();
  const cookieParts = getCookieParts(cookie);
  const header = process.env.AUTH_HEADER as string;

  cookieStore.set(header, cookieParts[header], {
    path: cookieParts["Path"],
    expires: new Date(cookieParts["Expires"]),
    httpOnly: cookieParts.hasOwnProperty("HttpOnly"),
    secure: false,
    sameSite: cookieParts["SameSite"],
  });
}

function getCookieParts(cookie: string): Record<string, any> {
  return cookie.split("; ").reduce((acc: Record<string, any>, part) => {
    const [key, value] = part.split("=");
    acc[key] = isFlag(key, value) ? true : value;
    return acc;
  }, {});
}

function isFlag(key: string, value: string | undefined) {
  if (typeof key === "string" && value === undefined) return true;
  return false;
}
