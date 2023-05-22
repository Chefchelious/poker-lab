import React, {useRef, useState} from 'react';
import CardView from "./Card/CardView";
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";

import './App.css';

const App = () => {
    const [cards, setCards] = useState<Card[]>([]);
    // const cardDeck = new CardDeck();
    // const [cardDeck] = useState(() => new CardDeck());

    const cardDeck = useRef(new CardDeck());
    const deck: CardDeck = cardDeck.current;
    const getCards = () => {

        const newCards: Card[] = deck.getCards(5);

        console.log(deck.deck);

        setCards(newCards);
    };

    if (!cards.length) {
        return (
            <div className="App">
                <button className="getCard-btn" onClick={getCards}>Get Cards</button>
            </div>
        );
    }

    let btnText: string = deck.deck.length < 5 ? 'Deck is empty' : 'Get Cards';


    return (
        <div className="App">

            <div className="playingCards faceImages">
                <CardView rank={cards[0].rank} suit={cards[0].suit} />
                <CardView rank={cards[1].rank} suit={cards[1].suit} />
                <CardView rank={cards[2].rank} suit={cards[2].suit} />
                <CardView rank={cards[3].rank} suit={cards[3].suit} />
                <CardView rank={cards[4].rank} suit={cards[4].suit} />
            </div>

            <div className="App">
                <button className="getCard-btn" onClick={getCards} disabled={deck.deck.length < 5}>{btnText}</button>
            </div>

        </div>
    );
};

export default App;

