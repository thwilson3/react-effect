import { useEffect, useState } from "react";
import axios from "axios";
import {BASE_URL} from './Game'

function Deck() {
  const [cards, setCards] = useState({
    cardImgs: [],
    cardsRemaining: 52,
    isLoading: true
  })

  useEffect(function fetchCardOnChange() {
    async function fetchCard() {
      const response = axios.get(`${BASE_URL}${DECK ID}/draw/?count=1`)
    }
  })


}

export default Deck;