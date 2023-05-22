import Card from "./Card";

type Ranks = {
    [key: string]: number
}

class PokerHand {
    constructor(public array: Card[]) {}

    getOutcome(): string {
        let pokerHandStatus:string = '';
        const countRanks: Ranks = {};

        let diamsCount: number = 0,
        heartsCount: number = 0,
        clubsCount: number = 0,
        spadesCount: number = 0;


        this.array.forEach((card: Card) => {
            const currentRank: string = card.rank;
            const currentSuit: string = card.suit;

            if (countRanks.hasOwnProperty(currentRank)) {
                countRanks[currentRank] ++;
            } else {
                countRanks[currentRank] = 1;
            }

            if(currentSuit === 'diams') diamsCount++;

            if(currentSuit === 'hearts') heartsCount++;

            if(currentSuit === 'clubs')  clubsCount++;

            if(currentSuit === 'spades') spadesCount++;

        });

        if(diamsCount === 5 || heartsCount === 5 || clubsCount === 5 || spadesCount === 5) pokerHandStatus = 'Это флэш, флэээээээээээээш поцаны';

        let pairCount: number = 0;

        for (const key in countRanks) {
            const value: number = countRanks[key];

            if(value === 2) pairCount++;

            if(value === 3) pokerHandStatus = 'Тройка';
        }

        if(pairCount === 1) pokerHandStatus = 'Одна пара';

        if (pairCount === 2) pokerHandStatus = 'Две пары';

        return pokerHandStatus;
    }
}
export default PokerHand;