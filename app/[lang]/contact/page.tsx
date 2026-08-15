import type { Metadata } from 'next'
import { requireLang } from '@/lib/i18n'
import { pageMetadata } from '@/lib/seo'
import { t } from '@/lib/translations'

const inputClass =
  'mt-2 w-full rounded-lg border border-line bg-cream px-4 py-3 text-base text-ink focus:border-bordeaux focus:outline-none'

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/contact'>): Promise<Metadata> {
  const lang = await requireLang(params)
  return pageMetadata(lang, '/contact', t.contact.title[lang], t.meta.contact[lang])
}

export default async function ContactPage({ params }: PageProps<'/[lang]/contact'>) {
  const lang = await requireLang(params)

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-[620px] px-6">
        <h1 className="text-[clamp(2rem,5vw,3.5rem)]">{t.contact.title[lang]}</h1>
        <p className="mt-6 text-lg text-clay">{t.contact.intro[lang]}</p>

        {/*
          Netlify Forms: data-netlify="true" + hidden form-name.
          Works automatically once the site is live on Netlify.
        */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="mt-10 flex flex-col gap-5"
        >
          <input type="hidden" name="form-name" value="contact" />

          <label className="text-sm tracking-wide text-clay">
            {t.contact.name[lang]}
            <input type="text" name="name" required className={inputClass} />
          </label>

          <label className="text-sm tracking-wide text-clay">
            {t.contact.email[lang]}
            <input type="email" name="email" required className={inputClass} />
          </label>

          <label className="text-sm tracking-wide text-clay">
            {t.contact.message[lang]}
            <textarea name="message" rows={5} required className={inputClass} />
          </label>

          <div>
            <button type="submit" className="btn">
              {t.contact.send[lang]}
            </button>
          </div>
        </form>

        <p className="mt-8 text-sm text-clay">
          {t.contact.orDm[lang]}{' '}
          <a
            href="https://www.instagram.com/soul_of_a_doll/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bordeaux"
          >
            @soul_of_a_doll
          </a>
        </p>
      </div>
    </section>
  )
}
