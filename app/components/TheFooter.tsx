import Link from 'next/link'

export default function TheFooter() {
  return (
    <nav className="flex gap-4 mt-6 justify-center text-xl">
      <Link
        data-test-id="footer-home"
        href="/"
        className="hover:bg-violet-500 hover:text-white transition-colors ease-in-out p-2"
      >
        Home
      </Link>
      <Link
        data-test-id="footer-about"
        href="/about"
        className="hover:bg-violet-500 hover:text-white transition-colors ease-in-out p-2"
      >
        About
      </Link>
    </nav>
  )
}
