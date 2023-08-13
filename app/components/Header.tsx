import { Dictionary } from '@/lib/dictionary'
import LocaleSwitcher from './LocalSwitcher'
import {} from '@heroicons/react/24/outline'
import { Locale } from '@/i18n.config'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'

interface Props {
  dict: Dictionary
  lang: Locale
}

export default function Header({ dict, lang }: Props) {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-circle btn-ghost">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <Link href={`/${lang}/`}>{dict.navigation.home}</Link>
            </li>
            <li>
              <Link href={`/${lang}/about`}>{dict.navigation.about}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost hidden text-xl normal-case sm:block">Next 13.4 & Cypress</a>
      </div>
      <div className="flex-none">
        <ThemeSwitcher />
        <LocaleSwitcher lang={lang} />
      </div>
    </div>
  )
}
