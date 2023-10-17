import dayjs, { Dayjs } from 'dayjs';

export type Diploma = {
  title: string,
  year: Dayjs,
  grade?: string;
}

const diplomas: Diploma[] = [
  {
    title: 'Licence Communication',
    year: dayjs('2023'),
  },
  {
    title: 'DEUG Communication',
    year: dayjs('2022'),
  },
  {
    title: 'BTS Tourisme',
    year: dayjs('2021'),
  },
  {
    title: 'Baccalauréat Professionnel Gestion Administration',
    year: dayjs('2019'),
    grade: 'Bien',
  },
  {
    title: 'BEP Service des Métiers Administratifs',
    year: dayjs('2018'),
    grade: 'Espagnol B1+',
  },
];

export default diplomas;
