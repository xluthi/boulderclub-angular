import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {
  competition = 'Manche de la coupe provinciale jeune de blocs';
  constructor() { }

  ngOnInit() {
  }

}
