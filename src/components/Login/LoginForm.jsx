import './LoginForm.scss';
import { HashRouter as Router,Switch,Route,　Link } from "react-router-dom";
import Signup from '../Signup/Signup';


function LoginForm() {
    return (
        <section className="loginForm">
            <h1>ログイン</h1>
             <form>
                <div className="formItemWarp">
                    <label type="email">メールアドレス</label>
                    <input type="email" placeholder="Gather.0000@gmail.com" />
                </div>
                <div className="formItemWarp">
                    <label>パスワード</label>
                    <input type="password" placeholder="8文字以上は半角英数" />
                </div>
                <Link className="sendBtn loginBtn" to="/Home">ログイン</Link>
                <div className="line"></div>
                <Link className="sendBtn signupBtn" to="/Signup">新規登録</Link>
            </form>
            <div className="passLost">
                <a href="">パスワード忘れた場合</a>
            </div>
        </section>
    
    )
}

export default LoginForm;