import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { protectedRoutes } from "./utils/protectedRoutes";

export default withAuth(
  function middleware(req) {
    const { token } = req.nextauth;
    const { pathname } = req.nextUrl;

    if (!token) return NextResponse.redirect("/auth/signin");
    if (token.role === "Guest") {
      return NextResponse.rewrite(new URL("/unauthorized", req.url), {
        status: 403,
      });
    }

    const route = protectedRoutes.find((route) => route.regex.test(pathname));
    const isSubOrgan = !token.role.includes("Admin");

    const hasAccess =
      route &&
      (route.roles == "All" ||
        route.roles.includes(token.role) ||
        (isSubOrgan && route.roles.includes("SubOrgan")));

    if (route && !hasAccess) {
      return NextResponse.rewrite(new URL("/unauthorized", req.url), {
        status: 403,
      });
    }
  },
  {
    pages: {
      signIn: "/auth/signin",
    },
  },
);

export const config = {
  matcher: ["/admin/:path*", "/admin"],
};
