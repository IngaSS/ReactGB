import React from "react";
import ReactDOM from "react-dom";
import Blog from "./components/Blog";
import WelcomeModal from "./components/WelcomeModal";

class App extends React.Component {
    
    render() {
        const postItems = [
            { title: "Бедолага и работа с XML-файлами", postBody: 'В данный момент пишу курсовую, где необходимо реализовать работу СУБД и хранение в XML-файлах. 1-ая таблица клиенты, 2-ая таблица машины, а 3 -я имеет связь "один к многим" и хранит индексы первых двух.  В одной машине может быть только один клиент, а у клиента может быть несколько машин. И если с удалением клиента проблем нет и его индекс в автомобиле можно просто заменить на 0, то с удаление машин возникают проблемы, так как количество строк в 3ей таблице должно быть столько же, сколько и автомобилей. Очень долго гуглила данную проблему, но ничего путного так и не нашла.' },
            { title: " Проблемы с Bind", postBody: 'Я использовал метод whoIsThis внутри render’a с помощью this.whoIsThis, потому что именно в таком случае this обращается к элементу DOM (то есть к самому компоненту).' }
        ]
        return (<div>
            <WelcomeModal />
            <Blog postItems={postItems} />
        </div>)
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
