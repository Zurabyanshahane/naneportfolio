import type { Metadata } from "next";
import Link from "next/link";
import { requireLang } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { t } from "@/lib/translations";
import TurningHead from "@/components/TurningHead";
import FilterGallery from "@/components/FilterGallery";

// Hero images. To swap one, point src at another file in public/art or
// public/dolls and update w/h to that file's pixel size.
// `backdrop` is the large translucent panel bleeding off the right edge;
// `feature` is the card floating in the middle.
const backdrop = { src: "/art/red-fox.jpg", label: "Red Fox", w: 874, h: 1280 };

// Watercolour birds as a soft background wash. They are painted on white
// paper, so `mix-blend-multiply` drops the paper; the radial mask and low
// opacity let them fade into the page instead of sitting on top of it.
const birds = [
  { src: "/art/jay.jpg", className: "left-[3%] -top-[3%] w-[21%]" },
  { src: "/art/blue-tit.jpg", className: "left-[42%] bottom-[10%] w-[23%]" },
];

// Single atmospheric image behind the three area blocks.
const SHARED_BACKDROP = "/theatre/papik/swan.jpg";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const lang = await requireLang(params);
  const meta = pageMetadata(lang, "", "Soul of a Doll", t.meta.site[lang]);
  // Avoid "Soul of a Doll · Soul of a Doll" from the title template
  return { ...meta, title: { absolute: "Soul of a Doll" } };
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const lang = await requireLang(params);

  // Real stages from the studio: sketches beside the finished piece, the
  // same piece on the workbench, an unpainted form, a finished doll.
  const processImages = [
    '/theatre/gexeckuhi/goblin-mask-with-sketches.jpg',
    '/theatre/gexeckuhi/goblin-mask-in-progress.jpg',
    '/masks/white-masks-group.jpg',
    '/dolls/clown-girl.jpg',
  ]

  const galleryFilters = [
    { key: 'all', label: t.gallery.all[lang] },
    { key: 'animals', label: t.gallery.animals[lang] },
    { key: 'characters', label: t.gallery.characters[lang] },
    { key: 'birds', label: t.gallery.birds[lang] },
    { key: 'masks', label: t.gallery.masks[lang] },
    { key: 'ornaments', label: t.gallery.ornaments[lang] },
  ]

  // Tag each piece so the filters have something to work with.
  const galleryItems = [
    { src: '/dolls/clown-girl.jpg', alt: 'Clown girl', tags: ['characters'] },
    { src: '/dolls/hedgehog-with-net.jpg', alt: 'Hedgehog with net', tags: ['animals'] },
    { src: '/dolls/hedgehog-portrait.jpg', alt: 'Hedgehog', tags: ['animals'] },
    { src: '/dolls/rabbit-in-velvet.jpg', alt: 'Rabbit in velvet', tags: ['animals'] },
    { src: '/dolls/rabbit-with-baby.jpg', alt: 'Rabbit with baby', tags: ['animals'] },
    { src: '/dolls/blue-haired-girl.jpg', alt: 'Blue-haired girl', tags: ['characters'] },
    { src: '/theatre/isahakyan/red-haired-head.jpg', alt: 'Red-haired head', tags: ['characters'] },
    { src: '/theatre/isahakyan/king-with-crown.jpg', alt: 'King with crown', tags: ['characters'] },
    { src: '/theatre/isahakyan/old-man-in-tartan.jpg', alt: 'Old man in tartan', tags: ['characters'] },
    { src: '/theatre/isahakyan/woman-with-headscarf.jpg', alt: 'Woman with headscarf', tags: ['characters'] },
    { src: '/theatre/isahakyan/seated-boy.jpg', alt: 'Seated boy', tags: ['characters'] },
    { src: '/theatre/isahakyan/gardeners-pair.jpg', alt: 'Gardeners', tags: ['characters'] },
    { src: '/theatre/isahakyan/finger-puppets-set.jpg', alt: 'Finger puppets', tags: ['characters'] },
    { src: '/dolls/snow-baby.jpg', alt: 'Snow baby', tags: ['ornaments'] },
    { src: '/dolls/christmas-elf.jpg', alt: 'Christmas elf', tags: ['ornaments'] },
    { src: '/dolls/winter-ornaments.jpg', alt: 'Winter ornaments', tags: ['ornaments'] },
    { src: '/dolls/balloon-and-rabbit.jpg', alt: 'Balloon and rabbit', tags: ['ornaments', 'animals'] },
    { src: '/dolls/unicorn-lavender.jpg', alt: 'Unicorn', tags: ['animals', 'ornaments'] },
    { src: '/art/jay.jpg', alt: 'Jay', tags: ['birds', 'animals'] },
    { src: '/art/blue-tit.jpg', alt: 'Blue tit', tags: ['birds', 'animals'] },
    { src: '/art/kingfisher.jpg', alt: 'Kingfisher', tags: ['birds', 'animals'] },
    { src: '/art/oropendola.jpg', alt: 'Oropendola', tags: ['birds', 'animals'] },
    { src: '/art/red-fox.jpg', alt: 'Red fox', tags: ['animals'] },
    { src: '/art/raccoon.jpg', alt: 'Raccoon', tags: ['animals'] },
    { src: '/art/flying-fox.jpg', alt: 'Flying fox', tags: ['animals'] },
    { src: '/theatre/papik/swan.jpg', alt: 'Swan', tags: ['birds', 'animals'] },
    { src: '/theatre/papik/turtle-head.jpg', alt: 'Turtle', tags: ['animals'] },
    { src: '/theatre/papik/fish-blue.jpg', alt: 'Fish', tags: ['animals'] },
    { src: '/masks/masks-installation.jpg', alt: 'Mask installation', tags: ['masks'] },
    { src: '/masks/harlequin.jpg', alt: 'Harlequin mask', tags: ['masks', 'characters'] },
    { src: '/masks/white-masks-group.jpg', alt: 'Unpainted masks', tags: ['masks'] },
    { src: '/masks/red-mask.jpg', alt: 'Red mask', tags: ['masks', 'characters'] },
    { src: '/masks/black-mask.jpg', alt: 'Black mask', tags: ['masks', 'characters'] },
    { src: '/masks/green-and-black.jpg', alt: 'Green and black masks', tags: ['masks'] },
    { src: '/masks/black-and-red.jpg', alt: 'Black and red masks', tags: ['masks'] },
    { src: '/theatre/gexeckuhi/old-woman-mask.jpg', alt: 'Old woman mask', tags: ['masks', 'characters'] },
    { src: '/theatre/gexeckuhi/goblin-mask-with-sketches.jpg', alt: 'Goblin mask', tags: ['masks'] },
    { src: '/theatre/gexeckuhi/golden-headdress.jpg', alt: 'Golden headdress', tags: ['masks', 'characters'] },
  ]

  // `card` is the piece itself and is never cropped.
  const areas = [
    {
      href: `/${lang}/dolls`,
      title: t.nav.dolls[lang],
      intro: t.home.dollsIntro[lang],
      card: "/dolls/clown-girl.jpg",
    },
    {
      href: `/${lang}/theatre`,
      title: t.nav.theatre[lang],
      intro: t.home.theatreIntro[lang],
      card: "/masks/white-masks-group.jpg",
      // Cut-out PNGs. The three-quarter view is mirrored for the opposite
      // direction, so both sides share identical framing and don't jitter.
      head: [
        { src: "/theatre/head-turned.png", mirrored: true },
        { src: "/theatre/head-front.png" },
        { src: "/theatre/head-turned.png" },
      ] as [
        { src: string; mirrored?: boolean },
        { src: string; mirrored?: boolean },
        { src: string; mirrored?: boolean },
      ],
    },
    {
      href: `/${lang}/digital-art`,
      title: t.nav.digital[lang],
      intro: t.home.digitalIntro[lang],
      card: "/art/jay.jpg",
    },
  ];

  return (
    <>
      {/* Hero */}
      {/* Full-height: viewport minus the 4.5rem sticky header */}
      <section className="relative flex items-center overflow-hidden md:min-h-[calc(100svh-4.5rem)]">
        {/* Large translucent artwork, bleeding off the right edge */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={backdrop.src}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-75"
            fetchPriority="high"
          />
          {/* Soften the left edge so it melts into the page */}
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/40 to-transparent" />
          {/* …and fade the bottom out, so the section ends without a hard cut */}
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-cream via-cream/70 to-transparent" />
        </div>

        {/* Birds drifting through the empty space */}
        {birds.map((bird) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={bird.src}
            src={bird.src}
            alt=""
            aria-hidden="true"
            style={{
              // Long, soft fade so there is no visible edge at all
              maskImage:
                "radial-gradient(ellipse at center, black 48%, transparent 84%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 48%, transparent 84%)",
            }}
            className={`pointer-events-none absolute hidden opacity-40 mix-blend-multiply lg:block ${bird.className}`}
          />
        ))}

        <div className="relative mx-auto w-full max-w-page px-6 py-12 md:py-16">
          <div className="grid items-center gap-12 md:grid-cols-12 md:gap-8">
            {/* Text side */}
            <div className="md:col-span-7">
              <p className="flex items-center gap-2 text-xs tracking-[0.18em] text-clay uppercase">
                <span
                  aria-hidden="true"
                  className="inline-block h-1.5 w-1.5 rounded-full bg-bordeaux"
                />
                {t.home.eyebrow[lang]}
              </p>

              <h1 className="mt-6 text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] md:whitespace-nowrap">
                {t.home.greeting[lang]}
              </h1>

              <p className="mt-5 text-sm tracking-[0.12em] text-bordeaux uppercase md:whitespace-nowrap">
                {t.home.roles[lang]}
              </p>

              <p className="mt-6 max-w-md text-clay">{t.home.heroText[lang]}</p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link href={`/${lang}/dolls`} className="btn">
                  {t.home.viewWork[lang]}
                </Link>
                <Link
                  href={`/${lang}/about`}
                  className="text-sm tracking-wide text-clay underline underline-offset-4 transition-colors hover:text-ink"
                >
                  {t.home.aboutMe[lang]}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portrait + short introduction */}
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-page px-6">
          <div className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/portrait.jpg"
              alt="Nane"
              width={1122}
              height={1402}
              className="mx-auto h-auto w-full max-w-xs grayscale md:col-span-5 md:max-w-none"
            />

            <div className="md:col-span-6 md:col-start-7">
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)]">
                {t.about.title[lang]}
              </h2>
              <p className="mt-6 text-lg text-clay">{t.about.body[lang]}</p>
              <div className="mt-8">
                <Link
                  href={`/${lang}/about`}
                  className="text-sm tracking-wide text-clay underline underline-offset-4 transition-colors hover:text-ink"
                >
                  {t.home.aboutMe[lang]}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wide image, shown whole — never cropped — with its edges
          dissolving into the page instead of sitting in a hard rectangle */}
      <section className="pt-6 md:pt-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/theatre/papik/fish-tail.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1448}
          height={1086}
          style={{
            // Only the bottom needs softening — that was the hard edge.
            // Fading the top as well just smeared the grey studio wall into
            // the cream and looked dirty, so the top is left alone.
            maskImage:
              'linear-gradient(to bottom, black 0%, black 74%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 0%, black 74%, transparent 100%)',
          }}
          className="scroll-surface h-auto w-full saturate-[0.8] contrast-[1.04]"
        />
      </section>

      {/* Statement, framed by small corner labels.
          Pulled up into the space the photo has already faded out of, so
          the reader reaches the words instead of scrolling through white. */}
      <section className="relative -mt-[26vh] pb-12 md:-mt-[32vh] md:pb-20">
        <div className="mx-auto max-w-page px-6">
          <div className="flex justify-between text-[0.65rem] tracking-[0.25em] text-clay uppercase">
            {areas.map((area) => (
              <span key={area.href}>{area.title}</span>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-2xl text-center md:mt-14">
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] tracking-wide uppercase">
              {t.home.statement[lang]}
            </h2>
            <p className="mt-4 text-sm tracking-[0.12em] text-clay uppercase">
              {t.home.eyebrow[lang]}
            </p>

            <div className="mt-10 grid gap-8 text-left text-sm leading-relaxed text-clay md:grid-cols-2 md:gap-12">
              {t.home.statementBody[lang].map((paragraph, n) => (
                <p key={n}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10">
              <Link href={`/${lang}/dolls`} className="btn btn-outline">
                {t.home.viewWork[lang]}
              </Link>
            </div>
          </div>

          <div className="mt-12 flex justify-between text-[0.65rem] tracking-[0.25em] text-clay uppercase md:mt-16">
            <span>{t.home.roles[lang].split('·')[0].trim()}</span>
            <span>{t.footer.tagline[lang].split('·')[0].trim()}</span>
            <span>{t.home.eyebrow[lang].split('·').pop()?.trim()}</span>
          </div>
        </div>
      </section>

      {/* One image behind all three blocks: no seams to smooth over at all.
          It is pure atmosphere — washed back so the cards and text carry. */}
      <div className="relative overflow-hidden bg-sand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={SHARED_BACKDROP}
          alt=""
          aria-hidden="true"
          loading="lazy"
          style={{
            // Fade in at the top, out at the bottom, so the grey field
            // hands over softly to the page above and the footer below
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
            // Overscan, so the heavy blur has no soft edge at the borders
            transform: "scale(1.15)",
          }}
          /* Blurred hard: at 25% opacity the swan was still readable as an
             object and came across as blotchy. Out of focus it reads as
             light and texture instead, which is all it was ever meant to be.
             Scaled up so the blur has no soft edge at the borders. */
          className="absolute inset-0 h-full w-full object-cover opacity-45 blur-3xl grayscale"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-sand/50" />

        {areas.map((area, i) => (
          <section
            key={area.href}
            /* The theatre block goes dark: the mask is white, and it
               disappears against the pale field the other two sit on */
            className={`relative py-16 md:py-24 ${i === 1 ? 'bg-ink' : ''}`}
          >
            <div className="relative mx-auto max-w-page px-6">
              <div className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
                {/* The piece itself, uncropped */}
                <div
                  className={
                    i === 1
                      ? "md:col-span-4 md:col-start-8 md:row-start-1"
                      : "md:col-span-4 md:row-start-1"
                  }
                >
                  {area.head ? (
                    // The mask turns to follow the cursor
                    <TurningHead
                      views={area.head}
                      alt={area.title}
                      className="mx-auto w-full max-w-xs md:max-w-none"
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={area.card}
                      alt={area.title}
                      loading="lazy"
                      className="mx-auto h-auto w-full max-w-xs shadow-[0_30px_60px_-15px_rgba(44,38,32,0.45)] md:max-w-none"
                    />
                  )}
                </div>

                {/* Text */}
                <div
                  className={
                    i === 1
                      ? "md:col-span-6 md:col-start-1 md:row-start-1"
                      : "md:col-span-6 md:col-start-6 md:row-start-1"
                  }
                >
                  <h2
                    className={`text-[clamp(2rem,4vw,3.25rem)] ${
                      i === 1 ? 'text-cream' : ''
                    }`}
                  >
                    {area.title}
                  </h2>
                  <div
                    className={`mt-6 h-px w-full ${
                      i === 1 ? 'bg-cream/20' : 'bg-ink/15'
                    }`}
                  />
                  <p
                    className={`mt-6 max-w-md text-sm leading-relaxed ${
                      i === 1 ? 'text-cream/70' : 'text-clay'
                    }`}
                  >
                    {area.intro}
                  </p>
                  <div className="mt-8">
                    <Link
                      href={area.href}
                      className={
                        i === 1
                          ? 'btn border border-cream bg-transparent text-cream'
                          : 'btn btn-outline'
                      }
                    >
                      {t.home.viewWork[lang]}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* How a piece comes about */}
      <section className="bg-sand py-16 md:py-24">
        <div className="mx-auto max-w-page px-6">
          <h2 className="mb-10 text-center text-[clamp(1.75rem,3.5vw,2.75rem)] md:mb-16">
            {t.process.title[lang]}
          </h2>

          <ol className="grid gap-10 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {t.process.steps.map((step, n) => (
              <li key={n}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={processImages[n]}
                  alt={step.title[lang]}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
                <div className="mt-4 text-xs tracking-[0.2em] text-bordeaux uppercase">
                  {String(n + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-2 text-xl">{step.title[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-clay">
                  {step.text[lang]}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Filterable gallery */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-page px-6">
          <h2 className="mb-10 text-center text-[clamp(1.75rem,3.5vw,2.75rem)] md:mb-14">
            {t.gallery.title[lang]}
          </h2>
          <FilterGallery items={galleryItems} filters={galleryFilters} />
        </div>
      </section>

      {/* Closing call to action */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-heading text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.25] text-balance">
            {t.contact.intro[lang]}
          </p>

          <div className="mt-10">
            <Link href={`/${lang}/contact`} className="btn">
              {t.nav.contact[lang]}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
