// import './ArtistSelectionForm.scss';
import React from "react";
import { BrowserRouter as Router,Switch,Route,　Link } from "react-router-dom";
import ArtistWarp from "./ArtistWarp";


function ArtistCategoryWarp (props) {
    const categories= [
        "ロックバンド",
        "jpop",
        "HIPHOP"
    ];
    
    const categoryItems = categories.map((category) =>
        <div className="artistWarp" key={category}>
            <h2 className="artistWarp__category">{category}</h2>
            <div className="artistWarp__list">
                <ArtistWarp />
            </div>
        </div>
    );


    return (
        <div className="artistSelectionWarp" id="artistSelectionWarp">
            {categoryItems}
        </div>
    )
    
};

export default ArtistCategoryWarp;