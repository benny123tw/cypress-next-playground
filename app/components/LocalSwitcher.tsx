'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '@/i18n.config'

export default function LocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn m-1">
        Click
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link
                href={redirectedPathName(locale)}
                className="hover:bg-violet-500 hover:text-white transition-colors ease-in-out p-2"
              >
                {locale}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
