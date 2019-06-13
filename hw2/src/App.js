import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login";
import Menu from "./components/Menu";

class App extends React.Component {
    render() {
        const menu = [
            { link: "/", title: "Главная" },
            { link: "/aboutUs", title: "О нас" },
            { link: "/contacts", title: "Контакты" },
            { link: "/service", title: "Услуги" }
        ]
        return (<div>
            <Menu items={menu} />
            <Login />
        </div>)
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
