import type { Metadata } from 'next'
import { requireLang } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Imprint',
  robots: { index: false },
}

export default async function ImprintPage({ params }: PageProps<'/[lang]/imprint'>) {
  await requireLang(params)

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-[720px] px-6">
        <h1 className="text-[clamp(2rem,5vw,3rem)]">Imprint</h1>
        <div className="mt-6 leading-relaxed text-clay">
          <p>[Placeholder — add your contact details here:]</p>
          <p className="mt-4">
            [Name]
            <br />
            [City, Country]
            <br />
            [Email address]
          </p>
        </div>
      </div>
    </section>
  )
}
