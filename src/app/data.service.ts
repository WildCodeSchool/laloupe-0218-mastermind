import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  selectedColor = '';
  activeGuess = 0;
  showBtn = false;
  colors = ['red', 'blue', 'green', 'yellow', 'black', 'purple'];
  guessArray = [-1, -1, -1, -1];
  youWin = false;

  constructor() { }

}
