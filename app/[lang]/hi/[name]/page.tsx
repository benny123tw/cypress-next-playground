import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

interface Params {
  name: string
  lang: Locale
}

export default async function HelloWorld({ params: { name, lang } }: { params: Params }) {
  const dict = await getDictionary(lang)
  return (
    <div>
      {dict.page.hello.greeting}, {name}
    </div>
  )
}
