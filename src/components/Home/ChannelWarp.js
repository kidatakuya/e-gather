import React from 'react';
import ReactDOM from 'react-dom';




function ChannelWarp(props) {
    
    // const listItems = props.listItems;
    const　artistLists = [
        {
            name:"THE ORAL CIGARETTES",
            img:""
        },
        {
            name:"ONE OK ROCK",
            img:""
        },
        {
            name:"THE ORAL CIGARETTES",
            img:""
        },
    ];

    const artists = artistLists.map((artist) =>
        <li className="channelWarp__channel">
            <div className="img"></div>
            <p className="channelName">{artist.name}</p>
        </li>
    );
    return(
        <ul className="channelWarp">
            {artists}
        </ul>
    )
}
// ReactDOM.render(
//     <PostItems listItems={listItems} />,
//     document.getElementById('root')
// );

export default ChannelWarp;