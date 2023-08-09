import NameInput from '@/components/NameInput'
import Counter from '@/components/Counter'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { page } = await getDictionary(lang)

  return (
    <div>
      <h1>{page.home.title}</h1>
      <p>{page.home.description}</p>

      <div className="space-y-4">
        <NameInput lang={lang} />
        <Counter />
      </div>
    </div>
  )
}
