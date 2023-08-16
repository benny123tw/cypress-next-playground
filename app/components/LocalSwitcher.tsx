'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Locale, i18n } from '@/i18n.config'
import { LanguageIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

interface Props {
  lang: Locale
}

export default function LocaleSwitcher({ lang }: Props) {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    // eslint-disable-next-line prettier/prettier
    <div className="dropdown dropdown-end">
      <button className="btn btn-ghost m-1">
        <LanguageIcon className="h-5 w-5" />
        <ChevronDownIcon className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block" />
      </button>
      <ul className="menu dropdown-content rounded-box z-[1] w-52 bg-base-100 p-2 shadow">
        {i18n.locales.map((locale) => {
          return (
            <li key={`locale-${locale}`}>
              <Link href={redirectedPathName(locale)} className={cn({ active: lang === locale })}>
                {locale}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
