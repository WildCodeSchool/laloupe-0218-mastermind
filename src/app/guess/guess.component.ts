import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { routes, router } from '../app.routes';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})


export class GuessComponent implements OnInit {

  @Input() guess;
  coloredPegCounter = 0;

  pegs = [0, 1, 2, 3];

  constructor(private dataservice: DataService) { }

  ngOnInit() {
  }

  colorMe(guess, peg) {
    if (guess === this.dataservice.activeGuess) {
      const currentColor = document.getElementById(`peg-${guess}-${peg}`).style.backgroundColor;

      if (this.dataservice.selectedColor !== ''
        && currentColor === '') {
      document.getElementById(`peg-${guess}-${peg}`).style.backgroundColor = this.dataservice.selectedColor;
      this.coloredPegCounter++;
     this.dataservice.guessArray[peg] = this.dataservice.colors.indexOf(this.dataservice.selectedColor);

      if (this.coloredPegCounter === 4) { /* Requirements to display the submit button*/
      this.dataservice.showBtn = true;
      } else if (this.dataservice.selectedColor !== ''
          && currentColor !== ''
          && currentColor !== this.dataservice.selectedColor) {
            document.getElementById(`peg-${guess}-${peg}`).style.backgroundColor = this.dataservice.selectedColor;
        }

    } else {
        document.getElementById(`peg-${guess}-${peg}`).style.backgroundColor = '';
        this.coloredPegCounter--;
        this.dataservice.showBtn = false;
      }
    }
  }
}

