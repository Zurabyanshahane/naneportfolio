import type { Metadata } from "next";
import Link from "next/link";
import { requireLang } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { t } from "@/lib/translations";
import TurningHead from "@/components/TurningHead";

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
const SHARED_BACKDROP = "/theatre/swan.jpg";

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
      card: "/theatre/white-mask-profile.jpg",
      // Cut-out PNGs. Only two clean ones exist, so the three-quarter view
      // is mirrored to cover the opposite direction.
      head: [
        { src: "/theatre/white-mask-angle.png", mirrored: true },
        { src: "/theatre/white-mask-front.png" },
        { src: "/theatre/white-mask-angle.png" },
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
          }}
          className="absolute inset-0 h-full w-full object-cover opacity-25 grayscale"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-sand/40" />

        {areas.map((area, i) => (
          <section key={area.href} className="relative py-16 md:py-24">
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
                  <h2 className="text-[clamp(2rem,4vw,3.25rem)]">
                    {area.title}
                  </h2>
                  <div className="mt-6 h-px w-full bg-ink/15" />
                  <p className="mt-6 max-w-md text-sm leading-relaxed text-clay">
                    {area.intro}
                  </p>
                  <div className="mt-8">
                    <Link href={area.href} className="btn btn-outline">
                      {t.home.viewWork[lang]}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
