import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Competition } from './competition';
import { COMPETITIONS } from './mock-competitions';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor() { }

  getCompetitions(): Observable<Competition[]> {
    return of(COMPETITIONS);
  }

  getCompetition(id: number): Observable<Competition> {
    return of(COMPETITIONS.find(competition => competition.id === id));
  }
}
