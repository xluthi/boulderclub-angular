import { Component, OnInit } from '@angular/core';
import { Competition } from '../competition';
import { COMPETITIONS } from '../mock-competitions';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {
  competitions = COMPETITIONS;
  constructor() { }

  ngOnInit() {
  }

}
