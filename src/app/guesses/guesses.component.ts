import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { routes, router } from '../app.routes';


@Component({
  selector: 'app-guesses',
  templateUrl: './guesses.component.html',
  styleUrls: ['./guesses.component.css']
})
export class GuessesComponent implements OnInit {

  // Lines on the board
  guesses = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  constructor(public dataservice: DataService) { 
  }

  ngOnInit() {
  }

}
