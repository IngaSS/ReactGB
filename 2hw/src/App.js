import React from "react";
import ReactDOM from "react-dom";
import Developer from "./components/Developer";

class App extends React.Component {
    render() {
        return (<div>
            <Developer />
        </div>)
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
