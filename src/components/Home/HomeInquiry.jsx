import './HomeInquiry.scss';
import inquiryClick from './InquiryAnimation';

function HomeInquiry(props) {
    let inquiryFlag = props.inquiryFlag;
    return(
        <section className="HomeInquiry" id="HomeInquiry-js">
            <div className="close" onClick={()=>{
                inquiryClick(inquiryFlag);
            }}></div>
            <h2 className="title">お問い合わせ</h2>
            <form action="">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button className="sendBtn">送信</button>
            </form>
        </section>
    )
}

export default HomeInquiry;