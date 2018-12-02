import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Competition } from '../competition';
import { CompetitionService } from '../competition.service';

@Component({
  selector: 'app-competition-detail',
  templateUrl: './competition-detail.component.html',
  styleUrls: ['./competition-detail.component.scss']
})
export class CompetitionDetailComponent implements OnInit {
  competition: Competition;
  constructor(
    private route: ActivatedRoute,
    private competitionService: CompetitionService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCompetition();
  }

  getCompetition(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.competitionService.getCompetition(id)
      .subscribe(competition => this.competition = competition);
  }

}
