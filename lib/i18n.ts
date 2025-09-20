export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

type Dictionary = typeof import('../messages/en.json');

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('../messages/en.json').then((mod) => mod.default),
  es: () => import('../messages/es.json').then((mod) => mod.default)
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loader = dictionaries[locale] ?? dictionaries.en;
  return loader();
}

export function createTranslator(dictionary: Dictionary) {
  return function translate(path: string): string {
    const keys = path.split('.');
    let current: unknown = dictionary;
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = (current as Record<string, unknown>)[key];
      } else {
        throw new Error(`Missing translation for ${path}`);
      }
    }

    if (typeof current === 'string') {
      return current;
    }

    throw new Error(`Translation for ${path} is not a string`);
  };
}
