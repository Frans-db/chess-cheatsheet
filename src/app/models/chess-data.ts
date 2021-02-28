export class CardData {
    title!: string;
    fen!: string;
    moves!: string[];
    description!: string;
}

export class ChessData {
    title!: string;
    cards!: CardData[];
}