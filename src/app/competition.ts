export class Ranking {
  id: number;
  name: string;
  code: string;
  boulders: number[];
  athletes: {
    name: string,
    dossard: number,
    results: number[]
  }[];
};

export class Competition {
  id: number;
  title: string;
  date: Object;
  gym: string;
  rankings: Ranking[];
};
