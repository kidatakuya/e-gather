// import './ArtistSelectionForm.scss';
import React,{useEffect} from "react";
import { Component } from "react";
import { BrowserRouter as Router,Switch,Route,　Link } from "react-router-dom";





function ArtistWarp () {
    const artistlists = [
        {
            category:'ロックバンド',
            name:'THE ORAL CIGARETTES',
            image:'http://idolrenaissance.com/images/home/member/marin.jpg',
            artistId:"r-1"
        },
        {
            category:'ロックバンド',
            name:'THE ORAL CIGARETTES',
            image:'http://idolrenaissance.com/images/home/member/marin.jpg',
            artistId:"r-2"
        },
        {
            category:'ロックバンド',
            name:'THE ORAL CIGARETTES',
            image:'http://idolrenaissance.com/images/home/member/marin.jpg',
            artistId:"r-3"
        },
        {
            category:'ロックバンド',
            name:'THE ORAL CIGARETTES',
            image:'http://idolrenaissance.com/images/home/member/marin.jpg',
            artistId:"r-4"
        },
        {
            category:'ロックバンド',
            name:'THE ORAL CIGARETTES',
            image:'http://idolrenaissance.com/images/home/member/marin.jpg',
            artistId:"5"
        },
        {
            category:'ロックバンド',
            name:'THE ORAL CIGARETTES',
            image:'http://idolrenaissance.com/images/home/member/marin.jpg',
            artistId:"r-6"
        },
    
    ];
    let artistWarp = document.getElementsByClassName("artistWarp").length;
    let artistSelectionWarp = document.getElementById("artistSelectionWarp")
    let aswWidth = 560 * artistWarp;
    
    const style ={
        width: aswWidth + "px"
    };
    
    const items = artistlists.map((artistlist) =>
        <label for={artistlist.artistId} className="itemWarp">
            <div className="itemWarp__img"></div>
            <label className="itemWarp__artistName">{artistlist.name}</label>
            <input type="checkbox" id={artistlist.artistId} value={artistlist.artistId} />
        </label>
    );
    useEffect(() => {
        let artistWarp = document.getElementsByClassName("artistWarp").length;
        let artistSelectionWarp = document.getElementById("artistSelectionWarp")
        let aswWidth = 560 * artistWarp;
            artistSelectionWarp.style.width=aswWidth + "px"
        
    }, [])

    return (
        <div className="artistWarp__list">
            {items}
        </div>
    )
    
};



export default ArtistWarp;