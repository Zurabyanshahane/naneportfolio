import type { Metadata } from 'next'
import { requireLang } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Privacy',
  robots: { index: false },
}

export default async function PrivacyPage({ params }: PageProps<'/[lang]/privacy'>) {
  await requireLang(params)

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-[720px] px-6">
        <h1 className="text-[clamp(2rem,5vw,3rem)]">Privacy</h1>
        <div className="mt-6 leading-relaxed text-clay">
          <p>[Placeholder — add your privacy note here.]</p>
          <p className="mt-4">
            [Since you use a contact form, this page should explain what data (name, email,
            message) you collect and why. A free privacy-policy generator can help you write it.]
          </p>
        </div>
      </div>
    </section>
  )
}
