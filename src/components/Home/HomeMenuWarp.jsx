// import logo from './../../logo.svg';
import './HomeMenuWarp.scss';
import menuClick from './HomeAnimation';
import inquiryClick from './InquiryAnimation';


function HomeMenuWarp(props) {
    let menuFlag = props.menuFlag;
    let inquiryFlag = props.inquiryFlag;

    return (
        <div className="MenuWarp" id="MenuWarp-js">
            <div className="close" onClick={() => {
                menuClick(menuFlag);
            }}>

            </div>
            <ul className="itemWarp">
                <li className="item" onClick={()=>{
                    inquiryClick(inquiryFlag);
                }}>お問い合わせ</li>
                <li className="item logout">ログアウト</li>
            </ul>
        </div>
    );
}

export default HomeMenuWarp;
