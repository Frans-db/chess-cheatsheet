import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import * as ChessBoard from 'chessboardjs/www/js/chessboard';
import { CardData } from 'src/app/models/chess-data';
import * as uuid from 'uuid';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewInit{

  @Input() card!: CardData;

  board!: any;
  id!: string;
  currentMove: number = 0;

  chevronLeft = faChevronLeft
  chevronRight = faChevronRight;
  constructor() { 
    this.id = uuid.v4();
  }

  ngAfterViewInit(): void {
    this.board = ChessBoard('board-' + this.id, this.card.fen, {
    draggable: true,
    dropOffBoard: 'trash',
    sparePieces: true
    });
  }

  onClick(direction: string): void {
    if (direction == 'left') {
      this.currentMove = Math.max(0, this.currentMove - 1);
      this.undoMove(this.currentMove);
    }
    if (direction == 'right') {
      this.currentMove = Math.min(this.card.moves.length, this.currentMove + 1);
      this.doMove(this.currentMove - 1);
    }
    console.log(this.currentMove + " " + this.card.moves.length);
  }

  doMove(moveIndex: number): void {
    const move: string = this.card.moves[moveIndex];
    console.log(move);
    this.board.move(move);
  }

  undoMove(moveIndex: number): void {
    const move: string = this.card.moves[moveIndex];
    const sections: string[] = move.split('-');
    const reversed: string = sections[1] + '-' + sections[0];
    console.log(reversed);
    this.board.move(reversed);
  }

  isDisabled(direction: string): boolean | null {
    if (direction == 'left' && this.currentMove == 0) {
      return true;
    }
    if (direction == 'right' && this.currentMove == this.card.moves.length ) {
      return true;
    }
    return null;
  }

}
