// All website text in three languages.
//
// The English is the source; Russian and Armenian are translations of it.
// If you change a sentence, change all three.

export type Lang = 'en' | 'ru' | 'hy'

export const locales: Lang[] = ['en', 'ru', 'hy']

export const languages: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'hy', label: 'HY' },
]

export function hasLocale(locale: string): locale is Lang {
  return (locales as string[]).includes(locale)
}

export const t = {
  // Search-engine and link-preview text.
  meta: {
    site: {
      en: 'Handmade dolls with soul — one of a kind. Dolls, theatre and digital art.',
      ru: 'Куклы ручной работы с душой — единственные в своём роде. Куклы, театр и цифровое искусство.',
      hy: 'Հոգի ունեցող ձեռագործ տիկնիկներ՝ եզակի իրենց տեսակի մեջ։ Տիկնիկներ, թատրոն և թվային արվեստ։',
    },
    dolls: {
      en: 'One-of-a-kind handmade art dolls — sculpted, painted and dressed entirely by hand. See how each doll is made.',
      ru: 'Уникальные авторские куклы ручной работы — вылеплены, расписаны и одеты вручную. Посмотрите, как создаётся каждая кукла.',
      hy: 'Եզակի ձեռագործ տիկնիկներ՝ ամբողջությամբ ձեռքով քանդակված, նկարված և հագցված։ Տեսեք, թե ինչպես է ստեղծվում ամեն տիկնիկ։',
    },
    theatre: {
      en: 'Masks, puppets and characters built for the stage.',
      ru: 'Маски, куклы и персонажи, созданные для сцены.',
      hy: 'Բեմի համար ստեղծված դիմակներ, տիկնիկներ և կերպարներ։',
    },
    digital: {
      en: 'Watercolour illustrations, where my characters first take shape.',
      ru: 'Акварельные иллюстрации, где мои персонажи впервые обретают форму.',
      hy: 'Ջրաներկ նկարազարդումներ, որտեղ իմ կերպարներն առաջին անգամ կերպարանք են ստանում։',
    },
    about: {
      en: 'The artist behind Soul of a Doll — doll-making, theatre and illustration.',
      ru: 'Автор Soul of a Doll — куклы, театр и иллюстрация.',
      hy: 'Soul of a Doll-ի հեղինակը՝ տիկնիկագործություն, թատրոն և նկարազարդում։',
    },
    contact: {
      en: 'Get in touch — commissions and questions.',
      ru: 'Свяжитесь со мной — заказы и вопросы.',
      hy: 'Կապվեք ինձ հետ՝ պատվերներ և հարցեր։',
    },
  },

  nav: {
    dolls: { en: 'Dolls', ru: 'Куклы', hy: 'Տիկնիկներ' },
    theatre: { en: 'Theatre', ru: 'Театр', hy: 'Թատրոն' },
    digital: { en: 'Digital Art', ru: 'Цифровое искусство', hy: 'Թվային արվեստ' },
    about: { en: 'About', ru: 'Обо мне', hy: 'Իմ մասին' },
    contact: { en: 'Contact', ru: 'Контакт', hy: 'Կապ' },
  },

  home: {
    eyebrow: { en: 'Artist · Yerevan', ru: 'Художница · Ереван', hy: 'Նկարիչ · Երևան' },
    greeting: { en: "Hi, I'm Nane", ru: 'Привет, я Нане', hy: 'Բարև, ես Նանեն եմ' },
    roles: {
      en: 'Doll maker · Theatre designer · Illustrator',
      ru: 'Мастер кукол · Театральный художник · Иллюстратор',
      hy: 'Տիկնիկագործ · Թատերական ձևավորող · Նկարազարդող',
    },
    aboutMe: { en: 'More about me', ru: 'Подробнее обо мне', hy: 'Ավելին իմ մասին' },

    statement: {
      en: 'Made by hand, one at a time',
      ru: 'Сделано вручную, по одной',
      hy: 'Ձեռքով պատրաստված՝ մեկ առ մեկ',
    },
    statementBody: {
      en: [
        'Nothing here is produced in a series. Every figure begins as raw material — clay, fabric, wire — and is sculpted, painted and dressed by hand until it becomes someone. The face decides when it is finished, not me.',
        'The three parts of my work feed each other. What I learn building a character for the stage returns in a doll; what I draw first often ends up standing on a shelf. This is where all three live side by side.',
      ],
      ru: [
        'Здесь нет серийных работ. Каждая фигура начинается с материала — глины, ткани, проволоки — и лепится, расписывается и одевается вручную, пока не станет кем-то. Когда работа закончена, решает лицо, а не я.',
        'Три части моей работы питают друг друга. То, что я узнаю, создавая персонажа для сцены, возвращается в кукле; то, что сначала нарисовано, часто в итоге стоит на полке. Здесь все три живут рядом.',
      ],
      hy: [
        'Այստեղ սերիական աշխատանք չկա։ Ամեն կերպար սկսվում է հումքից՝ կավից, գործվածքից, մետաղալարից, և ձեռքով քանդակվում, նկարվում ու հագցվում է, մինչև դառնա ինչ-որ մեկը։ Երբ գործն ավարտված է, որոշում է դեմքը, ոչ թե ես։',
        'Իմ աշխատանքի երեք մասերը սնուցում են միմյանց։ Այն, ինչ սովորում եմ բեմի համար կերպար կերտելիս, վերադառնում է տիկնիկի մեջ․ այն, ինչ սկզբում գծում եմ, հաճախ ի վերջո կանգնում է դարակին։ Այստեղ երեքն էլ ապրում են կողք կողքի։',
      ],
    },

    heroTitle: { en: 'Soul of a Doll', ru: 'Soul of a Doll', hy: 'Soul of a Doll' },
    heroSubtitle: {
      en: 'Handmade dolls, made one at a time.',
      ru: 'Куклы ручной работы, по одной за раз.',
      hy: 'Ձեռագործ տիկնիկներ՝ մեկ առ մեկ։',
    },
    heroText: {
      en: 'Each doll begins as raw material and ends as a small being with a story of its own. This is where I share that process — and the theatre and drawings that live alongside it.',
      ru: 'Каждая кукла начинается с материала и становится маленьким существом со своей историей. Здесь я показываю этот путь — а рядом с ним театр и рисунки.',
      hy: 'Ամեն տիկնիկ սկսվում է հումքից և դառնում փոքրիկ էակ՝ իր պատմությամբ։ Այստեղ ես կիսվում եմ այդ ճանապարհով, ինչպես նաև թատրոնով և գծանկարներով, որոնք ապրում են դրա կողքին։',
    },
    viewWork: { en: 'View work', ru: 'Смотреть работы', hy: 'Դիտել աշխատանքները' },

    dollsIntro: {
      en: 'One-of-a-kind figures, sculpted, painted and dressed entirely by hand. No two are alike.',
      ru: 'Уникальные фигуры, вылепленные, расписанные и одетые целиком вручную. Двух одинаковых не бывает.',
      hy: 'Եզակի կերպարներ՝ ամբողջությամբ ձեռքով քանդակված, նկարված և հագցված։ Երկու նույնանման չկա։',
    },
    theatreIntro: {
      en: 'Masks, puppets and characters built for the stage — and photographed in performance.',
      ru: 'Маски, куклы и персонажи для сцены — и снимки со спектаклей.',
      hy: 'Բեմի համար ստեղծված դիմակներ, տիկնիկներ և կերպարներ, ինչպես նաև ներկայացումների լուսանկարներ։',
    },
    digitalIntro: {
      en: 'Watercolour illustrations, where my characters first take shape.',
      ru: 'Акварельные иллюстрации, где мои персонажи впервые обретают форму.',
      hy: 'Ջրաներկ նկարազարդումներ, որտեղ իմ կերպարներն առաջին անգամ կերպարանք են ստանում։',
    },
  },

  masks: {
    title: { en: 'Masks', ru: 'Маски', hy: 'Դիմակներ' },
    intro: {
      en: 'Commedia dell’arte masks, built for the stage. On the wall they are objects; the moment an actor puts one on, it becomes a face.',
      ru: 'Маски комедии дель арте, созданные для сцены. На стене это предметы; как только актёр их надевает, они становятся лицом.',
      hy: 'Կոմեդիա դել արտեի դիմակներ՝ ստեղծված բեմի համար։ Պատին դրանք առարկա են․ հենց դերասանը դնում է դիմակը, այն դառնում է դեմք։',
    },
    inTheStudio: { en: 'In the studio', ru: 'В мастерской', hy: 'Արվեստանոցում' },
    onStage: { en: 'On stage', ru: 'На сцене', hy: 'Բեմում' },
  },

  process: {
    title: {
      en: 'How a piece comes about',
      ru: 'Как рождается работа',
      hy: 'Ինչպես է ծնվում գործը',
    },
    steps: [
      {
        title: { en: 'Drawing', ru: 'Рисунок', hy: 'Գծանկար' },
        text: {
          en: 'The character is found on paper first — the face, the mood, what it is carrying.',
          ru: 'Персонаж сначала находится на бумаге — лицо, настроение, то, что он несёт в себе.',
          hy: 'Կերպարը սկզբում գտնվում է թղթի վրա՝ դեմքը, տրամադրությունը, այն, ինչ նա կրում է իր մեջ։',
        },
      },
      {
        title: { en: 'Building', ru: 'Работа', hy: 'Կերտում' },
        text: {
          en: 'Clay, wire and fabric on the workbench. Most of the time goes here.',
          ru: 'Глина, проволока и ткань на столе. Здесь уходит больше всего времени.',
          hy: 'Կավ, մետաղալար և գործվածք աշխատասեղանին։ Ամենաշատ ժամանակն այստեղ է անցնում։',
        },
      },
      {
        title: { en: 'The raw form', ru: 'Форма без цвета', hy: 'Ձևը՝ առանց գույնի' },
        text: {
          en: 'Before any colour: only the sculpture, where every wrinkle has to already be right.',
          ru: 'До всякого цвета: только скульптура, где каждая морщина уже должна быть на месте.',
          hy: 'Մինչև որևէ գույն՝ միայն քանդակը, որտեղ ամեն կնճիռ արդեն պետք է ճիշտ լինի։',
        },
      },
      {
        title: { en: 'Finished', ru: 'Готово', hy: 'Ավարտված' },
        text: {
          en: 'Painted, dressed, and looking back at you. The face decides when it is done.',
          ru: 'Расписана, одета — и смотрит на вас в ответ. Когда работа закончена, решает лицо.',
          hy: 'Նկարված, հագցված և ձեզ նայող։ Երբ գործն ավարտված է, որոշում է դեմքը։',
        },
      },
    ],
  },

  gallery: {
    title: { en: 'Selected work', ru: 'Избранные работы', hy: 'Ընտրված աշխատանքներ' },
    all: { en: 'All', ru: 'Все', hy: 'Բոլորը' },
    animals: { en: 'Animals', ru: 'Животные', hy: 'Կենդանիներ' },
    characters: { en: 'Characters', ru: 'Персонажи', hy: 'Կերպարներ' },
    birds: { en: 'Birds', ru: 'Птицы', hy: 'Թռչուններ' },
    masks: { en: 'Masks', ru: 'Маски', hy: 'Դիմակներ' },
    ornaments: { en: 'Ornaments', ru: 'Ёлочные игрушки', hy: 'Զարդեր' },
  },

  dolls: {
    title: { en: 'Dolls', ru: 'Куклы', hy: 'Տիկնիկներ' },
    intro: {
      en: 'Every doll is made from scratch. I want you to see how — not just the finished face, but the hands, the waiting, the small decisions along the way.',
      ru: 'Каждая кукла создаётся с нуля. Мне важно, чтобы вы увидели как — не только готовое лицо, но и руки, ожидание, маленькие решения по пути.',
      hy: 'Ամեն տիկնիկ ստեղծվում է զրոյից։ Ուզում եմ, որ տեսնեք՝ ինչպես․ ոչ միայն ավարտված դեմքը, այլև ձեռքերը, սպասումը, ճանապարհին կայացվող փոքր որոշումները։',
    },
    processTitle: {
      en: 'How a doll is made',
      ru: 'Как создаётся кукла',
      hy: 'Ինչպես է ստեղծվում տիկնիկը',
    },
    steps: [
      {
        title: { en: 'Raw materials', ru: 'Материалы', hy: 'Նյութեր' },
        text: {
          en: 'Clay, wire, fabric and paper — nothing that looks like a doll yet.',
          ru: 'Глина, проволока, ткань и бумага — пока ничто не похоже на куклу.',
          hy: 'Կավ, մետաղալար, գործվածք և թուղթ․ դեռ ոչինչ տիկնիկի նման չէ։',
        },
      },
      {
        title: { en: 'Sculpting', ru: 'Лепка', hy: 'Քանդակում' },
        text: {
          en: 'The face and body take form. This is the part that cannot be rushed.',
          ru: 'Лицо и тело обретают форму. Эту часть нельзя торопить.',
          hy: 'Դեմքն ու մարմինը ձև են ստանում։ Այս մասը չի կարելի շտապեցնել։',
        },
      },
      {
        title: { en: 'Painting', ru: 'Роспись', hy: 'Նկարում' },
        text: {
          en: 'The eyes come alive; the doll begins to look back.',
          ru: 'Оживают глаза; кукла начинает смотреть в ответ.',
          hy: 'Աչքերն աշխուժանում են․ տիկնիկը սկսում է հետ նայել։',
        },
      },
      {
        title: { en: 'Dressing', ru: 'Одежда', hy: 'Հագուստ' },
        text: {
          en: 'Fabric, texture, character — often sewn from very old cloth.',
          ru: 'Ткань, фактура, характер — часто шью из очень старой материи.',
          hy: 'Գործվածք, հյուսվածք, բնավորություն․ հաճախ կարում եմ շատ հին կտորից։',
        },
      },
      {
        title: { en: 'Finished', ru: 'Готова', hy: 'Ավարտված' },
        text: {
          en: 'A one-of-a-kind doll, ready for its person.',
          ru: 'Единственная в своём роде кукла, готовая к встрече со своим человеком.',
          hy: 'Եզակի տիկնիկ՝ պատրաստ իր մարդուն։',
        },
      },
    ],
  },

  theatre: {
    title: { en: 'Theatre', ru: 'Театр', hy: 'Թատրոն' },
    intro: {
      en: 'Masks, puppets and figures built for the stage. Some are carried by an actor, some are worn, some are the whole character. Below they are shown as objects — and in performance, where they come alive.',
      ru: 'Маски, куклы и фигуры для сцены. Одних актёр держит в руках, другие надеваются, третьи и есть сам персонаж. Ниже — сначала предметы, а затем спектакль, где они оживают.',
      hy: 'Բեմի համար ստեղծված դիմակներ, տիկնիկներ և կերպարներ։ Մեկը դերասանը կրում է ձեռքին, մյուսը դնում է դեմքին, երրորդն ինքն է կերպարը։ Ստորև դրանք ներկայացված են որպես առարկա, ապա՝ ներկայացման մեջ, որտեղ կենդանանում են։',
    },
  },

  digital: {
    title: { en: 'Digital Art', ru: 'Цифровое искусство', hy: 'Թվային արվեստ' },
    intro: {
      en: 'Watercolour studies of animals and birds. They are where a character is found first — long before it stands on a table.',
      ru: 'Акварельные этюды животных и птиц. Именно здесь персонаж находится впервые — задолго до того, как встанет на стол.',
      hy: 'Կենդանիների և թռչունների ջրաներկ ուսումնասիրություններ։ Հենց այստեղ է կերպարն առաջին անգամ գտնվում՝ շատ ավելի վաղ, քան կկանգնի սեղանին։',
    },
  },

  about: {
    title: { en: 'About', ru: 'Обо мне', hy: 'Իմ մասին' },
    body: {
      en: "I'm Nane, an artist in Yerevan working between three worlds: doll-making, theatre and illustration. I make handmade dolls with soul — each one unique, each one carrying a little of the story I gave it. For the stage I build masks, puppets and figures; on paper I paint the animals and characters that later become them. The three keep handing work back and forth, and I have stopped trying to separate them.",
      ru: 'Меня зовут Нане, я художница из Еревана и работаю между тремя мирами: куклы, театр и иллюстрация. Я делаю кукол ручной работы с душой — каждая единственная в своём роде и несёт частичку истории, которую я ей дала. Для сцены я создаю маски, кукол и фигуры; на бумаге пишу животных и персонажей, которые потом ими становятся. Эти три области постоянно передают работу друг другу, и я перестала пытаться их разделять.',
      hy: 'Ես Նանեն եմ՝ Երևանում ապրող նկարիչ, և աշխատում եմ երեք աշխարհների միջև՝ տիկնիկագործություն, թատրոն և նկարազարդում։ Ես ստեղծում եմ հոգի ունեցող ձեռագործ տիկնիկներ․ ամեն մեկը եզակի է և կրում է իր պատմության մի մասը։ Բեմի համար կերտում եմ դիմակներ, տիկնիկներ և կերպարներ․ թղթի վրա նկարում եմ կենդանիներ ու կերպարներ, որոնք հետո դառնում են դրանք։ Այս երեքը մշտապես գործ են փոխանցում միմյանց, և ես դադարել եմ փորձել դրանք առանձնացնել։',
    },
  },

  contact: {
    title: { en: 'Contact', ru: 'Контакт', hy: 'Կապ' },
    intro: {
      en: "Every doll finds one person. If one of mine is looking for you — or if you'd like something made — write to me.",
      ru: 'Каждая кукла находит своего человека. Если одна из моих ищет вас — или если вы хотите заказать работу — напишите мне.',
      hy: 'Ամեն տիկնիկ գտնում է իր մարդուն։ Եթե իմերից մեկը փնտրում է ձեզ, կամ եթե ուզում եք պատվիրել գործ, գրեք ինձ։',
    },
    name: { en: 'Your name', ru: 'Ваше имя', hy: 'Ձեր անունը' },
    email: { en: 'Your email', ru: 'Ваш e-mail', hy: 'Ձեր էլ. փոստը' },
    message: { en: 'Your message', ru: 'Ваше сообщение', hy: 'Ձեր հաղորդագրությունը' },
    send: { en: 'Send', ru: 'Отправить', hy: 'Ուղարկել' },
    orDm: { en: 'or write me on Instagram', ru: 'или напишите в Instagram', hy: 'կամ գրեք Instagram-ում' },
  },

  footer: {
    tagline: {
      en: 'Handmade dolls with soul · one of a kind',
      ru: 'Куклы ручной работы с душой · единственные в своём роде',
      hy: 'Հոգի ունեցող ձեռագործ տիկնիկներ · եզակի',
    },
    imprint: { en: 'Imprint', ru: 'Imprint', hy: 'Imprint' },
    privacy: { en: 'Privacy', ru: 'Конфиденциальность', hy: 'Գաղտնիություն' },
  },
} as const
