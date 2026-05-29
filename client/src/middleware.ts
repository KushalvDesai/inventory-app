import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const path = request.nextUrl.pathname;

  // Define public routes that don't require authentication
  const isPublicRoute = path === '/login' || path === '/signup';

  if (!token && !isPublicRoute) {
    // Redirect to login if accessing a protected route without a token
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (token && isPublicRoute) {
    // Redirect to home/dashboard if accessing auth routes while logged in
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Basic Role Based Access Control (RBAC)
  if (token) {
    try {
      // Decode JWT payload (base64 string is the second part of the token)
      const payloadBase64 = token.split('.')[1];
      const decodedJson = Buffer.from(payloadBase64, 'base64').toString('ascii');
      const payload = JSON.parse(decodedJson);

      const role = payload.role;

      // Example route protection based on role:
      if (path.startsWith('/admin') && role !== 'admin') {
        return NextResponse.redirect(new URL('/', request.url));
      }

      if (path.startsWith('/owner-dashboard') && role !== 'owner' && role !== 'admin') {
        return NextResponse.redirect(new URL('/', request.url));
      }
    } catch (e) {
      // Invalid token, redirect to login
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('token');
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
