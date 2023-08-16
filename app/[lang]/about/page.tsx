// import MDXWrapper from '@/components/MDXWrapper'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function About({ params: { lang } }: { params: { lang: Locale } }) {
  const { page } = await getDictionary(lang)

  return (
    <div>
      <div>
        <h1>{page.about.title}</h1>
        <p>{page.about.description}</p>
        {/* <MDXWrapper /> */}
      </div>
    </div>
  )
}
