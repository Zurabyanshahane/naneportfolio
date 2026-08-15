// All website text in three languages.
// Fill in the placeholders here — RU and HY to be completed later.

export type Lang = 'en' | 'ru' | 'hy'

export const languages: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'hy', label: 'HY' },
]

export const t = {
  nav: {
    dolls: { en: 'Dolls', ru: 'Куклы', hy: 'Տիկնիկներ' },
    theatre: { en: 'Theatre', ru: 'Театр', hy: 'Թատրոն' },
    digital: { en: 'Digital Art', ru: 'Цифровое искусство', hy: 'Թվային արվեստ' },
    about: { en: 'About', ru: 'Обо мне', hy: 'Իմ մասին' },
    contact: { en: 'Contact', ru: 'Контакт', hy: 'Կապ' },
  },

  home: {
    heroTitle: { en: 'Soul of a Doll', ru: 'Soul of a Doll', hy: 'Soul of a Doll' },
    heroSubtitle: {
      en: 'Handmade dolls, made one at a time.',
      ru: '[RU placeholder]',
      hy: '[HY placeholder]',
    },
    heroText: {
      en: 'Each doll begins as raw material and ends as a small being with a story of its own. This is where I share that process — and the theatre and drawings that live alongside it.',
      ru: '[RU placeholder]',
      hy: '[HY placeholder]',
    },
    viewWork: { en: 'View work', ru: 'Смотреть работы', hy: 'Դիտել աշխատանքները' },

    dollsIntro: {
      en: 'One-of-a-kind figures, sculpted, painted and dressed entirely by hand. No two are alike.',
      ru: '[RU placeholder]',
      hy: '[HY placeholder]',
    },
    theatreIntro: {
      en: 'Work made for the stage: characters, presence, and collaboration.',
      ru: '[RU placeholder]',
      hy: '[HY placeholder]',
    },
    digitalIntro: {
      en: 'Illustrations and drawings, where my characters first take shape.',
      ru: '[RU placeholder]',
      hy: '[HY placeholder]',
    },
  },

  dolls: {
    title: { en: 'Dolls', ru: 'Куклы', hy: 'Տիկնիկներ' },
    intro: {
      en: 'Every doll is made from scratch. I want you to see how — not just the finished face, but the hands, the waiting, the small decisions along the way.',
      ru: '[RU placeholder]',
      hy: '[HY placeholder]',
    },
    processTitle: { en: 'How a doll is made', ru: '[RU placeholder]', hy: '[HY placeholder]' },
    steps: [
      {
        title: { en: 'Raw materials', ru: '[RU placeholder]', hy: '[HY placeholder]' },
        text: { en: 'Where it starts.', ru: '[RU placeholder]', hy: '[HY placeholder]' },
      },
      {
        title: { en: 'Sculpting', ru: '[RU placeholder]', hy: '[HY placeholder]' },
        text: { en: 'The face and body take form.', ru: '[RU placeholder]', hy: '[HY placeholder]' },
      },
      {
        title: { en: 'Painting', ru: '[RU placeholder]', hy: '[HY placeholder]' },
        text: { en: 'The eyes come alive; the doll begins to look back.', ru: '[RU placeholder]', hy: '[HY placeholder]' },
      },
      {
        title: { en: 'Dressing', ru: '[RU placeholder]', hy: '[HY placeholder]' },
        text: { en: 'Fabric, texture, character.', ru: '[RU placeholder]', hy: '[HY placeholder]' },
      },
      {
        title: { en: 'Finished', ru: '[RU placeholder]', hy: '[HY placeholder]' },
        text: { en: 'A one-of-a-kind doll, ready for its person.', ru: '[RU placeholder]', hy: '[HY placeholder]' },
      },
    ],
  },

  theatre: {
    title: { en: 'Theatre', ru: 'Театр', hy: 'Թատրոն' },
    intro: {
      en: 'Work made for the stage: characters, presence, and collaboration. [Placeholder — add your theatre work here.]',
      ru: '[RU placeholder]',
      hy: '[HY placeholder]',
    },
  },

  digital: {
    title: { en: 'Digital Art', ru: 'Цифровое искусство', hy: 'Թվային արվեստ' },
    intro: {
      en: 'Illustrations and drawings, where my characters first take shape. [Placeholder — add your digital work here.]',
      ru: '[RU placeholder]',
      hy: '[HY placeholder]',
    },
  },

  about: {
    title: { en: 'About', ru: 'Обо мне', hy: 'Իմ մասին' },
    body: {
      en: "I'm [Name], an artist working between three worlds: doll-making, theatre, and digital art. I make handmade dolls with soul — each one unique, each one carrying a little of the story I gave it. [Placeholder — add your story.]",
      ru: '[RU placeholder]',
      hy: '[HY placeholder]',
    },
  },

  contact: {
    title: { en: 'Contact', ru: 'Контакт', hy: 'Կապ' },
    intro: {
      en: "Every doll finds one person. If one of mine is looking for you — or if you'd like something made — write to me.",
      ru: '[RU placeholder]',
      hy: '[HY placeholder]',
    },
    name: { en: 'Your name', ru: 'Ваше имя', hy: 'Ձեր անունը' },
    email: { en: 'Your email', ru: 'Ваш e-mail', hy: 'Ձեր էլ. փոստը' },
    message: { en: 'Your message', ru: 'Ваше сообщение', hy: 'Ձեր հաղորդագրությունը' },
    send: { en: 'Send', ru: 'Отправить', hy: 'Ուղարկել' },
    orDm: { en: 'or write me on Instagram', ru: 'или напишите в Instagram', hy: 'կամ գրեք Instagram-ում' },
  },

  footer: {
    tagline: { en: 'Handmade dolls with soul · one of a kind', ru: '[RU placeholder]', hy: '[HY placeholder]' },
    imprint: { en: 'Imprint', ru: 'Imprint', hy: 'Imprint' },
    privacy: { en: 'Privacy', ru: 'Конфиденциальность', hy: 'Գաղտնիություն' },
  },
} as const
