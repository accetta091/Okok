// Feste e Sagre — provincia di Palermo (PA) e Trapani (TP).
// SOLO informazioni ufficiali/consolidate. Date 2026 verificate o ricorrenze fisse.
export type Festival = {
  id: string;
  name: string;
  place: string;
  province: "PA" | "TP";
  start: string; // ISO date 2026
  end: string; // ISO date 2026 (uguale a start se un solo giorno)
  dateLabel: string;
  category: "religiosa" | "sagra" | "folklore";
  icon: string;
  description: string;
  curiosity: string;
  note?: string; // es. date variabili da confermare
};

export const festivals: Festival[] = [
  {
    id: "san-giuseppe-salemi",
    name: "Festa di San Giuseppe · Pani e Tavolate",
    place: "Salemi e provincia",
    province: "TP",
    start: "2026-03-19",
    end: "2026-03-19",
    dateLabel: "19 marzo 2026",
    category: "religiosa",
    icon: "🍞",
    description:
      "Il 19 marzo si allestiscono le celebri tavolate e altari votivi ricoperti di pani artistici modellati a mano, offerti ai devoti in onore di San Giuseppe.",
    curiosity:
      "A Salemi i pani di San Giuseppe sono vere opere d'arte in pasta: fiori, animali e simboli sacri cotti nel forno.",
  },
  {
    id: "misteri-trapani",
    name: "Processione dei Misteri",
    place: "Trapani",
    province: "TP",
    start: "2026-04-03",
    end: "2026-04-04",
    dateLabel: "Venerdì Santo · 3–4 aprile 2026",
    category: "religiosa",
    icon: "✝️",
    description:
      "Il Venerdì Santo i venti Sacri Gruppi scolpiti sfilano per le vie della città in una processione che dura quasi 24 ore, tra le più lunghe d'Italia.",
    curiosity:
      "I gruppi sono portati a spalla con l'antica 'annacata', il caratteristico dondolio a ritmo delle marce funebri.",
  },
  {
    id: "ballo-diavoli-prizzi",
    name: "Ballo dei Diavoli (Abballu di li Diavuli)",
    place: "Prizzi",
    province: "PA",
    start: "2026-04-05",
    end: "2026-04-05",
    dateLabel: "Domenica di Pasqua · 5 aprile 2026",
    category: "folklore",
    icon: "😈",
    description:
      "La domenica di Pasqua i Diavoli con maschere di latta rossa e la Morte tentano di ostacolare l'incontro tra la Madonna e il Cristo risorto, finché gli Angeli non li sconfiggono.",
    curiosity:
      "Un rito arcaico unico in Sicilia: il ballo culmina in Piazza Sant'Anna con la vittoria del bene sul male.",
  },
  {
    id: "sagra-carciofo-cerda",
    name: "Sagra del Carciofo · Cynara Festival",
    place: "Cerda",
    province: "PA",
    start: "2026-04-23",
    end: "2026-04-26",
    dateLabel: "23–26 aprile 2026 (clou 25 aprile)",
    category: "sagra",
    icon: "🌿",
    description:
      "Quattro giorni dedicati al pregiato carciofo di Cerda, con degustazioni, cortei storici, gruppi folkloristici e stand gastronomici in Piazza Vito La Mantia.",
    curiosity:
      "A Cerda sorge il monumento al carciofo: il paese ne è la capitale indiscussa in Sicilia.",
  },
  {
    id: "san-vito-patrono",
    name: "Festa di San Vito Martire",
    place: "San Vito Lo Capo",
    province: "TP",
    start: "2026-06-15",
    end: "2026-06-15",
    dateLabel: "15 giugno 2026",
    category: "religiosa",
    icon: "⛪",
    description:
      "Festa patronale in onore di San Vito, con processione, celebrazioni religiose e festeggiamenti nel borgo che porta il nome del santo.",
    curiosity:
      "Il paese e il suo santuario-fortezza devono proprio a San Vito il nome e la storia millenaria.",
  },
  {
    id: "festino-santa-rosalia",
    name: "Festino di Santa Rosalia",
    place: "Palermo",
    province: "PA",
    start: "2026-07-14",
    end: "2026-07-15",
    dateLabel: "14–15 luglio 2026",
    category: "religiosa",
    icon: "👑",
    description:
      "Il grande Festino celebra la 'Santuzza', patrona di Palermo: il carro trionfale sfila dal Palazzo Reale al Foro Italico, dove tutto si chiude con i fuochi d'artificio sul mare.",
    curiosity:
      "Al culmine risuona il grido collettivo 'Viva Palermo e Santa Rosalia!'. Il 15 luglio è il giorno liturgico della Santa.",
  },
  {
    id: "acchianata-santa-rosalia",
    name: "Acchianata a Monte Pellegrino",
    place: "Palermo",
    province: "PA",
    start: "2026-09-03",
    end: "2026-09-04",
    dateLabel: "3–4 settembre 2026",
    category: "religiosa",
    icon: "🕯️",
    description:
      "Migliaia di fedeli salgono a piedi di notte lungo la scala verso il Santuario di Santa Rosalia sul Monte Pellegrino, molti a piedi scalzi come voto.",
    curiosity:
      "È il pellegrinaggio più sentito dell'anno, complementare al Festino di luglio.",
  },
  {
    id: "cous-cous-fest",
    name: "Cous Cous Fest",
    place: "San Vito Lo Capo",
    province: "TP",
    start: "2026-09-18",
    end: "2026-09-27",
    dateLabel: "18–27 settembre 2026",
    category: "sagra",
    icon: "🍲",
    description:
      "Festival internazionale dedicato al cous cous, simbolo d'integrazione tra i popoli del Mediterraneo: gare tra chef di tutto il mondo, degustazioni e concerti.",
    curiosity:
      "Il cous cous alla trapanese, di pesce, è l'anima della manifestazione più celebre della costa.",
  },
  {
    id: "presepe-vivente-custonaci",
    name: "Presepe Vivente di Custonaci",
    place: "Custonaci (Grotta Mangiapane)",
    province: "TP",
    start: "2026-12-26",
    end: "2026-12-31",
    dateLabel: "Periodo natalizio (dal 26 dicembre)",
    category: "folklore",
    icon: "🌟",
    description:
      "Nel borgo rupestre della Grotta Mangiapane rivive un antico villaggio con oltre 160 figuranti e gli antichi mestieri, in uno dei presepi viventi più suggestivi d'Italia.",
    curiosity:
      "La scenografia naturale è una grotta abitata fin dal Paleolitico.",
    note: "Prosegue nei primi giorni di gennaio: verifica le date ufficiali dell'edizione.",
  },
  {
    id: "santa-lucia-palermo",
    name: "Festa di Santa Lucia",
    place: "Palermo",
    province: "PA",
    start: "2026-12-13",
    end: "2026-12-13",
    dateLabel: "13 dicembre 2026",
    category: "religiosa",
    icon: "🕯️",
    description:
      "Il 13 dicembre i palermitani rinunciano a pane e pasta e mangiano cuccìa, arancine e panelle, in ricordo di un'antica carestia risolta per intercessione della Santa.",
    curiosity:
      "La cuccìa, grano bollito con ricotta o crema, è il dolce simbolo della giornata.",
  },
];

// Ordina per data e restituisce le prossime feste a partire da 'from'.
export function upcomingFestivals(from: Date = new Date()): Festival[] {
  const fromIso = from.toISOString().slice(0, 10);
  const sorted = [...festivals].sort((a, b) => a.start.localeCompare(b.start));
  const future = sorted.filter((f) => f.end >= fromIso);
  return future.length > 0 ? future : sorted;
}

// Insieme di tutte le date (ISO) coperte da una festa, per marcare il calendario.
export function festivalDateSet(): Record<string, Festival[]> {
  const map: Record<string, Festival[]> = {};
  for (const f of festivals) {
    const start = new Date(f.start);
    const end = new Date(f.end);
    const cur = new Date(start);
    while (cur <= end) {
      const iso = cur.toISOString().slice(0, 10);
      if (!map[iso]) map[iso] = [];
      map[iso].push(f);
      cur.setDate(cur.getDate() + 1);
    }
  }
  return map;
}
