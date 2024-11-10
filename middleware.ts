import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '@Utils/locale/i18nConfig';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locales = i18nConfig.locales;
  if (pathname === '/' || locales.some(locale => pathname === `/${locale}`)) {
    return NextResponse.redirect(new URL('/about-us', request.url));
  }

  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};
