import './HomeHeader.scss';
// import React,{useEffect} from "react";
import menuClick from './HomeAnimation';


function HomeHeader(props) {
    
    const age = props.age;
    
    return (
        <header className="HomeHeader">
            <div className="logo"></div>
            <div className="menu" id="menu-js" onClick={() => {
                menuClick(age);
            }}></div>
        </header>
    )
}

export default HomeHeader;