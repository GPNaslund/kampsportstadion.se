export interface Trainer {
  name: string;
  description: string;
  email?: string;
  phone?: string;
  specialty?: string;
}

export const TRAINERS: Trainer[] = [
  {
    name: 'Rickard Nordstrand',
    specialty: 'Thaiboxning',
    description:
      'Världsmästare i thaiboxning. Vill du slipa dina tekniker eller jobba styrka i gymmet? Rickard är en all around tränare som kan hjälpa dig med det mesta. Thaiboxning är dock hans specialitet.',
    email: 'rickard@goodsport.se',
    phone: '0707122201',
  },
  {
    name: 'Synøve Asplund',
    specialty: 'Funktionell styrka, thaiboxning, gym',
    description:
      'Personlig träning med mål att motivera och inspirera till fysisk aktivitet och rörelse. Att starka individen och möta personen just där den är för att maximera den personliga utvecklingen. Älskar funktionell styrka, thaiboxning och gym. Vi sätter ihop en plan utifrån dina mål och förutsättningar.',
    email: 'info@kampsportstadion.se',
    phone: '0707943873',
  },
  {
    name: 'Jimmie Jensen',
    specialty: 'Elit-coach, MMA, fighting',
    description:
      'Som huvudcoach för vår elitgrupp med bland annat UFC fighters och landslags-fighters kan Jimmie ta din fighting till en ny nivå. Nybörjare som proffs spelar ingen roll, tillsammans lägger vi upp en plan för att ge dig den personliga utvecklingen och resultat du vill åt. Teknik, styrka, kondition för att bygga en stark, hållbar kropp och ett bra fighting game.',
    email: 'jimmie@murarfirma.se',
    phone: '0732034060',
  },
  {
    name: 'Niklas Messing',
    specialty: 'Thaiboxning, kondition',
    description:
      'Vill du komma i form eller behöver jobba på dina tekniker i thaiboxning kan Niklas hjälpa dig.',
    email: 'niklas.messing@outlook.com',
    phone: '0707866055',
  },
  {
    name: 'Antoine Constantinedes',
    specialty: 'Strength & conditioning',
    description:
      'Strength & condition huvud coach för våra fighters. Jobbar mycket med individuella programmeringar för att hjälpa dig att nå ditt bästa potential inom din fighting och en stark och hållbar kropp.',
    email: 'antonyc19@hotmail.com',
    phone: '0765633111',
  },
  {
    name: 'Christoffer Nyström',
    specialty: 'Styrka, stabilitet, rehab',
    description:
      'Bygg styrka och stabilitet genom hela rörelsebanan. Maximera explosivitet och uthållighet för att utvecklas i din sport. Som blivande fysioterapeut med över 15 års erfarenhet av boxning/träning kan jag hjälpa dig att nå dina mål och bygga en kropp som håller livet ut.',
    email: 'chris.allen.nystrom@gmail.com',
  },
];
