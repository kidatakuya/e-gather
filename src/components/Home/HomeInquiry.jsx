import './HomeInquiry.scss';


function HomeInquiry() {
    return(
        <section className="HomeInquiry">
            <div className="close"></div>
            <h2 className="title">お問い合わせ</h2>
            <form action="">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button className="sendBtn">送信</button>
            </form>
        </section>
    )
}

export default HomeInquiry;