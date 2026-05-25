import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import cidades from "./data/cidades.json";

// Lookup: slug sem hífens → slug correto (ex: "presidenteprudente" → "presidente-prudente")
const slugNormMap = new Map<string, string>(
  cidades.map((c) => [c.slug.replace(/-/g, ""), c.slug])
);

const CITY_PREFIXES = ["/criacao-de-sites", "/loja-virtual", "/landing-page"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Normaliza slugs de cidade digitados sem hífen (redireciona para slug correto)
  for (const prefix of CITY_PREFIXES) {
    if (pathname.startsWith(prefix + "/")) {
      const rest = pathname.slice(prefix.length + 1);
      const slug = rest.split("/")[0];
      if (slug) {
        const correctSlug = slugNormMap.get(slug.toLowerCase());
        if (correctSlug && correctSlug !== slug) {
          const url = request.nextUrl.clone();
          url.pathname = `${prefix}/${correctSlug}`;
          return NextResponse.redirect(url, { status: 301 });
        }
      }
    }
  }

  // Canonical: remove trailing slash (except root)
  if (pathname !== "/" && pathname.endsWith("/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, { status: 301 });
  }

  const response = NextResponse.next();

  // Security & SEO headers
  response.headers.set("X-Robots-Tag", "index, follow");
  response.headers.set("Vary", "Accept-Encoding");

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
