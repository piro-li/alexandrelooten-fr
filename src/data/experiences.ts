import dayjs, { Dayjs } from 'dayjs';

export type Experience = {
  contract: string,
  title: string,
  location: string,
  description: string[],
  startDate: Dayjs,
  endDate: Dayjs
}

const experiences: Experience[] = [
  {
    contract: 'Stage',
    title: 'Chargé de Communication',
    location: 'Korai, Lille (59)',
    startDate: dayjs('20230501'),
    endDate: dayjs('20230630'),
    description: [
      'Publication fréquente de posts sur les différents canaux de communication.',
      "Recherche d'un plan de communication pour la startup et durant le salon Change Now à Paris.",
      'Analyse et suivi des réseaux sociaux.',
    ],
  },
  {
    contract: 'CDI Étudiant',
    title: 'Équipier Polyvalent',
    location: 'Primark, Lille (59)',
    startDate: dayjs('20220501'),
    endDate: dayjs('20230131'),
    description: [
      'Mise en rayon des articles.',
      'Accueil, conseil et encaissement des clients.',
    ],
  },
  {
    contract: 'Saisonnier',
    title: 'Assistant Clientèle',
    location: "Caisse d'Épargne Languedoc Roussillon / Montpellier",
    startDate: dayjs('20210801'),
    endDate: dayjs('20200801'),
    description: [
      'Accueil et conseil des clients.',
      'Gestion des appels.',
      'Encaissement des chèques.',
    ],
  },
  {
    contract: 'Stage',
    title: 'Communication / Tourisme',
    location: 'Chateau de Collioure (66)',
    startDate: dayjs('20201101'),
    endDate: dayjs('20201201'),
    description: [
      "Création d'un parcours virtuel à l'aide de QR Codes.",
      "Recherche et mise en place d'idées pour promouvoir le site.",
      'Encaissement des chèques.',
    ],
  },
  {
    contract: 'Projet BTS',
    title: 'Communication Évènementielle',
    location: 'Lycée Christian Bourquin, Argelès-sur-Mer (66)',
    startDate: dayjs('20190901'),
    endDate: dayjs('20200601'),
    description: [
      "Participation au développement de la communication et création d'un plan de communication pour l'évènement \"Escale à Port-Vendres\" en partenariat avec le Lycée.",
    ],
  },
];

export default experiences;
