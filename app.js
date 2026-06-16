const STORAGE_KEY = "stagescope-04-13-geo-state-v1";

const sectors = ["Numerique", "Sante", "Industrie", "Culture", "Environnement", "Commerce", "Droit", "Social"];
const mapBounds = {
  north: 44.78,
  south: 43.02,
  west: 4.25,
  east: 6.98
};
const mapZoomLevels = [1, 1.55, 2.25, 3.1];
const mapRoadLabels = [
  { selector: ".label-a7", x: 22, y: 44 },
  { selector: ".label-a8", x: 47, y: 63 },
  { selector: ".label-a51", x: 52, y: 39 },
  { selector: ".label-a50", x: 46, y: 79 }
];
const villageNames = new Set([
  "Saintes-Maries-de-la-Mer",
  "Fuveau",
  "Volonne",
  "Banon",
  "Colmars",
  "Entrevaux",
  "Reillanne",
  "La Brillanne",
  "Dauphin",
  "Mane",
  "Quinson",
  "Allemagne-en-Provence"
]);
const cityLandmarks = [
  { name: "Marseille", lat: 43.2965, lng: 5.3698, size: "major", dept: "13" },
  { name: "Aix-en-Provence", lat: 43.5297, lng: 5.4474, size: "major", dept: "13" },
  { name: "Arles", lat: 43.6766, lng: 4.6278, size: "major", dept: "13" },
  { name: "Martigues", lat: 43.4053, lng: 5.0475, size: "major", dept: "13" },
  { name: "Istres", lat: 43.5136, lng: 4.9878, size: "major", dept: "13" },
  { name: "Salon-de-Provence", lat: 43.6402, lng: 5.097, size: "major", dept: "13" },
  { name: "Aubagne", lat: 43.2928, lng: 5.5707, size: "major", dept: "13" },
  { name: "La Ciotat", lat: 43.1748, lng: 5.6046, size: "major", dept: "13" },
  { name: "Vitrolles", lat: 43.46, lng: 5.2486, size: "minor", dept: "13" },
  { name: "Marignane", lat: 43.416, lng: 5.2145, size: "minor", dept: "13" },
  { name: "Les Pennes-Mirabeau", lat: 43.4103, lng: 5.3133, size: "minor", dept: "13" },
  { name: "Gardanne", lat: 43.4549, lng: 5.4693, size: "minor", dept: "13" },
  { name: "Allauch", lat: 43.3366, lng: 5.482, size: "minor", dept: "13" },
  { name: "Cassis", lat: 43.214, lng: 5.5396, size: "minor", dept: "13" },
  { name: "Gemenos", lat: 43.2978, lng: 5.6286, size: "minor", dept: "13" },
  { name: "Trets", lat: 43.4482, lng: 5.6836, size: "minor", dept: "13" },
  { name: "Lambesc", lat: 43.6531, lng: 5.2627, size: "minor", dept: "13" },
  { name: "Miramas", lat: 43.5867, lng: 5.0038, size: "minor", dept: "13" },
  { name: "Fos-sur-Mer", lat: 43.4376, lng: 4.9446, size: "minor", dept: "13" },
  { name: "Port-de-Bouc", lat: 43.405, lng: 4.9863, size: "minor", dept: "13" },
  { name: "Tarascon", lat: 43.8058, lng: 4.6603, size: "minor", dept: "13" },
  { name: "Saint-Remy-de-Provence", lat: 43.7895, lng: 4.8317, size: "minor", dept: "13" },
  { name: "Chateaurenard", lat: 43.8814, lng: 4.8547, size: "minor", dept: "13" },
  { name: "Saintes-Maries-de-la-Mer", lat: 43.4523, lng: 4.4292, size: "minor", dept: "13" },
  { name: "Mallemort", lat: 43.7315, lng: 5.1797, size: "minor", dept: "13" },
  { name: "Peyrolles-en-Provence", lat: 43.645, lng: 5.5843, size: "minor", dept: "13" },
  { name: "Venelles", lat: 43.5988, lng: 5.4858, size: "minor", dept: "13" },
  { name: "Meyreuil", lat: 43.4872, lng: 5.4954, size: "minor", dept: "13" },
  { name: "Rognac", lat: 43.4876, lng: 5.2338, size: "minor", dept: "13" },
  { name: "Fuveau", lat: 43.4552, lng: 5.5617, size: "minor", dept: "13" },
  { name: "Digne-les-Bains", lat: 44.092, lng: 6.2356, size: "major", dept: "04" },
  { name: "Manosque", lat: 43.8344, lng: 5.7836, size: "major", dept: "04" },
  { name: "Sisteron", lat: 44.1985, lng: 5.9437, size: "major", dept: "04" },
  { name: "Forcalquier", lat: 43.9597, lng: 5.7795, size: "major", dept: "04" },
  { name: "Barcelonnette", lat: 44.3867, lng: 6.6517, size: "major", dept: "04" },
  { name: "Castellane", lat: 43.8464, lng: 6.5128, size: "minor", dept: "04" },
  { name: "Riez", lat: 43.8186, lng: 6.0936, size: "minor", dept: "04" },
  { name: "Oraison", lat: 43.9162, lng: 5.9181, size: "minor", dept: "04" },
  { name: "Chateau-Arnoux-Saint-Auban", lat: 44.0939, lng: 5.9978, size: "minor", dept: "04" },
  { name: "Peyruis", lat: 44.028, lng: 5.9405, size: "minor", dept: "04" },
  { name: "Volonne", lat: 44.1109, lng: 6.0131, size: "minor", dept: "04" },
  { name: "Moustiers-Sainte-Marie", lat: 43.8462, lng: 6.2215, size: "minor", dept: "04" },
  { name: "Valensole", lat: 43.8378, lng: 5.9845, size: "minor", dept: "04" },
  { name: "Greoux-les-Bains", lat: 43.7575, lng: 5.8831, size: "minor", dept: "04" },
  { name: "Sainte-Tulle", lat: 43.7861, lng: 5.7652, size: "minor", dept: "04" },
  { name: "Banon", lat: 44.0383, lng: 5.6287, size: "minor", dept: "04" },
  { name: "Annot", lat: 43.9657, lng: 6.6682, size: "minor", dept: "04" },
  { name: "Seyne", lat: 44.3508, lng: 6.3564, size: "minor", dept: "04" },
  { name: "Allos", lat: 44.2404, lng: 6.6286, size: "minor", dept: "04" },
  { name: "Colmars", lat: 44.1831, lng: 6.6261, size: "minor", dept: "04" },
  { name: "Entrevaux", lat: 43.9492, lng: 6.8103, size: "minor", dept: "04" },
  { name: "Saint-Andre-les-Alpes", lat: 43.9687, lng: 6.5086, size: "minor", dept: "04" },
  { name: "Les Mees", lat: 44.0292, lng: 5.9762, size: "minor", dept: "04" },
  { name: "Pierrevert", lat: 43.8125, lng: 5.7481, size: "minor", dept: "04" },
  { name: "Villeneuve", lat: 43.8952, lng: 5.8625, size: "minor", dept: "04" },
  { name: "Volx", lat: 43.8785, lng: 5.8417, size: "minor", dept: "04" },
  { name: "Reillanne", lat: 43.8811, lng: 5.6578, size: "minor", dept: "04" },
  { name: "La Brillanne", lat: 43.9264, lng: 5.8907, size: "minor", dept: "04" },
  { name: "Dauphin", lat: 43.8982, lng: 5.7841, size: "minor", dept: "04" },
  { name: "Mane", lat: 43.9389, lng: 5.7668, size: "minor", dept: "04" },
  { name: "Quinson", lat: 43.7016, lng: 6.0385, size: "minor", dept: "04" },
  { name: "Allemagne-en-Provence", lat: 43.7822, lng: 6.0061, size: "minor", dept: "04" }
];

const initialState = {
  currentStudentId: "stu-1",
  currentCompanyId: "co-1",
  selectedCompanyId: "co-1",
  students: [
    {
      id: "stu-1",
      name: "Camille Martin",
      level: "3e",
      city: "Marseille",
      email: "camille.martin@example.fr",
      sectors: ["Numerique", "Culture"],
      bio: "Je souhaite comprendre comment une equipe transforme une idee en service concret. Je suis a l'aise a l'oral et j'aime poser des questions.",
      availability: "Mars, Avril",
      mobility: "Transports en commun et 20 km autour de Marseille"
    }
  ],
  companies: [
    {
      id: "co-1",
      name: "Atelier Vieux-Port",
      sector: "Numerique",
      city: "Marseille",
      contact: "contact@atelier-vieux-port.fr",
      lat: 43.2965,
      lng: 5.3698,
      description: "Studio produit qui accueille des eleves pour observer UX, developpement web, gestion de projet et tests utilisateurs."
    },
    {
      id: "co-2",
      name: "Clinique Sainte-Victoire",
      sector: "Sante",
      city: "Aix-en-Provence",
      contact: "stages@sainte-victoire.fr",
      lat: 43.5297,
      lng: 5.4474,
      description: "Etablissement de soins proposant des parcours d'observation encadres avec infirmiers, secretariat medical et logistique."
    },
    {
      id: "co-3",
      name: "FabLab Aubagne-Gemenos",
      sector: "Industrie",
      city: "Aubagne",
      contact: "accueil@fablab-aubagne.fr",
      lat: 43.2928,
      lng: 5.5707,
      description: "Atelier de fabrication numerique avec decouverte de la conception, impression 3D, securite atelier et maintenance."
    },
    {
      id: "co-4",
      name: "Scene Antique Arles",
      sector: "Culture",
      city: "Arles",
      contact: "mediation@scene-antique.fr",
      lat: 43.6766,
      lng: 4.6278,
      description: "Theatre municipal ouvrant ses coulisses: mediation culturelle, regie, billetterie, communication et accueil public."
    },
    {
      id: "co-5",
      name: "Terra Durance Conseil",
      sector: "Environnement",
      city: "Manosque",
      contact: "rh@terra-durance.fr",
      lat: 43.8344,
      lng: 5.7836,
      description: "Bureau d'etudes specialise en diagnostic de dechets, terrain, cartographie et sensibilisation des collectivites."
    },
    {
      id: "co-6",
      name: "Durance Commerce",
      sector: "Commerce",
      city: "Sisteron",
      contact: "stages@durance-commerce.fr",
      lat: 44.1985,
      lng: 5.9437,
      description: "Reseau de boutiques et service client permettant d'observer vente, merchandising, relation client et logistique locale."
    },
    {
      id: "co-7",
      name: "Hopital Digne Provence",
      sector: "Sante",
      city: "Digne-les-Bains",
      contact: "stages@hopital-digne.fr",
      lat: 44.092,
      lng: 6.2356,
      description: "Parcours d'observation des metiers hospitaliers non sensibles, accueil, logistique, soins encadres et secretariat."
    },
    {
      id: "co-8",
      name: "Calanques Mediation",
      sector: "Environnement",
      city: "Marseille",
      contact: "contact@calanques-mediation.fr",
      lat: 43.214,
      lng: 5.5396,
      description: "Association de sensibilisation environnementale autour du littoral, des calanques et de la protection des milieux."
    },
    {
      id: "co-9",
      name: "Logistique Etang de Berre",
      sector: "Industrie",
      city: "Martigues",
      contact: "rh@logistique-berre.fr",
      lat: 43.4053,
      lng: 5.0475,
      description: "Plateforme d'observation des flux, de la maintenance, de la securite industrielle et de la chaine logistique."
    },
    {
      id: "co-10",
      name: "Maison Numerique Forcalquier",
      sector: "Numerique",
      city: "Forcalquier",
      contact: "contact@maison-numerique-forcalquier.fr",
      lat: 43.9597,
      lng: 5.7795,
      description: "Espace numerique local pour decouvrir assistance utilisateurs, ateliers, inclusion digitale et gestion de projets."
    },
    {
      id: "co-11",
      name: "Atelier Patrimoine Barcelonnette",
      sector: "Culture",
      city: "Barcelonnette",
      contact: "mediation@patrimoine-barcelonnette.fr",
      lat: 44.3867,
      lng: 6.6517,
      description: "Structure culturelle proposant une observation autour du patrimoine, de la mediation et de l'accueil des publics."
    },
    {
      id: "co-12",
      name: "Agro Valensole",
      sector: "Environnement",
      city: "Valensole",
      contact: "stages@agro-valensole.fr",
      lat: 43.8378,
      lng: 5.9845,
      description: "Exploitation et laboratoire terrain pour observer biodiversite, agriculture, irrigation et circuits courts."
    },
    {
      id: "co-13",
      name: "Librairie Canebiere",
      sector: "Commerce",
      city: "Marseille",
      contact: "contact@librairie-canebiere.fr",
      lat: 43.2984,
      lng: 5.3822,
      description: "Commerce culturel independant situe en centre-ville, reference dans l'annuaire sans offre active pour le moment."
    },
    {
      id: "co-14",
      name: "Cabinet Juris Prado",
      sector: "Droit",
      city: "Marseille",
      contact: "accueil@juris-prado.fr",
      lat: 43.2791,
      lng: 5.3872,
      description: "Cabinet juridique local reference dans l'annuaire des entreprises du secteur."
    },
    {
      id: "co-15",
      name: "Atelier Graphique Rotonde",
      sector: "Culture",
      city: "Aix-en-Provence",
      contact: "bonjour@atelier-rotonde.fr",
      lat: 43.5266,
      lng: 5.4451,
      description: "Studio de creation visuelle et communication locale, sans offre publiee actuellement."
    },
    {
      id: "co-16",
      name: "Services Solidaires Digne",
      sector: "Social",
      city: "Digne-les-Bains",
      contact: "contact@services-solidaires-digne.fr",
      lat: 44.0903,
      lng: 6.2339,
      description: "Association de services aux habitants, referencee comme acteur local sans stage publie actuellement."
    },
    {
      id: "co-17",
      name: "Pharmacie des Thermes",
      sector: "Sante",
      city: "Manosque",
      contact: "contact@pharmacie-thermes.fr",
      lat: 43.833,
      lng: 5.7861,
      description: "Entreprise de sante de proximite referencee dans l'annuaire, sans offre de stage active."
    },
    {
      id: "co-18",
      name: "Bureau Technique Berre",
      sector: "Industrie",
      city: "Martigues",
      contact: "info@bt-berre.fr",
      lat: 43.4078,
      lng: 5.052,
      description: "Bureau technique local pour maintenance et methodes industrielles, reference sans offre active."
    },
    {
      id: "co-19",
      name: "Galerie du Rhone",
      sector: "Culture",
      city: "Arles",
      contact: "contact@galerie-rhone.fr",
      lat: 43.6781,
      lng: 4.6312,
      description: "Lieu culturel et galerie d'exposition referencee dans l'annuaire des entreprises locales."
    },
    {
      id: "co-20",
      name: "NumeriCamp Forcalquier",
      sector: "Numerique",
      city: "Forcalquier",
      contact: "hello@numericamp-forcalquier.fr",
      lat: 43.9612,
      lng: 5.7832,
      description: "Petite structure numerique locale referencee sans offre de stage d'observation active."
    }
  ],
  offers: [
    {
      id: "off-1",
      companyId: "co-1",
      title: "Decouverte produit et developpement web",
      period: "Mars",
      duration: "5 jours",
      spots: 3,
      mode: "Presentiel",
      studentProfile: "Curiosite pour le numerique, envie de tester un prototype",
      program: "Accueil, observation des rituels d'equipe, mini audit d'une interface, restitution de fin de stage.",
      tutors: [
        { name: "Nora Benali", role: "Product manager", email: "nora@atelier-vieux-port.fr" },
        { name: "Hugo Perez", role: "Developpeur front-end", email: "hugo@atelier-vieux-port.fr" }
      ]
    },
    {
      id: "off-2",
      companyId: "co-2",
      title: "Parcours des metiers d'une clinique",
      period: "Fevrier",
      duration: "3 jours",
      spots: 2,
      mode: "Presentiel",
      studentProfile: "Discretion, ponctualite, interet pour le soin",
      program: "Immersion encadree dans les services non sensibles, echanges metiers, decouverte des flux patients.",
      tutors: [{ name: "Aline Robert", role: "Cadre de sante", email: "aline.robert@saintroch.fr" }]
    },
    {
      id: "off-3",
      companyId: "co-4",
      title: "Dans les coulisses d'un spectacle",
      period: "Avril",
      duration: "4 jours",
      spots: 4,
      mode: "Hybride",
      studentProfile: "Interet pour la culture, aisance relationnelle",
      program: "Mediation, communication, visite technique, observation d'une repetition et preparation de salle.",
      tutors: [{ name: "Mael Durand", role: "Responsable mediation", email: "mael@sceneduparc.fr" }]
    },
    {
      id: "off-4",
      companyId: "co-5",
      title: "Cartographie terrain et environnement",
      period: "Mai",
      duration: "4 jours",
      spots: 2,
      mode: "Presentiel",
      studentProfile: "Interet pour l'environnement, sens de l'observation",
      program: "Observation d'un diagnostic terrain, lecture de cartes, preparation d'un compte rendu et sensibilisation aux usages de l'eau.",
      tutors: [{ name: "Sofia Garnier", role: "Chargee d'etudes environnement", email: "sofia@terra-durance.fr" }]
    },
    {
      id: "off-5",
      companyId: "co-7",
      title: "Decouvrir les services supports d'un hopital",
      period: "Mars",
      duration: "3 jours",
      spots: 2,
      mode: "Presentiel",
      studentProfile: "Discretion, ponctualite, envie de comprendre les metiers publics",
      program: "Accueil, secretariat, logistique, circuit patient non sensible et echanges avec les equipes encadrantes.",
      tutors: [{ name: "Claire Vidal", role: "Responsable accueil", email: "claire@hopital-digne.fr" }]
    },
    {
      id: "off-6",
      companyId: "co-9",
      title: "Flux industriels autour de l'etang de Berre",
      period: "Avril",
      duration: "5 jours",
      spots: 3,
      mode: "Presentiel",
      studentProfile: "Curiosite pour la logistique, la securite et l'organisation",
      program: "Decouverte d'une plateforme, observation des flux, securite, maintenance et coordination des equipes.",
      tutors: [{ name: "Romain Azzaro", role: "Responsable exploitation", email: "romain@logistique-berre.fr" }]
    },
    {
      id: "off-7",
      companyId: "co-10",
      title: "Inclusion numerique en territoire rural",
      period: "Juin",
      duration: "4 jours",
      spots: 2,
      mode: "Hybride",
      studentProfile: "Aisance relationnelle, interet pour l'informatique utile",
      program: "Accueil du public, aide aux usages numeriques, preparation d'un atelier et decouverte de la gestion d'un lieu ressource.",
      tutors: [{ name: "Lea Mercier", role: "Mediatrice numerique", email: "lea@maison-numerique-forcalquier.fr" }]
    },
    {
      id: "off-8",
      companyId: "co-11",
      title: "Patrimoine et mediation en vallee de l'Ubaye",
      period: "Mai",
      duration: "3 jours",
      spots: 2,
      mode: "Presentiel",
      studentProfile: "Interet pour l'histoire locale et l'accueil du public",
      program: "Preparation d'une visite, observation de l'accueil, inventaire simple et mediation aupres d'un groupe scolaire.",
      tutors: [{ name: "Noe Lambert", role: "Mediateur patrimoine", email: "noe@patrimoine-barcelonnette.fr" }]
    },
    {
      id: "off-9",
      companyId: "co-12",
      title: "Agriculture et biodiversite sur le plateau de Valensole",
      period: "Juin",
      duration: "4 jours",
      spots: 3,
      mode: "Presentiel",
      studentProfile: "Interet pour le vivant, les circuits courts et le terrain",
      program: "Observation d'une exploitation, suivi biodiversite, irrigation, conditionnement et relation avec les partenaires locaux.",
      tutors: [{ name: "Ilan Roux", role: "Responsable terrain", email: "ilan@agro-valensole.fr" }]
    }
  ],
  applications: [
    {
      id: "app-1",
      studentId: "stu-1",
      offerId: "off-1",
      message: "Je veux comprendre comment se construit une application utile au quotidien.",
      status: "Preselection"
    }
  ]
};

let state = loadState();
let mapView = {
  zoomIndex: 0,
  centerX: 50,
  centerY: 58
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return cloneData(initialState);
  try {
    return { ...cloneData(initialState), ...JSON.parse(saved) };
  } catch {
    return cloneData(initialState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function makeId(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function activeStudent() {
  return state.students.find((student) => student.id === state.currentStudentId);
}

function activeCompany() {
  return state.companies.find((company) => company.id === state.currentCompanyId);
}

function companyById(id) {
  return state.companies.find((company) => company.id === id);
}

function field(form, name) {
  return form.elements.namedItem(name);
}

function offerById(id) {
  return state.offers.find((offer) => offer.id === id);
}

function projectPoint({ lat, lng, x, y }) {
  if (Number.isFinite(lat) && Number.isFinite(lng)) {
    const projectedX = ((lng - mapBounds.west) / (mapBounds.east - mapBounds.west)) * 100;
    const projectedY = ((mapBounds.north - lat) / (mapBounds.north - mapBounds.south)) * 100;
    return {
      x: Math.min(94, Math.max(6, projectedX)),
      y: Math.min(92, Math.max(7, projectedY))
    };
  }
  return { x: x || 50, y: y || 50 };
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function currentMapZoom() {
  return mapZoomLevels[mapView.zoomIndex];
}

function toScreenPoint(point) {
  const zoom = currentMapZoom();
  return {
    x: 50 + (point.x - mapView.centerX) * zoom,
    y: 50 + (point.y - mapView.centerY) * zoom
  };
}

function isPointVisible(point, margin = 8) {
  return point.x >= -margin && point.x <= 100 + margin && point.y >= -margin && point.y <= 100 + margin;
}

function cityDisplaySize(city) {
  if (city.size === "major") return "major";
  return villageNames.has(city.name) ? "village" : "town";
}

function shouldShowCity(city, point) {
  const zoomIndex = mapView.zoomIndex;
  const size = cityDisplaySize(city);
  if (size === "major") return isPointVisible(point, 15);
  if (size === "town") return zoomIndex >= 1 && isPointVisible(point, 10);
  return zoomIndex >= 2 && isPointVisible(point, 8);
}

function setMapCenterFromGeo(item) {
  const point = projectPoint(item);
  mapView.centerX = clamp(point.x, 5, 95);
  mapView.centerY = clamp(point.y, 5, 95);
}

function zoomMap(delta) {
  const nextIndex = clamp(mapView.zoomIndex + delta, 0, mapZoomLevels.length - 1);
  if (nextIndex === mapView.zoomIndex) return;
  if (delta > 0 && mapView.zoomIndex === 0) {
    const selected = companyById(state.selectedCompanyId);
    if (selected) setMapCenterFromGeo(selected);
  }
  mapView.zoomIndex = nextIndex;
  if (mapView.zoomIndex === 0) {
    mapView.centerX = 50;
    mapView.centerY = 58;
  }
  render();
}

function renderMapTransform() {
  const zoom = currentMapZoom();
  const translateX = 50 - mapView.centerX * zoom;
  const translateY = 50 - mapView.centerY * zoom;
  const layer = $("#map-moving-layer");
  layer.style.transform = `translate(${translateX}%, ${translateY}%) scale(${zoom})`;
  const canvas = $("#map-canvas");
  canvas.dataset.zoom = String(mapView.zoomIndex);
}

function renderMapRoadLabels() {
  mapRoadLabels.forEach((label) => {
    const point = toScreenPoint(label);
    const element = $(label.selector);
    element.style.left = `${point.x}%`;
    element.style.top = `${point.y}%`;
    element.hidden = !isPointVisible(point, 5);
  });
}

function applicationsForOffer(offerId) {
  return state.applications.filter((application) => application.offerId === offerId);
}

function currentFilters() {
  return {
    sector: $("#sector-filter").value,
    city: $("#city-filter").value.trim().toLowerCase(),
    period: $("#period-filter").value,
    remote: $("#remote-filter").checked
  };
}

function filteredCompanies() {
  const filters = currentFilters();
  return state.companies.filter((company) => {
    const offers = state.offers.filter((offer) => offer.companyId === company.id);
    const matchesSector = filters.sector === "all" || company.sector === filters.sector;
    const matchesCity = !filters.city || company.city.toLowerCase().includes(filters.city);
    const matchesPeriod = filters.period === "all" || offers.some((offer) => offer.period.toLowerCase().includes(filters.period.toLowerCase()));
    const matchesRemote = filters.remote || offers.every((offer) => offer.mode !== "Distanciel guide");
    return matchesSector && matchesCity && matchesPeriod && matchesRemote;
  });
}

function routeTo(route) {
  $$(".route").forEach((section) => section.classList.toggle("is-visible", section.id === `route-${route}`));
  $$(".nav-link").forEach((link) => link.classList.toggle("active", link.dataset.route === route));
  if (location.hash !== `#${route}`) {
    history.replaceState(null, "", `#${route}`);
  }
}

function initSelects() {
  const sectorOptions = ['<option value="all">Tous les secteurs</option>', ...sectors.map((sector) => `<option value="${sector}">${sector}</option>`)].join("");
  $("#sector-filter").innerHTML = sectorOptions;
  field($("#company-form"), "sector").innerHTML = sectors.map((sector) => `<option>${sector}</option>`).join("");
  field($("#student-form"), "sectors").innerHTML = sectors.map((sector) => `<option>${sector}</option>`).join("");
  refreshCompanyOptions();
}

function refreshCompanyOptions() {
  const select = field($("#offer-form"), "companyId");
  select.innerHTML = state.companies.map((company) => `<option value="${company.id}">${escapeHtml(company.name)} - ${escapeHtml(company.city)}</option>`).join("");
  if (state.currentCompanyId) select.value = state.currentCompanyId;
}

function render() {
  renderSwitchers();
  renderSession();
  renderMetrics();
  renderExplorer();
  renderStudentDashboard();
  renderCompanyDashboard();
  refreshCompanyOptions();
  saveState();
}

function renderSwitchers() {
  const studentSwitch = $("#student-switch");
  studentSwitch.innerHTML = [
    '<option value="">Nouveau profil etudiant</option>',
    ...state.students.map((student) => `<option value="${student.id}">${escapeHtml(student.name)} - ${escapeHtml(student.city)}</option>`)
  ].join("");
  studentSwitch.value = state.currentStudentId || "";

  const companySwitch = $("#company-switch");
  companySwitch.innerHTML = [
    '<option value="">Nouvelle entreprise</option>',
    ...state.companies.map((company) => `<option value="${company.id}">${escapeHtml(company.name)} - ${escapeHtml(company.city)}</option>`)
  ].join("");
  companySwitch.value = state.currentCompanyId || "";
}

function renderSession() {
  const student = activeStudent();
  const company = activeCompany();
  $("#session-summary").innerHTML = `
    <div class="session-card">
      <span>Etudiant actif <strong>${student ? escapeHtml(student.name) : "Aucun"}</strong></span>
      <span>Entreprise active <strong>${company ? escapeHtml(company.name) : "Aucune"}</strong></span>
    </div>
  `;
}

function renderMetrics() {
  const openSpots = state.offers.reduce((sum, offer) => sum + Number(offer.spots), 0);
  $("#metrics").innerHTML = [
    metric(state.companies.length, "entreprises"),
    metric(state.offers.length, "offres actives"),
    metric(openSpots, "places publiees")
  ].join("");
}

function metric(value, label) {
  return `<div class="metric"><strong>${value}</strong><span>${label}</span></div>`;
}

function renderExplorer() {
  const companies = filteredCompanies();
  if (!companies.some((company) => company.id === state.selectedCompanyId)) {
    state.selectedCompanyId = companies[0]?.id || null;
  }
  $("#result-count").textContent = `${companies.length} resultat${companies.length > 1 ? "s" : ""}`;
  renderMapTransform();
  renderMapRoadLabels();
  renderMapControls();
  renderMapCities();
  renderMap(companies);
  renderCompanyList(companies);
}

function renderMapControls() {
  $("#map-zoom-label").textContent = `${currentMapZoom().toFixed(currentMapZoom() === 1 ? 0 : 1)}x`;
  $("#map-zoom-out").disabled = mapView.zoomIndex === 0;
  $("#map-zoom-in").disabled = mapView.zoomIndex === mapZoomLevels.length - 1;
}

function renderMapCities() {
  $("#map-cities").innerHTML = cityLandmarks.map((city) => {
    const projectedPoint = projectPoint(city);
    const point = toScreenPoint(projectedPoint);
    const displaySize = cityDisplaySize(city);
    if (!shouldShowCity(city, point)) return "";
    return `
      <div class="map-city ${displaySize}" data-dept="${escapeHtml(city.dept || "")}" style="left:${point.x}%; top:${point.y}%;">
        ${escapeHtml(city.name)}
      </div>
    `;
  }).join("");
}

function renderMap(companies) {
  $("#map-pins").innerHTML = companies.map((company) => {
    const offerCount = state.offers.filter((offer) => offer.companyId === company.id).length;
    const projectedPoint = projectPoint(company);
    const point = toScreenPoint(projectedPoint);
    if (!isPointVisible(point, 8)) return "";
    return `
      <button class="map-pin ${company.id === state.selectedCompanyId ? "active" : ""} ${offerCount ? "has-offer" : "directory-only"}" data-company-id="${company.id}" data-sector="${company.sector}" style="left:${point.x}%; top:${point.y}%;" aria-label="${escapeHtml(company.name)}">
        <span class="pin-dot" aria-hidden="true"></span>
        <span class="pin-tooltip"><strong>${escapeHtml(company.name)}</strong><small>${escapeHtml(company.city)} - ${escapeHtml(company.sector)} - ${offerCount ? `${offerCount} offre${offerCount > 1 ? "s" : ""}` : "annuaire"}</small></span>
      </button>
    `;
  }).join("");
}

function renderCompanyList(companies) {
  if (!companies.length) {
    $("#company-list").innerHTML = `<div class="empty-state">Aucune entreprise ne correspond aux filtres actuels.</div>`;
    return;
  }

  $("#company-list").innerHTML = companies.map((company) => {
    const offers = state.offers.filter((offer) => offer.companyId === company.id);
    return `
      <article class="company-card ${company.id === state.selectedCompanyId ? "active" : ""}" data-company-id="${company.id}">
        <div class="card-topline">
          <h4>${escapeHtml(company.name)}</h4>
          <span class="pill">${escapeHtml(company.sector)}</span>
        </div>
        <p>${escapeHtml(company.description)}</p>
        <div class="meta-row">
          <span class="pill">${escapeHtml(company.city)}</span>
          <span class="pill ${offers.length ? "success" : ""}">${offers.length ? `${offers.length} offre${offers.length > 1 ? "s" : ""}` : "annuaire"}</span>
        </div>
        <div class="stack-list">
          ${offers.map(renderOfferCard).join("") || `<div class="empty-state">Entreprise referencee dans l'annuaire. Aucune offre de stage d'observation publiee pour le moment.</div>`}
        </div>
      </article>
    `;
  }).join("");
}

function renderOfferCard(offer) {
  const company = companyById(offer.companyId);
  const taken = applicationsForOffer(offer.id).filter((application) => application.status === "Selection").length;
  const remaining = Math.max(0, Number(offer.spots) - taken);
  const student = activeStudent();
  const existing = student && state.applications.find((application) => application.studentId === student.id && application.offerId === offer.id);
  return `
    <article class="offer-card">
      <div class="card-topline">
        <h4>${escapeHtml(offer.title)}</h4>
        <span class="pill ${remaining ? "success" : "warning"}">${remaining} place${remaining > 1 ? "s" : ""}</span>
      </div>
      <p>${escapeHtml(offer.program)}</p>
      <div class="meta-row">
        <span class="pill">${escapeHtml(company?.city || "")}</span>
        <span class="pill">${escapeHtml(offer.period)}</span>
        <span class="pill">${escapeHtml(offer.duration)}</span>
        <span class="pill">${escapeHtml(offer.mode)}</span>
      </div>
      <p><strong>Profil attendu:</strong> ${escapeHtml(offer.studentProfile)}</p>
      <p><strong>Tuteur(s):</strong> ${offer.tutors.map((tutor) => `${escapeHtml(tutor.name)} (${escapeHtml(tutor.role)})`).join(", ")}</p>
      <div class="card-actions">
        <button class="primary-button" type="button" data-apply="${offer.id}" ${!student || existing ? "disabled" : ""}>
          ${existing ? "Candidature envoyee" : "Candidater"}
        </button>
      </div>
    </article>
  `;
}

function renderStudentDashboard() {
  const student = activeStudent();
  $("#student-status-pill").textContent = student ? "Profil actif" : "Aucun profil actif";
  if (!student) {
    $("#student-dashboard").innerHTML = `<div class="empty-state">Creez un profil pour suivre vos candidatures.</div>`;
    return;
  }

  $("#student-dashboard").innerHTML = `
    <article class="candidate-card">
      <div class="card-topline">
        <h4>${escapeHtml(student.name)}</h4>
        <span class="pill">${escapeHtml(student.level)}</span>
      </div>
      <p>${escapeHtml(student.bio)}</p>
      <div class="meta-row">
        <span class="pill">${escapeHtml(student.city)}</span>
        ${student.sectors.map((sector) => `<span class="pill">${escapeHtml(sector)}</span>`).join("")}
      </div>
    </article>
    ${state.applications
      .filter((application) => application.studentId === student.id)
      .map((application) => {
        const offer = offerById(application.offerId);
        const company = offer && companyById(offer.companyId);
        return `
          <article class="application-card">
            <div class="card-topline">
              <h4>${escapeHtml(offer?.title || "Offre supprimee")}</h4>
              <span class="pill">${escapeHtml(application.status)}</span>
            </div>
            <p>${escapeHtml(company?.name || "")} - ${escapeHtml(company?.city || "")}</p>
            <p>${escapeHtml(application.message)}</p>
          </article>
        `;
      }).join("") || `<div class="empty-state">Aucune candidature pour le moment.</div>`}
  `;
}

function renderCompanyDashboard() {
  const company = activeCompany();
  $("#company-status-pill").textContent = company ? "Entreprise active" : "Aucune entreprise active";
  if (!company) {
    $("#company-dashboard").innerHTML = `<div class="empty-state">Inscrivez une entreprise pour publier et suivre des offres.</div>`;
    return;
  }

  const offers = state.offers.filter((offer) => offer.companyId === company.id);
  const matchingStudents = state.students.filter((student) => student.sectors.includes(company.sector));

  $("#company-dashboard").innerHTML = `
    <article class="company-card">
      <div class="card-topline">
        <h4>${escapeHtml(company.name)}</h4>
        <span class="pill">${escapeHtml(company.sector)}</span>
      </div>
      <p>${escapeHtml(company.description)}</p>
      <div class="meta-row">
        <span class="pill">${escapeHtml(company.city)}</span>
        <span class="pill">${offers.length} offre${offers.length > 1 ? "s" : ""}</span>
      </div>
    </article>
    ${offers.map((offer) => renderCompanyOffer(offer)).join("") || `<div class="empty-state">Aucune offre publiee. Ajoutez une offre depuis l'onglet dedie.</div>`}
    <div class="panel-header"><h3>Etudiants compatibles</h3><span class="pill">${matchingStudents.length}</span></div>
    ${matchingStudents.map(renderCandidate).join("") || `<div class="empty-state">Aucun profil etudiant compatible avec ce secteur.</div>`}
  `;
}

function renderCompanyOffer(offer) {
  const applications = applicationsForOffer(offer.id);
  return `
    <article class="offer-card">
      <div class="card-topline">
        <h4>${escapeHtml(offer.title)}</h4>
        <span class="pill">${applications.length} candidature${applications.length > 1 ? "s" : ""}</span>
      </div>
      <p>${escapeHtml(offer.period)} - ${escapeHtml(offer.duration)} - ${escapeHtml(offer.mode)}</p>
      <div class="stack-list">
        ${applications.map(renderApplicationForCompany).join("") || `<div class="empty-state">Pas encore de candidature.</div>`}
      </div>
    </article>
  `;
}

function renderApplicationForCompany(application) {
  const student = state.students.find((candidate) => candidate.id === application.studentId);
  return `
    <article class="application-card">
      <div class="card-topline">
        <h4>${escapeHtml(student?.name || "Etudiant")}</h4>
        <span class="pill">${escapeHtml(application.status)}</span>
      </div>
      <p>${escapeHtml(application.message)}</p>
      <div class="card-actions">
        <button class="secondary-button" type="button" data-status="${application.id}" data-next="Preselection">Preselectionner</button>
        <button class="primary-button" type="button" data-status="${application.id}" data-next="Selection">Selectionner</button>
        <button class="secondary-button" type="button" data-status="${application.id}" data-next="Refus">Refuser</button>
      </div>
    </article>
  `;
}

function renderCandidate(student) {
  return `
    <article class="candidate-card">
      <div class="card-topline">
        <h4>${escapeHtml(student.name)}</h4>
        <span class="pill">${escapeHtml(student.level)}</span>
      </div>
      <p>${escapeHtml(student.bio)}</p>
      <div class="meta-row">
        <span class="pill">${escapeHtml(student.city)}</span>
        <span class="pill">${escapeHtml(student.availability)}</span>
      </div>
    </article>
  `;
}

function setStudentForm(student) {
  const form = $("#student-form");
  field(form, "name").value = student?.name || "";
  field(form, "level").value = student?.level || "";
  field(form, "city").value = student?.city || "";
  field(form, "email").value = student?.email || "";
  field(form, "bio").value = student?.bio || "";
  field(form, "availability").value = student?.availability || "";
  field(form, "mobility").value = student?.mobility || "";
  $$("option", field(form, "sectors")).forEach((option) => {
    option.selected = Boolean(student?.sectors?.includes(option.value));
  });
}

function setCompanyForm(company) {
  const form = $("#company-form");
  field(form, "name").value = company?.name || "";
  field(form, "sector").value = company?.sector || sectors[0];
  field(form, "city").value = company?.city || "";
  field(form, "contact").value = company?.contact || "";
  field(form, "lat").value = company?.lat || 43.5297;
  field(form, "lng").value = company?.lng || 5.4474;
  field(form, "description").value = company?.description || "";
}

function addTutorRow(tutor = { name: "", role: "", email: "" }) {
  const wrapper = document.createElement("div");
  wrapper.className = "tutor-card";
  wrapper.innerHTML = `
    <label>Nom<input name="tutorName" required value="${escapeHtml(tutor.name)}" /></label>
    <label>Poste<input name="tutorRole" required value="${escapeHtml(tutor.role)}" /></label>
    <label>Email<input name="tutorEmail" type="email" required value="${escapeHtml(tutor.email)}" /></label>
    <button class="icon-button" type="button" title="Retirer ce tuteur" data-remove-tutor>×</button>
  `;
  $("#tutors").append(wrapper);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("visible"), 2600);
}

function bindEvents() {
  let dragStart = null;
  let dragMoved = false;

  window.addEventListener("hashchange", () => routeTo(location.hash.replace("#", "") || "explorer"));

  $$(".nav-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      routeTo(link.dataset.route);
    });
  });

  $$("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => routeTo(button.dataset.jump));
  });

  ["sector-filter", "city-filter", "period-filter", "remote-filter"].forEach((id) => {
    $(`#${id}`).addEventListener("input", render);
  });

  $("#map-zoom-in").addEventListener("click", (event) => {
    event.stopPropagation();
    zoomMap(1);
  });

  $("#map-zoom-out").addEventListener("click", (event) => {
    event.stopPropagation();
    zoomMap(-1);
  });

  $("#map-canvas").addEventListener("click", (event) => {
    if (dragMoved) {
      dragMoved = false;
      return;
    }
    if (event.target.closest(".map-controls") || event.target.closest("[data-company-id]")) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const screenX = ((event.clientX - rect.left) / rect.width) * 100;
    const screenY = ((event.clientY - rect.top) / rect.height) * 100;
    const zoom = currentMapZoom();
    mapView.centerX = clamp(mapView.centerX + (screenX - 50) / zoom, 0, 100);
    mapView.centerY = clamp(mapView.centerY + (screenY - 50) / zoom, 0, 100);
    render();
  });

  $("#map-canvas").addEventListener("pointerdown", (event) => {
    if (event.target.closest(".map-controls") || event.target.closest("[data-company-id]")) return;
    const rect = event.currentTarget.getBoundingClientRect();
    dragStart = {
      x: event.clientX,
      y: event.clientY,
      width: rect.width,
      height: rect.height,
      centerX: mapView.centerX,
      centerY: mapView.centerY
    };
    dragMoved = false;
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.classList.add("is-dragging");
  });

  $("#map-canvas").addEventListener("pointermove", (event) => {
    if (!dragStart) return;
    const deltaX = event.clientX - dragStart.x;
    const deltaY = event.clientY - dragStart.y;
    if (Math.abs(deltaX) + Math.abs(deltaY) > 4) dragMoved = true;
    const zoom = currentMapZoom();
    mapView.centerX = clamp(dragStart.centerX - (deltaX / dragStart.width) * 100 / zoom, 0, 100);
    mapView.centerY = clamp(dragStart.centerY - (deltaY / dragStart.height) * 100 / zoom, 0, 100);
    render();
  });

  $("#map-canvas").addEventListener("pointerup", (event) => {
    dragStart = null;
    event.currentTarget.classList.remove("is-dragging");
  });

  $("#map-canvas").addEventListener("pointercancel", (event) => {
    dragStart = null;
    event.currentTarget.classList.remove("is-dragging");
  });

  $("#student-switch").addEventListener("change", (event) => {
    state.currentStudentId = event.currentTarget.value || null;
    setStudentForm(activeStudent());
    render();
  });

  $("#company-switch").addEventListener("change", (event) => {
    state.currentCompanyId = event.currentTarget.value || null;
    state.selectedCompanyId = state.currentCompanyId || state.selectedCompanyId;
    setCompanyForm(activeCompany());
    render();
  });

  $("#new-student").addEventListener("click", () => {
    state.currentStudentId = null;
    setStudentForm(null);
    render();
    showToast("Formulaire pret pour un nouvel etudiant.");
  });

  $("#new-company").addEventListener("click", () => {
    state.currentCompanyId = null;
    setCompanyForm(null);
    render();
    showToast("Formulaire pret pour une nouvelle entreprise.");
  });

  $("#map-pins").addEventListener("click", (event) => {
    const pin = event.target.closest("[data-company-id]");
    if (!pin) return;
    event.stopPropagation();
    state.selectedCompanyId = pin.dataset.companyId;
    const company = companyById(state.selectedCompanyId);
    if (company) setMapCenterFromGeo(company);
    render();
  });

  $("#company-list").addEventListener("click", (event) => {
    const companyCard = event.target.closest("[data-company-id]");
    if (companyCard) {
      state.selectedCompanyId = companyCard.dataset.companyId;
      const company = companyById(state.selectedCompanyId);
      if (company) setMapCenterFromGeo(company);
    }

    const applyButton = event.target.closest("[data-apply]");
    if (applyButton) {
      const student = activeStudent();
      if (!student) {
        routeTo("etudiant");
        showToast("Creez un profil etudiant avant de candidater.");
        return;
      }
      const offer = offerById(applyButton.dataset.apply);
      state.applications.push({
        id: makeId("app"),
        studentId: student.id,
        offerId: offer.id,
        message: `${student.name} souhaite decouvrir ${offer.title.toLowerCase()} et peut se rendre disponible sur ${student.availability}.`,
        status: "Nouvelle"
      });
      showToast("Candidature envoyee a l'entreprise.");
    }
    render();
  });

  $("#student-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const selectedSectors = $$("option:checked", field(form, "sectors")).map((option) => option.value);
    const existing = activeStudent();
    const student = {
      id: existing?.id || makeId("stu"),
      name: field(form, "name").value.trim(),
      level: field(form, "level").value.trim(),
      city: field(form, "city").value.trim(),
      email: field(form, "email").value.trim(),
      sectors: selectedSectors.length ? selectedSectors : ["Numerique"],
      bio: field(form, "bio").value.trim(),
      availability: field(form, "availability").value.trim(),
      mobility: field(form, "mobility").value.trim()
    };
    state.students = existing ? state.students.map((item) => (item.id === existing.id ? student : item)) : [...state.students, student];
    state.currentStudentId = student.id;
    showToast("Profil etudiant enregistre.");
    render();
  });

  $("#company-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const existing = activeCompany();
    const company = {
      id: existing?.id || makeId("co"),
      name: field(form, "name").value.trim(),
      sector: field(form, "sector").value,
      city: field(form, "city").value.trim(),
      contact: field(form, "contact").value.trim(),
      lat: Number(field(form, "lat").value),
      lng: Number(field(form, "lng").value),
      description: field(form, "description").value.trim()
    };
    state.companies = existing ? state.companies.map((item) => (item.id === existing.id ? company : item)) : [...state.companies, company];
    state.currentCompanyId = company.id;
    state.selectedCompanyId = company.id;
    showToast("Entreprise enregistree.");
    render();
  });

  $("#add-tutor").addEventListener("click", () => addTutorRow());

  $("#tutors").addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-tutor]");
    if (!button) return;
    if ($$(".tutor-card", $("#tutors")).length === 1) {
      showToast("Une offre doit garder au moins un tuteur.");
      return;
    }
    button.closest(".tutor-card").remove();
  });

  $("#offer-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const tutors = $$(".tutor-card", form).map((row) => ({
      name: $('[name="tutorName"]', row).value.trim(),
      role: $('[name="tutorRole"]', row).value.trim(),
      email: $('[name="tutorEmail"]', row).value.trim()
    }));
    const offer = {
      id: makeId("off"),
      companyId: field(form, "companyId").value,
      title: field(form, "title").value.trim(),
      period: field(form, "period").value.trim(),
      duration: field(form, "duration").value.trim(),
      spots: Number(field(form, "spots").value),
      mode: field(form, "mode").value,
      studentProfile: field(form, "studentProfile").value.trim(),
      program: field(form, "program").value.trim(),
      tutors
    };
    if (!offer.companyId) {
      showToast("Inscrivez ou selectionnez une entreprise avant de publier.");
      return;
    }
    state.offers.unshift(offer);
    state.currentCompanyId = offer.companyId;
    state.selectedCompanyId = offer.companyId;
    form.reset();
    $("#tutors").innerHTML = "";
    addTutorRow();
    showToast("Offre publiee sur la carte.");
    routeTo("explorer");
    render();
  });

  $("#company-dashboard").addEventListener("click", (event) => {
    const button = event.target.closest("[data-status]");
    if (!button) return;
    state.applications = state.applications.map((application) =>
      application.id === button.dataset.status ? { ...application, status: button.dataset.next } : application
    );
    showToast("Statut de candidature mis a jour.");
    render();
  });

  $("#reset-demo").addEventListener("click", () => {
    state = cloneData(initialState);
    localStorage.removeItem(STORAGE_KEY);
    setStudentForm(activeStudent());
    setCompanyForm(activeCompany());
    showToast("Demo reinitialisee.");
    routeTo("explorer");
    render();
  });
}

function boot() {
  initSelects();
  setStudentForm(activeStudent());
  setCompanyForm(activeCompany());
  addTutorRow({ name: "Lea Mercier", role: "Tutrice referente", email: "lea@example.fr" });
  bindEvents();
  routeTo(location.hash.replace("#", "") || "explorer");
  render();
}

boot();
