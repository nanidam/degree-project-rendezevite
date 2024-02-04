export { default } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware"

export const config = {
  matcher: ["/api/:path*", "/events/:path*", "/admin/:path*"],
};
