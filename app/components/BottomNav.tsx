'use client'

import { Locale } from '@/i18n.config'
import Link from 'next/link'
import type { Dictionary } from '@/lib/dictionary'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { HomeIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

interface Props {
  lang: Locale
  dict: Dictionary['navigation']
}

export default function BottomNav({ lang, dict }: Props) {
  const pathname = usePathname()

  const isHome = new RegExp(`^(?:\/${lang})?\/?$`, 'i')
  const isAbout = new RegExp(`^(?:\/${lang})?\/about\/?$`, 'i')

  return (
    <div className="btm-nav h-12 sm:h-16 ">
      <Link
        data-test-id="footer-home"
        href={`/${lang}`}
        className={cn({ active: isHome.test(pathname) })}
      >
        <HomeIcon className="h-5 w-5" />
        <label className="btm-nab-label hidden sm:block">{dict.home}</label>
      </Link>
      <Link
        data-test-id="footer-about"
        href={`/${lang}/about`}
        className={cn({
          active: isAbout.test(pathname),
        })}
      >
        <InformationCircleIcon className="h-5 w-5" />
        <label className="btm-nab-label hidden sm:block">{dict.about}</label>
      </Link>
    </div>
  )
}
