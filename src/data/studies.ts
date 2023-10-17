import dayjs, { Dayjs } from 'dayjs';

export type Study = {
  title: string,
  location: string,
  description: string[],
  startDate: Dayjs,
  endDate: Dayjs
}

const studies: Study[] = [
  {
    title: 'Licence Communication',
    location: 'Université de Lille (59)',
    startDate: dayjs('2021'),
    endDate: dayjs('2023'),
    description: [
      'Théorie de la communication, du marketing',
      'Gestion et fidélisation des communautés sur les réseaux sociaux',
      "Développement de la stratégie d'entreprise",
    ],
  },
  {
    title: 'BTS Tourisme',
    location: 'Lycée Christian Bourquin, Argelès-sur-Mer (66)',
    startDate: dayjs('2019'),
    endDate: dayjs('2021'),
    description: [
      'Cours théoriques et pratiques de marketing',
      "Gestion commerciale des produits et vente d'offres touristiques",
      "Promotion de l'offre touristique en général",
      "Approfondissement de l'anglais et de l'espagnol",
      'Échanges internationaux',
    ],
  },
  {
    title: 'Baccalauréat Professionnel Gestion Administration',
    location: 'LEP Cévenol, Alès (30)',
    startDate: dayjs('2016'),
    endDate: dayjs('2019'),
    description: [
      "Découverte du monde tertiaire et de l'entreprise",
      'Gestion des appels téléphoniques et des mails',
      'Organisation des plannings et des réunions',
      'Création de devis et factures',
    ],
  },
];

export default studies;
