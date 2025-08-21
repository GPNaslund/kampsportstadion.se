export interface WorkoutClass {
  header: string;
  description: string;
  levels: WorkoutClassLevel[];
  rawHtml: string | null;
}

export interface WorkoutClassLevel {
  header: string;
  description: string;
}

const thaiBoxning: WorkoutClass = {
  header: "Thaiboxning",
  description: "Här lär du dig grunderna i thaiboxning. Slag, spark, armbågar, knän och clinch. En utmanande och rolig sport där man ständigt utvecklas och lär sig något nytt.",
  levels: [
    {
      header: "Steg 1",
      description: "Denna gruppen passar för dig som inte har så mycket erfarenhet eller är helt nybörjare i thaiboxning. Här går vi igenom grundläggande tekniker och strategier för att sen bygga vidare på.",
    },
    {
      header: "Steg 2",
      description: "Denna grupp är för dig som har erfarenhet av sporten och bemästrar thaiboxningens grunder. För dig som har tränat minst två eller tre terminer i steg 1 och vill börja tävla eller träna tekniker på en högre nivå."
    },
    {
      header: "Tävling & Elite",
      description: "En grupp för dig som tävlar aktivt i fullkontakt. För att träna i denna gruppen måste du ha blitt flyttat upp av din tränare.",
    }
  ],
  rawHtml: null
};

const bjj: WorkoutClass = {
  header: "BJJ",
  description: "Brasiliansk Jiu-Jitsu är en kampsport som härstammar från Brasilien och är en form av Jiu-Jitsu. Sporten betonar markkamp och grappling-tekniker, med fokus på att använda grepp och lås för att ta ner och kontrollera motståndaren. Bjj fokuserar på markkamp, submission-tekniker och kontroll. Man tränar i GI (dräkt)",
  levels: [
    {
      header: "Bjj Steg 1",
      description: "Denna grupp är för dig inte har så mycket erfarenhet eller är helt ny inom BJJ. Vi går igenom grunderna, grundpositioner, svep och submition. En bra start för att bygga teknik och trygghet på mattan.",
    },
    {
      header: "Bjj Steg 2",
      description: "Denna grupp är för dig som har tränat minst 3 terminer och behärskar alla grunder. Här jobbar vi med mera avancerade tekniker, kombinationer och kanske börjar tävla.",
    },
    {
      header: "Bjj Mix Grupp",
      description: "Här tränar steg 1 & steg 2 tillsammans. Fokus på tekning, sparring och att lära av varandra i en inkluderande miljö.",
    },
  ],
  rawHtml: null
};

const mmaSw: WorkoutClass = {
  header: "MMA/SW",
  description: "Mixed Martial Arts (MMA) är en sport med sparkar, slag, kast och markkamp med inriktning på fullkontakt. Vi tränar stående och mark (SW).",
  levels: [
    {
      header: "MMA Steg 1 & 2",
      description: "Denna grupp är för dig som har lite erfarenhet eller är helt ny inom MMA.Vi går igenom grunder i slag, spark, clinch, nertagningar och grundläggande markarbete. Fokus på teknik, säkerhet och bygga en stabil bas.",
    },
    {
      header: "MMA Tävling",
      description: "Denna grupp är för dig som har tränat minst 3 terminer MMA eller motsvarande pass mark/stående och behärskar alla tekniker väl. En grupp för dig som tävlar eller ska tävla aktivt i fullkontakt. För att träna i denna gruppen måste du ha blivit flyttad upp av din tränare.",
    },
  ],
  rawHtml: null,
};

const kampsportstadionUngdom: WorkoutClass = {
  header: "Kampsportstadion Ungdom",
  description: "",
  levels: [
    {
      header: "Thaiboxning 13-17 år",
      description: "",
    },
    {
      header: "BJJ 12-17 år",
      description: ""
    },
  ],
  rawHtml: null,
};

const kampsportstadionBarngrupp: WorkoutClass = {
  header: "Kampsportstadion Barngrupp",
  description: "",
  levels: [
    {
      header: "Kampsportlek 4-6 år",
      description: "",
    },
    {
      header: "Thaiboxning 7-9 år & 9-12 år",
      description: "",
    },
    {
      header: "Bjj 7-11 år",
      description: "",
    },
  ],
  rawHtml: null
};

const kampsportsFys: WorkoutClass = {
  header: "Kampsportsfys",
  description: "Funktionell styrka med kampsportsmoment. Effektiv och rolig träning. Utmanande utan att man behöver slåss med någon. Passar för alla och inga förkunskaper krävs.",
  levels: [],
  rawHtml: null
};

const bootcamp: WorkoutClass = {
  header: "Bootcamp",
  description: "En härlig blandning av fys, funktionell, box och styrketräning. Rolig och utmanande och alla kan vara med-inga förkunskaper krävs. Man behöver inte vara medlem för att delta!",
  levels: [],
  rawHtml: `Maila till <a href="mailto:info@kampsportstadion.se">info@kampsportstadion.se</a> och skriv Bootcamp för mera information!`
};

const onlineCoachning: WorkoutClass = {
  header: "Online Coachning",
  description: "Få tillgång till Kampsportstadions community direkt i en app där du får träningspass, veckoutmaningar, kost, inspiration & stöd. Du hittar även mat och träningsprogram, samt möjlighet finns för individuell coachning.",
  levels: [],
  rawHtml: `Besök <a href="https://kampsportstadion-online.se">kampsportstadion-online.se</a> för mer information.`
};

const dunkarDax: WorkoutClass = {
  header: "Dunkardax/Cirkelfys",
  description: "90 minuter cirkelträning med kampsport moment. Ett fyspass med högt tempo, styrka och flås! Passar för alla och inga förkunskaper krävs.",
  levels: [],
  rawHtml: null,
}

const gym: WorkoutClass = {
  header: "Gym",
  description: "I vårt gym hittar du allt du behöver för att bygga upp styrka och stabilitet. Vi har löpband, roddmaskiner och cyklar samt skivstänger, hantlar, kettlebells och kabelmaskin för att du ska kunna kunna få en varierad träning som komplement till kampsporten.",
  levels: [],
  rawHtml: null,
};

const awAfterWork: WorkoutClass = {
  header: "AW/After work",
  description: "Byt ut ölen med en Nocco och dra med kollegor och vänner på ett After Workout pass! 60 minuters grym träning!",
  levels: [],
  rawHtml: `Vill ditt företag köra en After Workout:maila till <a href="mailto:info@kampsportstadion.se">info@kampsportstadion.se</a>`,
};

const smallGroup: WorkoutClass = {
  header: "Small Group",
  description: "Vill ni köra i en ännu mindre grupp och mer personligt anpassad träning kan vi även erbjuda detta. Ni kör med en PT i en grupp upp till 4pers, där ni har chans att påverka varje pass utefter era önskemål.\n  Det kostar 1800kr per tillfälle.",
  levels: [],
  rawHtml: `Intresseanmälan görs till <a href="mailto:info@kampsportstadion.se">info@kampsportstadion.se</a>`,
};

const barnkalas: WorkoutClass = {
  header: "Barnkalas",
  description: "2500 kr för en timme i salen. Instruktör från Kampsportstadion kommer hålla ett 45 minuters pass för barnen. Godis och fika tar man med själva.",
  levels: [],
  rawHtml: `Maila <a href="mailto:info@kampsportstadion.se för mera information</a>`,
};

const recoveryRoom: WorkoutClass = {
  header: "Recovery Room",
  description: "Boka ett privat återhämtningsrum med tillgång till infraröd bastu, rollshaper, kompression boots, yogamatta, rödljusterapi, massagekoppar och övriga verktyg för en återhämtande stund.",
  levels: [],
  rawHtml: `Boka din tid på <a href="https://www.recoveryroom.se">www.recoveryroom.se</a>`,
};


const classes: WorkoutClass[] = [
  thaiBoxning,
  bjj,
  mmaSw,
  kampsportstadionUngdom,
  kampsportstadionBarngrupp,
  kampsportsFys,
  bootcamp,
  onlineCoachning,
  dunkarDax,
  gym,
  awAfterWork,
  smallGroup,
  barnkalas,
  recoveryRoom,
];

export default classes;
