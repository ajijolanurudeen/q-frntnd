import React from "react";
import Button from "./Button"
import "./Quote.css";


const Quote = ({quote, onNewQuote, onSave})=>{
    return(
        <div className="quote-container">
            {quote ?(
                <>
                <p className="quote-author">"{quote.content}"</p>
                <p className="quote-author">- {quote.author}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
            <div className="quote-buttons">
                <Button onClick={onNewQuote}>New Quote</Button>
                <Button onClick={onSave}>Save Quote</Button>

            </div>
        </div>
    );
};

export default Quote;









