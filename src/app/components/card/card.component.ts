import { Component, OnInit } from '@angular/core';
import * as ChessBoard from 'chessboardjs/www/js/chessboard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  board!: any;

  constructor() { }

  ngOnInit(): void {
    let board1 = ChessBoard('board', 'start');
  }

}
