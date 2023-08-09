import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

import { Locale, i18n } from '@/i18n.config'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request: NextRequest): string | undefined {
  const headers = new Headers(request.headers)
  const acceptLanguage = headers.get('accept-language')
  if (acceptLanguage) {
    headers.set('accept-language', acceptLanguage.replaceAll('_', '-'))
  }

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales
  const headersObject = Object.fromEntries(headers.entries())
  const languages = new Negotiator({ headers: headersObject }).languages()

  if (languages.includes('*')) {
    languages.splice(
      languages.findIndex((l) => l === '*'),
      1,
    )
    languages.push('en')
  }

  const locale = matchLocale(languages, locales, i18n.defaultLocale)
  return locale
}

function replacePathnameWithNewLocale(pathname: string, newLocale: Locale) {
  const regexp = new RegExp(newLocale, 'i')
  console.log(regexp.test(pathname))
  return pathname.replace(regexp, newLocale)
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const lowercasePathname = request.nextUrl.pathname.toLowerCase()
  const targetLocale = i18n.locales.find(
    (locale) =>
      lowercasePathname.startsWith(`/${locale.toLowerCase()}/`) ||
      lowercasePathname === `/${locale.toLowerCase()}`,
  )

  // Redirect if there is no locale
  if (!targetLocale) {
    const locale = getLocale(request)
    return NextResponse.rewrite(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url),
    )
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  if (pathnameIsMissingLocale && targetLocale) {
    return NextResponse.rewrite(
      new URL(
        replacePathnameWithNewLocale(pathname, targetLocale),
        replacePathnameWithNewLocale(request.url, targetLocale),
      ),
    )
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!_next|api|favicon.ico).*)'],
}
