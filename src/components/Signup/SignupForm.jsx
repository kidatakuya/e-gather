import './SignupForm.scss';
import { HashRouter as Router,Switch,Route,　Link } from "react-router-dom";

function SignupForm() {
    return (
        <section className="signupForm">
            <h1>新規登録</h1>
             <form>
             <div className="formItemWarp">
                    <label type="email">ユーザーネーム</label>
                    <input type="text" placeholder="バンドリー" />
                </div>
                <div className="formItemWarp">
                    <label type="email">メールアドレス</label>
                    <input type="email" placeholder="Gather.0000@gmail.com" />
                </div>
                <div className="formItemWarp">
                    <label>パスワード</label>
                    <input type="password" placeholder="8文字以上は半角英数" />
                </div>
                <div className="formItemWarp">
                    <label>パスワード確認</label>
                    <input type="password" placeholder="8文字以上は半角英数" />
                </div>
                <Link className="sendBtn signupBtn" to="/ArtistSelection">新規登録</Link>
                {/* <button className="sendBtn signupBtn">新規登録</button> */}
            </form>
        </section>
    
    )
}

export default SignupForm;