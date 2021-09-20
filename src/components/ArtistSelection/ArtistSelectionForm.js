import './ArtistSelectionForm.scss';
import React from "react";
import { BrowserRouter as Router,Switch,Route,　Link } from "react-router-dom";
import Signup from '../Signup/Signup';
import ArtistWarp from './ArtistWarp' ;
import ArtistCategoryWarp from './ArtistCategoryWarp'


function ArtistSelectionForm() {

    

    return (
        <section className="artistSelectionForm">
            <h1>アーティストを選択</h1>
            <form>
                <ArtistCategoryWarp />
                <Link className="sendBtn startBtn" to="/Home">E-Gatherを始める</Link>
                {/* <button className="sendBtn loginBtn">E-Gatherを始める</button> */}  
            </form>
        </section>
    
    )
}



export default ArtistSelectionForm;