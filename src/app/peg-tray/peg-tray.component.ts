import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { routes, router } from '../app.routes';

@Component({
  selector: 'app-peg-tray',
  templateUrl: './peg-tray.component.html',
  styleUrls: ['./peg-tray.component.css']
})
export class PegTrayComponent implements OnInit {

  selectedColor = '';

  constructor(private dataservice: DataService) { }

  ngOnInit() {
  }

  selectColor(col, i) {

    this.dataservice.selectedColor = col;

    for (let j = 0; j < 6; j++) {
      document.getElementById(`outer-peg-${j}`).style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    }

    let id = `outer-peg-${i}`;
    document.getElementById(`outer-peg-${i}`).style.backgroundColor = col;
  }
}

