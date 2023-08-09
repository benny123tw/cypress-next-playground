'use client'

import { Locale } from '@/i18n.config'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'

interface Props {
  lang: Locale
}

export default function NameInput({ lang }: Props) {
  const [username, setUsername] = useState('')
  const router = useRouter()

  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const go = () => {
    if (username) router.push(`${lang}/hi/${username}`)
  }
  return (
    <input
      data-test-id="name-input"
      className="w-full input input-primary"
      onChange={onchange}
      onKeyDown={(e) => e.key === 'Enter' && go()}
    />
  )
}
