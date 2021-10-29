// import logo from './../../logo.svg';
import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';
import HomeMenuWarp from './HomeMenuWarp';
import HomeInquiry from './HomeInquiry';
import React,{useEffect} from "react";



function Home() {

    return (
        <div>
            <HomeHeader age="0"/>
            <HomeMain />
            <HomeMenuWarp age="1"/>
            <HomeInquiry />

        </div>
    );
}

export default Home;
