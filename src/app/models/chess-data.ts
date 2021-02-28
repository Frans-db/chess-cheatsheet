export class CardData {
    title!: string;
    fen!: string;
    description!: string;
}

export class ChessData {
    title!: string;
    cards!: CardData[];
}