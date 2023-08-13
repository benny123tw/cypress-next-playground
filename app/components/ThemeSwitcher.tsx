'use client'

import { THEMES } from '@/lib/constants'
import { SwatchIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

export default function ThemeSwitcher() {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    // eslint-disable-next-line prettier/prettier
    <div className="dropdown dropdown-end" title="Change Theme">
      <div tabIndex={0} className="btn btn-ghost normal-case">
        <SwatchIcon className="h-5 w-5" />
        <span className="hidden font-normal md:inline"></span>
        <ChevronDownIcon className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block" />
      </div>
      <div className="dropdown-content rounded-box top-px mt-16 h-[70vh] max-h-96 w-56 overflow-y-auto bg-base-200 text-base-content shadow">
        <div tabIndex={0} className="grid grid-cols-1 gap-3 p-3">
          {THEMES.map((theme) => (
            <button
              key={`theme-${theme}`}
              className="overflow-hidden rounded-lg text-left outline-base-content"
              data-set-theme={theme}
              data-act-class="[&amp;_svg]:visible"
            >
              <div
                data-theme={theme}
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="invisible h-3 w-3 shrink-0"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm">{theme}</div>{' '}
                    <div className="flex h-full flex-shrink-0 flex-wrap gap-1">
                      <div className="w-2 rounded bg-primary"></div>{' '}
                      <div className="w-2 rounded bg-secondary"></div>{' '}
                      <div className="w-2 rounded bg-accent"></div>{' '}
                      <div className="w-2 rounded bg-neutral"></div>{' '}
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
