import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = {
  en: () => import('@/locales/en.json').then((module) => module.default),
  'zh-tw': () => import('@/locales/zh-TW.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>
