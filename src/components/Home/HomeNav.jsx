import './HomeNav.scss';
import ChannelWarp from './ChannelWarp';



function HomeNav() {
    return(
        <nav className="homeNav">
            <h2 className="channelTitle">アーティストチャンネル</h2>
            <div className="channelAdd">チャンネル追加</div>
            <ChannelWarp/>
            <div className="profileWarp">
                <p className="name">石丸ひろき</p>
                <p className="address">Gather.0000@gmail.com</p>
            </div>
        </nav>
    )
}

export default HomeNav;