import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from './Game';

function Deck({ deck_id }) {
  const [cards, setCards] = useState({
    cardImgs: [],
    cardsRemaining: 52,
    isLoading: true
  });
  const [clicked, setClicked] = useState(false)

  useEffect(function fetchCardOnChange() {
    async function fetchCard() {
      const response = await axios.get(`${BASE_URL}${deck_id}/draw/?count=1`);
      const currCardImgs = cards.cardImgs;
      currCardImgs.push(response.data.cards[0].image);
      setCards({
        cardImgs: currCardImgs,
        cardsRemaining: response.data.remaining,
        isLoading: false
      });
      console.log("In useffect:", cards);
    }
    fetchCard();
  }, [clicked]);

  // function renderCards() {
  //   const currCards = cards.cardImgs
  //   console.log("Current cards", currCards, "Cards state", cards.cardImgs)
  //   // return currCards.map((c, idx )=> <img key={idx} src={`${c}`} alt='card'/>)
  // }

  function handleClick() {
    setClicked(c => !clicked)
  }

  return (
    <div>
      <button onClick={handleClick}>CLICK ME!</button>
      {!cards.isLoading && cards.cardImgs.map((c, idx) => (<img key={idx} src={`${c}`} />))}
    </div>
  );


}

export default Deck;