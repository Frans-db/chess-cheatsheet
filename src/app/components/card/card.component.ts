import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as ChessBoard from 'chessboardjs/www/js/chessboard';
import * as uuid from 'uuid';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewInit{

  board!: any;
  id!: string;

  constructor() { 
    this.id = uuid.v4();
  }

  ngAfterViewInit(): void {
    this.board = ChessBoard('board-' + this.id, 'start');
  }

}
