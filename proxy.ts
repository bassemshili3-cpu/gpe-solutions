import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy(_req: NextRequest) {
  const res = NextResponse.next();

  // CSP DEV-friendly (sinon Next dev peut casser)
  res.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      "connect-src 'self' ws: http://localhost:* http://127.0.0.1:*",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; ")
  );

  return res;
}

// IMPORTANT: applique le proxy à toutes les routes (sauf assets statiques si tu veux)
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};


