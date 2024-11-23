import React, { useState, useEffect } from "react";
import { getRandomQoute, saveFavoriteQuote } from "./services/api";
import Quote from "./components/quote";
import Favorites from "./components/favorite";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Fetch a new quote
  const getNewQuote = async () => {
    const randomQuote = await getRandomQoute();
    setQuote(randomQuote);
  };
    // Save the current quote to favorites
    const handleSaveQuote = async () => {
      if (!quote) return;
      try{
        const savedData = await saveFavoriteQuote({
          quote: quote.content,
          author: quote.author,
        });

      if (savedData && Array.isArray(savedData.favoriteQuotes)){
        setFavorites(savedData.favoriteQuotes);
      }
    }catch(error){
        console.error("failed to save the quote:", error);
      ;
      
    }
    };
  
    // Fetch the first quote on component load
    useEffect(() => {
      getNewQuote();
    }, []);

    return (
      <div className="app">
        <h1 className="title">Random Quotes</h1>
        <Quote quote={quote} onNewQuote={getNewQuote} onSave={handleSaveQuote} />
        <Favorites favorites={favorites} />
      </div>
    );
  };
export default App;
