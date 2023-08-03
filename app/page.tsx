"use client"

import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'

export default function Home() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const onclick = () => {
    router.push(`/hi/${username}`)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input data-test-id="name-input" className="border border-violet-400 focus:outline-2 focus:outline-offset-4 focus:outline-violet-400" type="text" onChange={onchange}/>
      <button data-test-id="submit-btn" onClick={onclick} disabled={!username}>Go</button>
      <a data-test-id="about" href='/about' className="flex items-center justify-center p-3 bg-slate-300">About</a>
      <a data-test-id="dashboard" href='/dashboard' className="flex items-center justify-center p-3 bg-slate-300">Dashboard</a>
      <a data-test-id="settings" href='/dashboard/settings' className="flex items-center justify-center p-3 bg-slate-300">Settings</a>
    </main>
  )
}
