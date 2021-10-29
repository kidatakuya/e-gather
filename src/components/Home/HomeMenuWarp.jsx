// import logo from './../../logo.svg';
import './HomeMenuWarp.scss';
import menuClick from './HomeAnimation';


function HomeMenuWarp(props) {
    const age = props.age;
    return (
        <div className="MenuWarp" id="MenuWarp-js">
            <div className="close" onClick={() => {
                menuClick(age);
            }}>

            </div>
            <ul className="itemWarp">
                <li className="item">お問い合わせ</li>
                <li className="item logout">ログアウト</li>
            </ul>
        </div>
    );
}

export default HomeMenuWarp;
