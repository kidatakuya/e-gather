import './HomeChatArea.scss';
import PostItems from './PostItems';
// import HomeNav from './HomeNav';


function HomeChatArea() {
    return(
        <div className="homeChatArea">
            <h2 className="channelTitle">THE ORAL CIGARETTES</h2>
                <PostItems/>
            <form className="formWarp">
                <textarea className="area"></textarea>
                <div className="chatSendBtnWarp">
                    <button className="chatSendBtn">送信</button>
                </div>
            </form>
        </div>
    )
}

export default HomeChatArea;