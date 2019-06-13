import React from "react";

class Login extends React.Component {
    render() {
        return (
            <div className="form-card">
                <form className="login-form">
                    <label>Введите e-mail</label>
                    <input type="email" />
                    <label>Введите пароль</label>
                    <input type="password" />
                    <button className="btn">Отправить</button>
                </form>
            </div>
        )
    }
}

export default Login;
