import type {
  Article,
  ArticleSection,
  Category,
  Checklist,
  Reference,
  Stage,
} from "./types";

export const categories: Category[] = [
  { id: "pregnancy", name: "Gravidanza", icon: "sunny-outline" },
  { id: "preparation", name: "Preparazione al parto", icon: "bag-outline" },
  { id: "birth", name: "Travaglio e nascita", icon: "flower-outline" },
  { id: "recovery", name: "Puerperio e recupero", icon: "leaf-outline" },
  { id: "breastfeeding", name: "Allattamento al seno", icon: "heart-outline" },
  { id: "feeding", name: "Alimentazione del neonato", icon: "water-outline" },
  { id: "wellbeing", name: "Benessere emotivo", icon: "happy-outline" },
  { id: "partner", name: "Il ruolo del partner", icon: "people-outline" },
  { id: "home", name: "Primi giorni a casa", icon: "home-outline" },
];

const pregnancySource: Reference = {
  label: "Lettura di approfondimento: NHS — Pregnancy",
  url: "https://www.nhs.uk/pregnancy/",
};
const birthSource: Reference = {
  label: "Lettura di approfondimento: NHS — Labour and birth",
  url: "https://www.nhs.uk/pregnancy/labour-and-birth/",
};
const postpartumSource: Reference = {
  label: "Lettura di approfondimento: NHS — After the birth",
  url: "https://www.nhs.uk/pregnancy/labour-and-birth/after-the-birth/",
};
const feedingSource: Reference = {
  label: "Lettura di approfondimento: NHS — Feeding your baby",
  url: "https://www.nhs.uk/conditions/baby/breastfeeding-and-bottle-feeding/",
};
const whoSource: Reference = {
  label: "Lettura di approfondimento: OMS — Breastfeeding",
  url: "https://www.who.int/health-topics/breastfeeding",
};
const mentalSource: Reference = {
  label: "Lettura di approfondimento: NHS — Postnatal depression",
  url: "https://www.nhs.uk/mental-health/conditions/post-natal-depression/overview/",
};
const photo = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;
type DemoArticle = Pick<
  Article,
  | "id"
  | "title"
  | "subtitle"
  | "categoryId"
  | "stage"
  | "weekFrom"
  | "weekTo"
  | "imageUrl"
  | "sections"
  | "references"
>;
const section = (heading: string, ...paragraphs: string[]): ArticleSection => ({
  heading,
  paragraphs,
});
const article = (value: DemoArticle): Article => ({
  ...value,
  slug: value.id,
  readingMinutes: Math.max(
    3,
    Math.ceil(
      value.sections
        .flatMap((part) => part.paragraphs)
        .join(" ")
        .split(/\s+/).length / 180,
    ),
  ),
  authorName: "Redazione Nido · esempio",
  authorRole: "Contenuto dimostrativo, da revisionare",
  publishedAt: "2026-10-01T09:00:00.000Z",
  reviewedAt: null,
  reviewerName: null,
  status: "published",
  approved: false,
  isDemo: true,
  videoUrl: null,
});

export const articles: Article[] = [
  article({
    id: "primo-trimestre",
    title: "Il primo trimestre, un passo alla volta",
    subtitle:
      "Fare spazio alle domande e costruire una rete di riferimento, senza dover sapere già tutto.",
    categoryId: "pregnancy",
    stage: "pregnancy",
    weekFrom: 0,
    weekTo: 13,
    imageUrl: photo("photo-1518621736915-f3b1c41bfd00"),
    sections: [
      section(
        "Una nuova quotidianità",
        "Scoprire una gravidanza può portare emozioni diverse, anche nello stesso giorno. Non esiste un modo giusto di sentirsi e non devi trasformare subito ogni abitudine.",
        "Un primo passo pratico è individuare il professionista o il servizio che seguirà il percorso. Chiedi come organizzare gli incontri e a chi rivolgerti tra un appuntamento e l’altro.",
        "Questo esempio offre spunti per preparare una conversazione: non descrive cosa dovrebbe accadere nel tuo caso e non sostituisce le indicazioni ricevute durante una visita.",
      ),
      section(
        "Preparare il primo incontro",
        "Puoi annotare le domande in un posto semplice da ritrovare. Portare una persona di fiducia è una possibilità da valutare in base alle tue preferenze e all’organizzazione del servizio.",
        "Chiedi quali documenti servono, come vengono condivisi gli esiti e quali decisioni richiedono un colloquio. Il calendario degli accertamenti va definito con chi ti segue.",
        "Se assumi farmaci o integratori, parla con il professionista prima di modificarli. Nido non fornisce prescrizioni, dosaggi o indicazioni individuali sui trattamenti.",
      ),
      section(
        "Scegliere cosa condividere",
        "Puoi decidere con chi parlare della gravidanza e quando farlo. Anche chiedere di mantenere riservata una notizia è un bisogno legittimo.",
        "Con il partner o una persona vicina, prova a nominare un aiuto concreto: accompagnarti, occuparsi di una commissione, ascoltare senza cercare subito una soluzione.",
        "Per dubbi sul tuo stato di salute contatta il servizio che ti segue. Se la preoccupazione è urgente, rivolgiti subito ai servizi sanitari appropriati del luogo in cui ti trovi.",
      ),
    ],
    references: [pregnancySource],
  }),
  article({
    id: "secondo-trimestre",
    title: "Secondo trimestre: trovare il proprio ritmo",
    subtitle:
      "Tempo per informarsi, adattare la quotidianità e fare domande alle persone che ti accompagnano.",
    categoryId: "pregnancy",
    stage: "pregnancy",
    weekFrom: 14,
    weekTo: 27,
    imageUrl: photo("photo-1441974231531-c6227db76b6e"),
    sections: [
      section(
        "Un percorso personale",
        "Il passaggio da un trimestre all’altro è un riferimento orientativo, non un calendario di come dovresti sentirti. I racconti di altre persone non sono un metro per valutare il tuo percorso.",
        "Negli incontri puoi raccontare come stai vivendo lavoro, sonno, relazioni e organizzazione delle giornate. Sono aspetti utili a una conversazione completa, insieme alle domande cliniche.",
        "Scegli poche fonti affidabili e lascia spazio alle domande che restano aperte. Cercare informazioni per molte ore può rendere più difficile capire quali siano davvero pertinenti.",
      ),
      section(
        "Dare forma alla preparazione",
        "Se ti interessa un corso di accompagnamento alla nascita, chiedi al consultorio o al servizio che ti segue quali percorsi sono disponibili e come partecipare.",
        "Puoi iniziare a conoscere i luoghi previsti per l’assistenza: modalità di accesso, contatti, presenza dell’accompagnatore e possibilità di porre domande prima della nascita.",
        "Per attività fisica, alimentazione e cambiamenti che ti preoccupano, chiedi indicazioni individuali al professionista. Questo contenuto non stabilisce attività adatte alla tua situazione.",
      ),
      section(
        "Uno spazio per il partner",
        "Chi accompagna può partecipare alla preparazione senza conoscere ogni dettaglio sanitario. Condividere soltanto ciò che desideri aiuta a rispettare la tua riservatezza.",
        "Una breve conversazione settimanale può concentrarsi su una domanda: che cosa renderebbe più semplice la prossima settimana? Le risposte possono essere pratiche, emotive o entrambe.",
        "Se desideri supporto aggiuntivo, puoi chiedere quali servizi del territorio lavorano con future e nuove famiglie. Informarsi non obbliga a prendere subito una decisione.",
      ),
    ],
    references: [pregnancySource],
  }),
  article({
    id: "terzo-trimestre",
    title: "Verso la nascita, con spazio per l’imprevisto",
    subtitle:
      "Prepararsi al terzo trimestre con informazioni chiare e un’organizzazione flessibile.",
    categoryId: "pregnancy",
    stage: "pregnancy",
    weekFrom: 28,
    weekTo: 43,
    imageUrl: photo("photo-1499209974431-9dddcece7f88"),
    sections: [
      section(
        "Mettere in ordine le informazioni",
        "Prepararsi alla nascita non significa prevedere ogni passaggio. Può significare sapere dove trovare un numero utile, quali documenti tenere insieme e chi può accompagnarti.",
        "Verifica con il punto nascita le modalità di accesso e le indicazioni per contattare l’équipe. Le informazioni organizzative possono cambiare da una struttura all’altra.",
        "Conserva una lista essenziale e facilmente accessibile anche a una persona di fiducia. Evita di inserire informazioni sanitarie private in documenti condivisi se non è necessario.",
      ),
      section(
        "Preferenze, domande e decisioni",
        "Puoi preparare una pagina con desideri e domande da discutere: persone presenti, comunicazione, ambiente e possibilità di sollievo dal dolore. Non è un contratto sul futuro.",
        "Chiedi come vengono spiegate le opzioni e come partecipare alle decisioni se le circostanze cambiano. Comprendere una proposta comprende anche poter chiedere una spiegazione più semplice.",
        "Le scelte cliniche richiedono una valutazione individuale. Le preferenze non sostituiscono il colloquio con i professionisti che ti assistono.",
      ),
      section(
        "Preparare il dopo",
        "Un piccolo piano per i giorni successivi può includere pasti, spesa, visite e persone da contattare. Lascia spazio a cambiare idea dopo aver conosciuto le tue esigenze.",
        "Concorda in anticipo chi può fare da filtro alle richieste di amici e parenti. Accogliere aiuto non significa dover accogliere visite quando non lo desideri.",
        "Per sapere quando e come contattare l’assistenza durante l’attesa, usa le indicazioni del tuo servizio. Nido non determina se un segnale richiede una valutazione.",
      ),
    ],
    references: [pregnancySource, birthSource],
  }),
  article({
    id: "borsa-parto",
    title: "La borsa del parto, senza il superfluo",
    subtitle:
      "Una base semplice da adattare alle indicazioni del punto nascita e alle tue abitudini.",
    categoryId: "preparation",
    stage: "pregnancy",
    weekFrom: 28,
    weekTo: 43,
    imageUrl: photo("photo-1600210492486-724fe5c67fb0"),
    sections: [
      section(
        "Prima della lista, la struttura",
        "Chiedi al punto nascita la lista aggiornata di ciò che viene fornito e di ciò che è utile portare. Le esigenze locali possono essere diverse dagli elenchi trovati online.",
        "La checklist Nido è un esempio adattabile, non una prescrizione né un elenco di acquisti obbligatori. Puoi eliminare, sostituire o rimandare ciò che non ti serve.",
        "Se qualcuno prepara la borsa con te, mostragli dove trovare le cose essenziali. Una disposizione chiara può essere più utile di avere molti oggetti.",
      ),
      section(
        "Tre piccoli gruppi",
        "Puoi separare documenti richiesti dalla struttura, oggetti per il tuo comfort e cambi indicati per il neonato. Verifica personalmente quali documenti sono necessari.",
        "Scegli capi comodi e oggetti che usi già, senza cercare un corredo perfetto. Una busta separata per gli indumenti usati può semplificare l’organizzazione.",
        "Per alimenti, bevande, dispositivi personali o altri oggetti con indicazioni specifiche, chiedi alla struttura. Non dare per scontato che ogni prodotto sia consentito o richiesto.",
      ),
      section(
        "Una preparazione condivisa",
        "Annota chi può recuperare eventuali oggetti dimenticati e come gestire le necessità pratiche a casa. Il partner può occuparsene senza accedere a documenti sanitari riservati.",
        "Puoi tenere pronta una lista degli oggetti da aggiungere all’ultimo momento, come caricatore e occhiali. Non è necessario completare tutto in una sola giornata.",
        "La borsa sostiene l’organizzazione, ma non misura quanto sei pronta alla nascita. Le competenze genitoriali non dipendono dal numero di cose acquistate.",
      ),
    ],
    references: [birthSource],
  }),
  article({
    id: "partner-travaglio",
    title: "Esserci: il partner durante il travaglio",
    subtitle:
      "Ascolto, presenza e piccoli gesti per accompagnare rispettando desideri e riservatezza.",
    categoryId: "partner",
    stage: "pregnancy",
    weekFrom: 24,
    weekTo: 43,
    imageUrl: photo("photo-1516589178581-6cd7833ae3b2"),
    sections: [
      section(
        "Chiedere, prima di fare",
        "La persona che accompagna non deve conoscere tutte le risposte. Può cominciare chiedendo quali gesti sono graditi e quali, invece, diventano invadenti.",
        "Un bisogno può cambiare nel tempo: silenzio, parole, contatto o spazio. Chiedere di nuovo con semplicità permette di adattare la presenza senza interpretare ogni comportamento.",
        "Concordate prima quali informazioni sanitarie possono essere condivise. Essere partner non dà automaticamente diritto a ricevere o raccontare dettagli privati.",
      ),
      section(
        "Collaborare con l’équipe",
        "Chiedete al punto nascita come viene organizzata la presenza dell’accompagnatore. È utile conoscere anche le indicazioni pratiche di accesso, cambio e permanenza.",
        "Il partner può aiutare a ricordare una domanda o chiedere una spiegazione, rispettando la voce e le decisioni della persona assistita. Non assume il ruolo del professionista.",
        "Se non capisci una proposta, puoi chiedere di ripeterla con parole più chiare. Nelle situazioni urgenti segui le indicazioni dell’équipe presente.",
      ),
      section(
        "Anche dopo la nascita",
        "Accompagnare continua nelle attività quotidiane: organizzare il rientro, comunicare con i familiari, preparare qualcosa da mangiare o proteggere un momento di riposo.",
        "Anche il partner può cercare uno spazio di ascolto e fare domande. Chiedere sostegno permette di partecipare senza pretendere di reggere ogni cosa da soli.",
        "Non c’è un modello unico di famiglia: la persona di fiducia può essere un partner, un’amica, un familiare o un’altra figura scelta.",
      ),
    ],
    references: [birthSource],
  }),
  article({
    id: "fasi-travaglio",
    title: "Le fasi del travaglio: parole per orientarsi",
    subtitle:
      "Conoscere il linguaggio dell’assistenza aiuta a fare domande, senza prevedere tempi o percorsi individuali.",
    categoryId: "birth",
    stage: "pregnancy",
    weekFrom: 28,
    weekTo: 43,
    imageUrl: photo("photo-1470252649378-9c29740c9fa8"),
    sections: [
      section(
        "Una mappa, non un cronometro",
        "Nei racconti sulla nascita si incontrano parole come fase iniziale, dilatazione, nascita e secondamento. Sono termini che l’équipe può spiegare nel contesto della tua assistenza.",
        "Una suddivisione in fasi serve a descrivere il processo, non a fissare il tempo che dovresti impiegare. Il tuo percorso richiede osservazione e valutazione professionale.",
        "Questo testo dimostrativo non aiuta a riconoscere il travaglio né a decidere quando recarsi in ospedale. Per questi aspetti segui le indicazioni del servizio che ti accompagna.",
      ),
      section(
        "Capire le proposte",
        "Durante l’assistenza puoi chiedere che cosa sta accadendo e qual è lo scopo di una valutazione o di una proposta. Usa parole tue, anche se non conosci i termini tecnici.",
        "Prima della nascita può essere utile informarsi su come il servizio presenta le opzioni di sostegno e sollievo dal dolore. Le possibilità vanno discusse individualmente.",
        "Un piano può cambiare. Avere spiegazioni comprensibili aiuta a partecipare alle decisioni senza dover avere studiato ogni possibile scenario.",
      ),
      section(
        "Tenere vicini i contatti",
        "Conserva le istruzioni e i recapiti forniti dal punto nascita, distinguendo gli appuntamenti dai contatti per necessità non programmate.",
        "Se hai una preoccupazione urgente per la tua salute o quella del bambino, contatta immediatamente i servizi sanitari appropriati. Non attendere una risposta dall’app.",
        "Non confrontare la tua situazione con storie lette online per decidere se chiedere aiuto: una conversazione diretta con il servizio è il riferimento appropriato.",
      ),
    ],
    references: [birthSource],
  }),
  article({
    id: "primi-giorni",
    title: "I primi giorni: conoscersi, con calma",
    subtitle:
      "Piccoli accordi e una rete di aiuto per lasciare spazio alla nuova quotidianità.",
    categoryId: "home",
    stage: "postpartum",
    weekFrom: 0,
    weekTo: 4,
    imageUrl: photo("photo-1519689680058-324335c77eba"),
    sections: [
      section(
        "Organizzare l’essenziale",
        "Il rientro può portare domande molto pratiche. Tenere insieme appuntamenti, contatti e indicazioni ricevute alla dimissione evita di dover cercare tutto in un momento impegnativo.",
        "Puoi preparare una piccola zona con gli oggetti di uso quotidiano, rispettando le indicazioni professionali sulla sicurezza. Una casa pronta non deve essere una casa perfetta.",
        "Se qualcosa nelle istruzioni non è chiaro, chiedi al servizio di rispiegarlo prima del rientro o contattalo dopo. L’app non verifica le condizioni del neonato.",
      ),
      section(
        "Un aiuto che risponde ai bisogni",
        "Alle persone vicine puoi proporre compiti precisi: portare un pasto, fare una commissione, occuparsi del bucato o accompagnare a un incontro.",
        "Decidete insieme come gestire visite e messaggi. Potete cambiare gli accordi quando avete bisogno di più tranquillità, senza dover dare spiegazioni dettagliate.",
        "Chi sostiene la famiglia può chiedere di cosa c’è bisogno prima di offrire consigli. Stare accanto significa anche rispettare scelte e tempi diversi dai propri.",
      ),
      section(
        "A chi rivolgersi",
        "Individua i contatti del pediatra, dell’ostetrica, del consultorio e dei servizi che avete scelto. Chiedi quali canali usare per dubbi ordinari e per urgenze.",
        "Nido propone contenuti educativi, ma non è un canale di assistenza o monitoraggio. Se una preoccupazione è urgente, rivolgiti subito al servizio sanitario appropriato.",
        "Chiedere aiuto pratico o professionale fa parte della costruzione di una rete. Non occorre aspettare di sentirsi senza risorse per cercare un confronto.",
      ),
    ],
    references: [postpartumSource],
  }),
  article({
    id: "recupero-puerperio",
    title: "Il puerperio: dare spazio al recupero",
    subtitle:
      "Un tempo da attraversare con sostegno, informazioni e aspettative rispettose.",
    categoryId: "recovery",
    stage: "postpartum",
    weekFrom: 0,
    weekTo: 12,
    imageUrl: photo("photo-1441974231531-c6227db76b6e"),
    sections: [
      section(
        "Il corpo non ha una scadenza",
        "Il recupero dopo una nascita è personale. Fotografie e racconti sui social non indicano come dovrebbe essere il tuo corpo né quali attività siano adatte a te.",
        "Alla dimissione chiedi istruzioni scritte e comprensibili sulle cure e sui controlli previsti. Le indicazioni dipendono dal percorso di nascita e dalla tua situazione.",
        "Questo esempio non suggerisce esercizi, trattamenti o tempi di ripresa. Per iniziare o modificare attività dopo il parto serve un confronto con il professionista che ti segue.",
      ),
      section(
        "Semplificare la giornata",
        "Quando possibile, riduci gli impegni non essenziali e condividi i compiti. Una richiesta concreta può essere più semplice da accogliere di un generico invito ad aiutare.",
        "Prevedere pasti semplici, commissioni condivise e momenti senza visite può creare spazio per le tue esigenze. L’organizzazione è un sostegno, non un’altra prova da superare.",
        "Se non hai una rete vicina, chiedi al consultorio o ai servizi territoriali quali risorse sono disponibili. Le opportunità variano secondo il luogo in cui vivi.",
      ),
      section(
        "Portare le domande al controllo",
        "Puoi annotare domande sul recupero fisico, sulla sessualità, sull’alimentazione e sul benessere emotivo. Sono temi da poter discutere con rispetto e riservatezza.",
        "Non utilizzare la data del parto come unica misura di ciò che dovresti riuscire a fare. Il confronto individuale aiuta a definire il percorso appropriato per te.",
        "Per una preoccupazione sanitaria urgente, contatta subito i servizi appropriati. Non aspettare il controllo programmato o una conferma da un contenuto online.",
      ),
    ],
    references: [postpartumSource],
  }),
  article({
    id: "prime-poppate",
    title: "Le prime poppate: imparare insieme",
    subtitle:
      "Un invito a osservare, fare domande e cercare sostegno senza giudizi.",
    categoryId: "breastfeeding",
    stage: "postpartum",
    weekFrom: 0,
    weekTo: 8,
    imageUrl: photo("photo-1519689680058-324335c77eba"),
    sections: [
      section(
        "Partire dai tuoi desideri",
        "Se desideri allattare al seno, puoi parlarne con l’ostetrica o con il servizio che ti accompagna. Le tue domande meritano ascolto, anche se il percorso è diverso da come lo immaginavi.",
        "Le prime esperienze possono richiedere un confronto pratico con una persona qualificata. Un articolo non può osservare una poppata, valutare il bambino o proporre un piano individuale.",
        "Nido non misura la quantità di latte, non valuta la crescita e non sostituisce gli incontri con i professionisti. Le indicazioni personali restano affidate al servizio che vi segue.",
      ),
      section(
        "Preparare domande utili",
        "Puoi chiedere a chi rivolgerti per osservare insieme una poppata e come organizzare il supporto dopo il rientro. È utile conoscere recapiti e modalità di accesso prima di averne bisogno.",
        "Se hai dolore, dubbi sull’alimentazione o preoccupazioni per il bambino, chiedi una valutazione professionale. Non cercare di confermare una difficoltà confrontando fotografie o descrizioni online.",
        "Questo contenuto non propone posizioni obbligatorie, frequenze personalizzate o rimedi. Ogni indicazione va contestualizzata da chi può conoscere la vostra situazione.",
      ),
      section(
        "Una rete che sostiene",
        "Il partner o una persona vicina può aiutare occupandosi delle attività quotidiane, facilitando gli appuntamenti o proteggendo uno spazio tranquillo quando lo desideri.",
        "Il modo di alimentare il bambino non definisce il valore di un genitore. È possibile cercare sostegno rispettoso anche quando desideri riconsiderare un percorso.",
        "Le letture indicate sono materiali generali di approfondimento. Questo testo è dimostrativo e richiede revisione professionale prima dell’uso come contenuto editoriale di produzione.",
      ),
    ],
    references: [feedingSource, whoSource],
  }),
  article({
    id: "supporto-allattamento",
    title: "Allattamento: chiedere sostegno è un primo passo",
    subtitle:
      "Come trovare un riferimento e preparare una richiesta di aiuto chiara.",
    categoryId: "breastfeeding",
    stage: "postpartum",
    weekFrom: 0,
    weekTo: 52,
    imageUrl: photo("photo-1518621736915-f3b1c41bfd00"),
    sections: [
      section(
        "Non serve aspettare",
        "Puoi chiedere supporto per una domanda, per una difficoltà o semplicemente per capire meglio il percorso. Non devi dimostrare che il problema sia abbastanza importante.",
        "Dolore, preoccupazioni sull’alimentazione o dubbi sul benessere del bambino richiedono un confronto con un professionista. L’app non riconosce né classifica questi segnali.",
        "Se la tua preoccupazione è urgente, rivolgiti immediatamente ai servizi sanitari appropriati. Non aspettare la risposta di un gruppo online o un appuntamento ordinario.",
      ),
      section(
        "Trovare il contatto giusto",
        "Il consultorio, l’ostetrica, il pediatra o il servizio della tua zona possono indicare come accedere a un sostegno qualificato. Chiedi quali sono le competenze della persona a cui ti rivolgi.",
        "Quando contatti il servizio, puoi dire qual è la domanda che vuoi affrontare e chiedere tempi e modalità della valutazione. Condividi informazioni sanitarie soltanto attraverso canali appropriati.",
        "Se il primo canale non è disponibile, chiedi quale alternativa utilizzare. La rete varia da un territorio all’altro: Nido non offre prenotazione, chat clinica o assistenza in tempo reale.",
      ),
      section(
        "Portare la tua esperienza",
        "Le tue preferenze, la vita quotidiana e il sostegno disponibile fanno parte della conversazione. Puoi chiedere che ogni proposta sia spiegata senza giudizi o pressioni.",
        "Dopo l’incontro, verifica di aver compreso il piano concordato e quando ricontattare il professionista. Se un’indicazione non è chiara, è appropriato chiedere di rispiegarla.",
        "Un percorso può cambiare. Il supporto dovrebbe aiutare a prendere decisioni informate nella tua situazione, senza misurare il valore della tua esperienza con un unico risultato.",
      ),
    ],
    references: [feedingSource, whoSource],
  }),
  article({
    id: "percorsi-alimentazione",
    title: "Alimentare il neonato: percorsi diversi",
    subtitle:
      "Informazioni e sostegno rispettosi, qualunque sia il percorso della tua famiglia.",
    categoryId: "feeding",
    stage: "postpartum",
    weekFrom: 0,
    weekTo: 26,
    imageUrl: photo("photo-1519689680058-324335c77eba"),
    sections: [
      section(
        "Una conversazione senza etichette",
        "Le famiglie possono avere esperienze diverse di alimentazione del neonato. Il sostegno professionale parte dalla situazione del bambino, dalle esigenze della famiglia e da informazioni comprensibili.",
        "Puoi scegliere in Nido quali argomenti desideri leggere, senza dichiarare come alimenti il bambino. Questa scelta serve a organizzare la biblioteca, non a fornire consigli clinici personalizzati.",
        "Le preferenze non sostituiscono una valutazione del pediatra o di altri professionisti. L’app non calcola quantità, intervalli, crescita o adeguatezza dell’alimentazione.",
      ),
      section(
        "Chiedere istruzioni appropriate",
        "Per latte formulato, latte estratto o un percorso misto, chiedi indicazioni specifiche su preparazione, conservazione e utilizzo ai professionisti e alle fonti ufficiali pertinenti.",
        "Non modificare diluizioni o modalità di preparazione sulla base di suggerimenti informali. Questo esempio non contiene istruzioni operative per preparare o somministrare alimenti.",
        "Se hai ricevuto indicazioni diverse, chiedi al professionista di chiarirle nel vostro contesto. Annotare la domanda aiuta a portare il dubbio alla persona che può valutarlo.",
      ),
      section(
        "Proteggere uno spazio di fiducia",
        "Commenti e confronti possono rendere difficile parlare delle proprie esigenze. Puoi chiedere alle persone vicine di rispettare le decisioni concordate con i professionisti.",
        "Chi ti sostiene può aiutare nelle attività pratiche e nell’organizzare gli incontri, senza sostituirsi alle indicazioni ricevute. Non occorre giustificare ogni scelta ai conoscenti.",
        "Se temi che il bambino non stia bene, contatta l’assistenza sanitaria. Per preoccupazioni urgenti chiedi aiuto immediato: leggere altri articoli non è un passaggio necessario.",
      ),
    ],
    references: [feedingSource],
  }),
  article({
    id: "benessere-emotivo",
    title: "Dopo la nascita, anche tu hai bisogno di cura",
    subtitle:
      "Dare voce alle emozioni e conoscere le persone a cui chiedere sostegno.",
    categoryId: "wellbeing",
    stage: "postpartum",
    weekFrom: 0,
    weekTo: 52,
    imageUrl: photo("photo-1470252649378-9c29740c9fa8"),
    sections: [
      section(
        "Fare posto alle emozioni",
        "Dopo la nascita possono esserci emozioni diverse da quelle immaginate. Non è necessario mostrarsi sempre felici o disponibili per meritare ascolto.",
        "Questo articolo non distingue una condizione clinica da un’esperienza emotiva. Se ciò che provi ti preoccupa, parlane con il professionista o con il servizio di salute mentale della tua zona.",
        "Nido non propone questionari diagnostici o punteggi di rischio. Le parole che usi per raccontarti sono un punto di partenza per una conversazione, non un risultato da interpretare nell’app.",
      ),
      section(
        "Rendere concreto il sostegno",
        "Puoi iniziare dicendo a una persona fidata: “Ho bisogno che mi ascolti” oppure “Vorrei aiuto per contattare un professionista”. Non serve trovare una spiegazione perfetta.",
        "Chiedere un aiuto pratico può alleggerire un compito, ma non sostituisce il sostegno sanitario quando ne hai bisogno. I due livelli possono essere presenti insieme.",
        "Anche il partner e gli altri genitori possono chiedere ascolto per le proprie emozioni. Le reti familiari e i servizi territoriali possono offrire punti di contatto differenti.",
      ),
      section(
        "Quando la preoccupazione è urgente",
        "Se temi per la tua sicurezza o quella di un’altra persona, o pensi di poter fare del male a te o al bambino, contatta immediatamente i servizi sanitari di emergenza del luogo in cui ti trovi.",
        "Se puoi farlo in sicurezza, chiedi a una persona fidata di restare con te e aiutarti a raggiungere l’assistenza. Non attendere una risposta dall’app, che non è monitorata.",
        "I numeri e i servizi dipendono dal Paese: verifica i contatti locali. Questa indicazione non è una valutazione della tua situazione e non deve ritardare la richiesta di aiuto.",
      ),
    ],
    references: [mentalSource, postpartumSource],
  }),
];

function checklist(
  id: string,
  title: string,
  description: string,
  stage: Stage,
  labels: string[],
): Checklist {
  return {
    id,
    title,
    description,
    stage,
    status: "published",
    approved: false,
    isDemo: true,
    items: labels.map((label, index) => ({ id: `${id}-${index + 1}`, label })),
  };
}
export const checklists: Checklist[] = [
  checklist(
    "borsa",
    "Preparare la borsa per il parto",
    "Un esempio da adattare alla lista del punto nascita: nessun acquisto è obbligatorio.",
    "pregnancy",
    [
      "Richiedere la lista aggiornata del punto nascita",
      "Raccogliere i documenti indicati dalla struttura",
      "Scegliere cambi comodi per te",
      "Preparare i cambi del neonato richiesti",
      "Aggiungere gli oggetti personali di uso quotidiano",
      "Segnare cosa aggiungere all’ultimo momento",
    ],
  ),
  checklist(
    "casa",
    "Preparare la casa",
    "Piccoli accorgimenti pratici: adattali ai tuoi spazi e alle indicazioni professionali sulla sicurezza.",
    "pregnancy",
    [
      "Individuare uno spazio per il cambio",
      "Preparare una zona per gli oggetti di uso quotidiano",
      "Chiedere indicazioni aggiornate sul sonno sicuro",
      "Organizzare alcuni pasti o la spesa",
      "Condividere i compiti domestici",
      "Conservare i recapiti dei servizi scelti",
    ],
  ),
  checklist(
    "ospedale",
    "Cosa portare in ospedale",
    "Una lista organizzativa dimostrativa: verifica sempre le richieste della tua struttura.",
    "pregnancy",
    [
      "Controllare percorso e modalità di accesso",
      "Tenere insieme i documenti richiesti",
      "Preparare caricatore e oggetti personali",
      "Verificare le indicazioni per l’accompagnatore",
      "Individuare chi può recuperare oggetti dimenticati",
      "Organizzare il rientro con un trasporto adatto",
    ],
  ),
  checklist(
    "neonato",
    "Prime necessità del neonato",
    "Spunti adattabili, senza liste di acquisti universali o istruzioni cliniche.",
    "all",
    [
      "Preparare pochi cambi adatti alla stagione",
      "Raccogliere l’occorrente quotidiano per il cambio",
      "Verificare con un professionista l’organizzazione del sonno",
      "Chiedere indicazioni per il trasporto sicuro",
      "Individuare il riferimento pediatrico",
      "Chiedere dove trovare supporto sull’alimentazione",
    ],
  ),
  checklist(
    "rientro",
    "Prepararsi al rientro a casa",
    "Suggerimenti pratici da concordare con chi ti sostiene; non sono requisiti medici.",
    "postpartum",
    [
      "Rileggere le indicazioni ricevute alla dimissione",
      "Annotare i controlli e i recapiti forniti",
      "Concordare aiuti pratici per i primi giorni",
      "Organizzare pasti e commissioni",
      "Stabilire preferenze su visite e messaggi",
      "Chiedere chiarimenti sulle istruzioni non comprese",
    ],
  ),
  checklist(
    "partner",
    "Supporto del partner",
    "La presenza può assumere tante forme, rispettando scelte e riservatezza.",
    "all",
    [
      "Chiedere quali gesti sono graditi",
      "Concordare quali informazioni condividere",
      "Organizzare commissioni e compiti domestici",
      "Proteggere i momenti di tranquillità richiesti",
      "Conoscere i contatti dei servizi scelti",
      "Prevedere anche uno spazio di ascolto per te",
    ],
  ),
];
