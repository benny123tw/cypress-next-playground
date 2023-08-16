import { allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    slug: string
  }
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) notFound()

  return doc
}

export default async function Post({ params: { slug } }: Props) {
  const doc = await getDocFromParams(slug)

  return <>{JSON.stringify(doc)}</>
}
