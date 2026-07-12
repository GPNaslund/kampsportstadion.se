// All copy preserved verbatim from the previous medlemskap page.

export type PlanGroup = 'voksen' | 'ungdom' | 'barn' | 'prova';

export interface PlanLine {
  amount: string;     // "699:-"
  cadence: string;    // "/månad autogiro"
}

export interface MembershipPlan {
  group: PlanGroup;
  title: string;
  prices: PlanLine[];
  body: string[];     // paragraphs
  highlight?: boolean;
}

export const PLAN_GROUP_LABELS: Record<PlanGroup, string> = {
  voksen: 'Vuxen',
  ungdom: 'Ungdom & student',
  barn:   'Barn',
  prova:  'Prova på',
};

export const MEMBERSHIP_URL =
  'https://www.gymcontrol.se/global/webshop/index.php?uid=8975&action=home';

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    group: 'voksen',
    title: 'Årskort',
    prices: [
      { amount: '699:-',  cadence: '/månad autogiro' },
      { amount: '9 800:-', cadence: '/år swish eller kort' },
    ],
    body: [
      'Träna så mycket du vill, välj bland alla pass, tillgång till gymmet.',
      '12 månaders bindningstid.',
    ],
    highlight: true,
  },
  {
    group: 'voksen',
    title: 'Halvår',
    prices: [{ amount: '5 400:-', cadence: '/halvår swish eller kort' }],
    body: ['6 månaders bindningstid.'],
  },
  {
    group: 'voksen',
    title: 'Kvartal',
    prices: [{ amount: '3 000:-', cadence: '/kvartal swish eller kort' }],
    body: ['3 månaders bindningstid.'],
  },
  {
    group: 'ungdom',
    title: 'Årskort student',
    prices: [
      { amount: '599:-',  cadence: '/månad autogiro' },
      { amount: '8 000:-', cadence: '/år swish eller kort' },
    ],
    body: [
      'Träna så mycket du vill, välj bland alla pass, tillgång till gymmet.',
      'Giltigt CSN-kort krävs. 12 månaders bindningstid.',
    ],
  },
  {
    group: 'ungdom',
    title: 'Halvår student',
    prices: [{ amount: '4 500:-', cadence: '/halvår swish eller kort' }],
    body: ['6 månaders bindningstid.'],
  },
  {
    group: 'ungdom',
    title: 'Ungdomsgrupp 13–16 år',
    prices: [
      { amount: '499:-',  cadence: '/månad autogiro' },
      { amount: '3 200:-', cadence: '/termin swish eller kort' },
    ],
    body: [
      'Gäller tisdag & torsdag 17.00–18.00.',
      '6 månaders bindningstid.',
    ],
  },
  {
    group: 'barn',
    title: 'Kampsport Barngrupp 7–9 år & 9–12 år',
    prices: [
      { amount: '499:-',   cadence: '/månad autogiro' },
      { amount: '3 200:-', cadence: '/termin swish eller kort' },
    ],
    body: [
      'Välj grupp: 1) Brasiliansk jiu-jitsu (BJJ) 2 pass i veckan. 2) Thaiboxning 2 pass i veckan.',
      'Uppehåll juni–augusti & januari.',
      'Man har automatisk plats i gruppen kommande termin om man inte säger upp sitt medlemskap. Vill du säga upp ditt barns medlemskap gör man det innan nästa terminstart. Maila namn och uppsägning till info@kampsportstadion.se.',
    ],
  },
  {
    group: 'barn',
    title: 'Kampsport Barngrupp 4–6 år',
    prices: [
      { amount: '399:-',   cadence: '/månad autogiro' },
      { amount: '2 600:-', cadence: '/termin swish eller kort' },
    ],
    body: [
      '1 pass/v, uppehåll juni–augusti & januari.',
      'Man har automatisk plats i gruppen kommande termin om man inte säger upp sitt medlemskap. Vill du säga upp ditt barns medlemskap gör man det innan nästa terminstart.',
    ],
  },
  {
    group: 'prova',
    title: 'Prova på engångspass',
    prices: [{ amount: '200:-', cadence: 'swish eller kort' }],
    body: [
      'Ingen drop in.',
      'Vill du prova så maila ditt namn till info@kampsportstadion.se, så skriver vi upp ditt namn i receptionen.',
    ],
  },
  {
    group: 'prova',
    title: 'Prova på en vecka',
    prices: [{ amount: '500:-', cadence: 'swish eller kort' }],
    body: [],
  },
  {
    group: 'prova',
    title: 'Klippkort 10 gånger',
    prices: [{ amount: '2 000:-', cadence: 'swish eller kort' }],
    body: [],
  },
];

export const MEMBERSHIP_TERMS: { heading: string; body: string }[] = [
  {
    heading: 'Medlemsavgift',
    body: 'Medlemsavgift om 500:-/år är obligatorisk oavsett medlemskap, inkluderar idrottsförsäkring hos Folksam. Betalas på plats alt läggs till på första autogirodragningen.',
  },
  {
    heading: 'Uppsägning',
    body: 'Vid uppsägning gäller 3 månaders uppsägningstid. Swish eller kortbetalning återbetalas ej vid avslut av medlemskapet innan köpt period löper ut. Vid uppstart av ett tidigare avslutat medlemskap tas en administrativ avgift ut på 300:-.',
  },
  {
    heading: 'Terminer & autogiro',
    body: 'Vi har två terminer; Januari–Maj/Juni samt Augusti–December. Autogiro är en delbetalning av terminsavgiften, vilket innebär att autogirot forlöper även då det inte är termin. Det går därför inte att frysa medlemskapet under sommaren. Bindningstiden för autogiro är 12 månader för vuxna och 6 månader för ungdom/student upp till 18 år. Vi har stängt under sommaren men erbjuder träning på annan plats.',
  },
  {
    heading: 'Barngrupper',
    body: 'Kampsport barngrupper binder sig för en termin. Ingen betalning dras under sommaren för barngruppen. Vill man avsluta sitt barns medlemskap meddelar man detta innan nästa termins uppstart (gäller barngrupp 4–11 år).',
  },
  {
    heading: 'Avslut & medlemskort',
    body: 'Vid uppsägning av medlemskap, maila ditt namn, personnummer och kortnummer till info@kampsportstadion.se. Vi skickar alltid en bekräftelse på din uppsägelse, ifall du har sagt upp ditt medlemskap men inte erhåller en bekräftelse så kontakta oss snarast. Återbetalning av medlemsavgifter som uppstått pga bristande förfarande vid uppsägning återbetalas ej. Lämna in ditt medlemskort efter sista passet för avslutande av medlemskap. Gäller alla medlemskap.',
  },
];
