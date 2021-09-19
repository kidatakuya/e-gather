import './HomeMain.scss';
import HomeNav from './HomeNav';
import HomeChatArea from './HomeChatArea';

function HomeMain() {
    return(
        <main className="HomeMain">
            <HomeNav />
            <HomeChatArea />
        </main>
    )
}

export default HomeMain;