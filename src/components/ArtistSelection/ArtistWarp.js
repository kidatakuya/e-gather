// import './ArtistSelectionForm.scss';
import React from "react";
import { BrowserRouter as Router,Switch,Route,　Link } from "react-router-dom";


const list = [
    {
        ategory:'ロックバンド',
        name:'THE ORAL CIGARETTES',
        image:'http://idolrenaissance.com/images/home/member/marin.jpg'
    },
    {
        ategory:'ロックバンド',
        name:'THE ORAL CIGARETTES',
        image:'http://idolrenaissance.com/images/home/member/marin.jpg'
    },
    {
        ategory:'ロックバンド',
        name:'THE ORAL CIGARETTES',
        image:'http://idolrenaissance.com/images/home/member/marin.jpg'
    },
    {
        ategory:'ロックバンド',
        name:'THE ORAL CIGARETTES',
        image:'http://idolrenaissance.com/images/home/member/marin.jpg'
    },
    {
        ategory:'ロックバンド',
        name:'THE ORAL CIGARETTES',
        image:'http://idolrenaissance.com/images/home/member/marin.jpg'
    },
    {
        ategory:'ロックバンド',
        name:'THE ORAL CIGARETTES',
        image:'http://idolrenaissance.com/images/home/member/marin.jpg'
    },

];


function ArtistWarp () {
    
    return (
        <div className="artistWarp">
            <h2 className="artistWarp__category">ロックバンド</h2>
            <div className="artistWarp__list">

                <label for="test01" className="itemWarp">
                    <div className="itemWarp__img"></div>
                    <label className="itemWarp__artistName">THE ORAL CIGARETTES</label>
                    <input type="checkbox" id="test01" />
                </label>

                <label for="test02" className="itemWarp">
                    <div className="itemWarp__img"></div>
                    <label className="itemWarp__artistName">THE ORAL CIGARETTES</label>
                    <input type="checkbox" id="test02" />
                </label>
                <label for="test02" className="itemWarp">
                    <div className="itemWarp__img"></div>
                    <label className="itemWarp__artistName">THE ORAL CIGARETTES</label>
                    <input type="checkbox" id="test02" />
                </label>
            </div>
        </div>
    )
};

export default ArtistWarp;