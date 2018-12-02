import { Competition, Ranking } from './competition';

export const COMPETITIONS: Competition[] = [
  {
    id: 1,
    title: 'Manche de la coupe provinciale jeune de blocs',
    date: new Date(2018, 9, 11),
    gym: 'Stone Age',
    rankings: [
      {
        id: 1,
        name: 'C (under 18)',
        code: 'C',
        boulders: [1000, 1000, 1000],
        athletes: [
          {
            name: 'Toto',
            dossard: 50,
            results: [2, 1, 0]
          },
          {
            name: 'Tutu',
            dossard: 12,
            results: [1, 1, 0]
          }
        ]
      },
      {
        id: 2,
        name: 'B (under 16)',
        code: 'B',
        boulders: [1000, 1000, 1000],
        athletes: [
          {
            name: 'Romeo',
            dossard: 101,
            results: [2, 2, 2]
          },
          {
            name: 'Ulysse',
            dossard: 102,
            results: [1, 0, 0]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Championnat de Belgique de blocs jeunes',
    date: new Date(2018, 11, 17),
    gym: 'Klimkaffee Hoboken',
    rankings: [
      {
        id: 1,
        name: 'Junior',
        code: 'J',
        boulders: [1000, 1000, 1000, 1000],
        athletes: [
          {
            name: 'Romulus',
            dossard: 210,
            results: [2, 2, 2, 2]
          },
          {
            name: 'Rémus',
            dossard: 201,
            results: [1, 1, 2, 0]
          }
        ]
      }
    ]
  }
];
