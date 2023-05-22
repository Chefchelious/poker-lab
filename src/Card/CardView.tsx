import React from 'react';
import './../cards.css'
interface ICardProps {
    rank: string;
    suit: string
}
const CardView: React.FC<ICardProps> = props => {

    const cardClasses: string = `card rank-${props.rank.toLowerCase()} ${props.suit}`;

    let spanSuit: string = '';

    if (props.suit === 'diams') {
        spanSuit= '♦';
    } else if (props.suit === 'spades') {
        spanSuit = '♠';
    } else if (props.suit === 'hearts') {
        spanSuit = '♥';
    } else if (props.suit === 'clubs') {
        spanSuit = '♣';
    }

    return (
        <span className={cardClasses}>
                    <span className="rank">{props.rank}</span>
                    <span className="suit">{spanSuit}</span>
                </span>
    );
};

export default CardView;