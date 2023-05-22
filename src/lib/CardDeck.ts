import Card from './Card';

class CardDeck {
    private readonly ranks: string [] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    private readonly suits: string [] = ['diams', 'hearts', 'clubs', 'spades'];
    public deck: Card[] = [];
    constructor() {
        this.suits.forEach(suit => {
            this.ranks.forEach(rank => {
                const card = new Card(rank, suit);
                this.deck.push(card);
            });
        });
    }

    getCard(): Card {
        const randomIndex: number = Math.floor(Math.random() * this.deck.length);
        const card: Card = this.deck.splice(randomIndex, 1)[0];
        return card;
    }

    getCards(howMany: number): Card [] {
        const cards: Card [] = [];
        for (let i: number = 0; i < howMany; i++) {
            const card: Card = this.getCard();
            cards.push(card);
        }

        return cards;
    }
}

export default CardDeck;