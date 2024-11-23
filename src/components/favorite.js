import React from "react";

import "./favorite.css";

const Favorites = ({favorites = []}) =>{
    return(
        <div className="favorites-container">
            <h2>Favorites</h2>
            <ul>
                {favorites.length > 0 ? (
                favorites.map((fav, index)=>(
                    <li key={index}>
                        "{fav.quote}" - {fav.author}
                    </li>
                ))
            ) : (
                    <p>No favorites yet</p>
            )}
            </ul>
        </div>
    );
};
export default Favorites;