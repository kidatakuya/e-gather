
import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';
import HomeMenuWarp from './HomeMenuWarp';
import HomeInquiry from './HomeInquiry';
import React,{useEffect} from "react";



function Home() {

    return (
        <div>
            <HomeHeader menuFlag={true}/>
            <HomeMain />
            <HomeMenuWarp menuFlag={false} inquiryFlag={true}/>
            <HomeInquiry inquiryFlag={false} />
        </div>
    );
}

export default Home;
