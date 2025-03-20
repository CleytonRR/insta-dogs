import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const isLoginPage = request.nextUrl.pathname.startsWith('/login');
  const isContaPage = request.nextUrl.pathname.startsWith('/conta');

  const token = request.cookies.get('token')?.value;

  console.log(token);

  if (isLoginPage && token) {
    return NextResponse.redirect(new URL('/conta', request.url));
  }

  if (isContaPage && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/conta/:path*', '/login/:path*'],
};
