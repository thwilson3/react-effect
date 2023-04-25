import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <h1>hello</h1>
  )
}

export default Game;
