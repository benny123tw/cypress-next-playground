'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import TheInput from './components/TheInput'
import TheCounter from './components/TheCounter'

export default function Home() {
  const [username, setUsername] = useState('')
  const router = useRouter()

  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const go = () => {
    if (username) router.push(`/hi/${username}`)
  }

  return (
    <main className="flex flex-col justify-center items-center p-10">
      <div className="prose flex flex-col gap-4">
        <h1>Test</h1>
        <TheInput
          data-test-id="name-input"
          className="border border-violet-400 focus:outline-2 focus:outline-offset-4 focus:outline-violet-400"
          onChange={onchange}
          onKeyDown={(e) => e.key === 'Enter' && go()}
        />
        <TheCounter />
      </div>
    </main>
  )
}
