import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a data-test-id="about" href='/about' className="flex items-center justify-center p-3 bg-slate-300">About</a>
      <a data-test-id="dashboard" href='/dashboard' className="flex items-center justify-center p-3 bg-slate-300">Dashboard</a>
      <a data-test-id="settings" href='/dashboard/settings' className="flex items-center justify-center p-3 bg-slate-300">Settings</a>
    </main>
  )
}
