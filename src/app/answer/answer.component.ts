import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { routes, router } from '../app.routes';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  answerRay = [];
  txt = '';
  dataservice;

  constructor(dataservice: DataService, private routerAnswer: Router) {
    this.dataservice = dataservice;
  }


  // Initialisation of the combination to guess
  ngOnInit() {
    for (let i = 0; i < 4; i++) {
      this.answerRay.push(Math.floor(Math.random() * 6));
    }
    console.log(this.answerRay);
  }

  gradeGuess = () => {
    this.dataservice.showBtn = false;
    this.compareArrays();
    this.dataservice.activeGuess++;
    this.dataservice.guessArray = [-1, -1, -1, -1];
  }

  compareArrays = () => {
    const gradeRay = [];
    const tempGuessRay = this.copyRay(this.dataservice.guessArray);
    const tempAnswerRay = this.copyRay(this.answerRay);

    // Returns black peg in case of a right answer for a colored peg
    this.answerRay.forEach((peg, i) => {
      if (peg === tempGuessRay[i]) {
        gradeRay.push('black');
        tempGuessRay[i] = -2;
        tempAnswerRay[i] = -1;
      }
    });

    // returns white peg if color of a peg corresponds but the location is different
    tempAnswerRay.forEach((answerPeg, i) => {
      tempGuessRay.forEach((guessPeg, j) => {
        if (answerPeg === guessPeg) {
          gradeRay.push('white');
          tempAnswerRay[i] = -1;
          tempGuessRay[j] = -2;
        }
      });
    });

    gradeRay.forEach((col, i) => {
      document.getElementById(`gradePeg-${this.dataservice.activeGuess}-${i}`).style.backgroundColor = col;
    });


    // Checks if the guess corresponds to the combination
    if (this.checkForWin(gradeRay)) {
      this.dataservice.youWin = true;
      alert('You won ! Congratulations !');
      this.routerAnswer.navigate(['']);
    }

    console.log(gradeRay);
    console.log(this.checkForWin(gradeRay));
    console.log(this.dataservice.youWin);

  }

  copyRay(rayOld) {
    const rayNew = [];
    rayOld.forEach((item) => {
      rayNew.push(item);
    });
    return rayNew;
  }

  checkForWin(ray) {
    if (ray.length !== 4) {
      return false;
    }
    if (ray[0] === 'black' && ray[1] === 'black' && ray[2] === 'black' && ray[3] === 'black') {
      return true;
    }
    return false;
  }
}


