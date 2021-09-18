import './LoginForm.scss';

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
                <button className="sendBtn loginBtn">ログイン</button>
                <div className="line"></div>
                <button className="sendBtn signupBtn">新規登録</button>
            </form>
            <div className="passLost">
                <a href="">パスワード忘れた場合</a>
            </div>
        </section>
    
    )
}

export default LoginForm;