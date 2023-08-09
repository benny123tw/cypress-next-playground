'use client'

import { Locale } from '@/i18n.config'
import Link from 'next/link'
import type { Dictionary } from '@/lib/dictionary'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

interface Props {
  lang: Locale
  dict: Dictionary['navigation']
}

export default function BottomNav({ lang, dict }: Props) {
  const pathname = usePathname()

  const isHome = new RegExp(`^(?:\/${lang})?\/?$`, 'i')
  const isAbout = new RegExp(`^(?:\/${lang})?\/about\/?$`, 'i')

  return (
    <div className="btm-nav">
      <Link
        data-test-id="footer-home"
        href={`/${lang}`}
        className={cn({ active: isHome.test(pathname) })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <label className="btm-nab-label">{dict.home}</label>
      </Link>
      <Link
        data-test-id="footer-about"
        href={`/${lang}/about`}
        className={cn({
          active: isAbout.test(pathname),
        })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <label className="btm-nab-label">{dict.about}</label>
      </Link>
    </div>
  )
}
