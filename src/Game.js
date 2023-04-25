import React, { useEffect, useState } from "react";
import axios from "axios";
import Deck from "./Deck";

const BASE_URL = "https://deckofcardsapi.com/api/deck/";

// const GET_DECK_URL = `${BASE_URL}new/shuffle/?deck_count=1`
// const DRAW_CARD_URL = "https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1"

function Game() {
  const [deck, setDeck] = useState({
    deck_id: null,
    isLoading: true
  });

  useEffect(function fetchDeckWhenMounted() {
    async function fetchDeck() {
      const response = await axios.get(`${BASE_URL}new/shuffle/?deck_count=1`);
      setDeck({
        deck_id: response.data.deck_id,
        isLoading: false
      });
      console.log("response", response);
      // console.log("deck", deck);
    }
    fetchDeck();
  }, []);
  console.log(deck);

  return (
    <div>
      {!deck.isLoading && <Deck deck_id={deck.deck_id} />}
    </div>
  );
}

export default Game;
export { BASE_URL };
