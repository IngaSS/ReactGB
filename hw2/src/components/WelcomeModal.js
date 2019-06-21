import React from "react";

class WelcomeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modal: false };

        this.close = this.close.bind(this);
    }

    close() {
        this.setState({
            modal: false
        })
    }

    componentDidMount() {
        this.setState({
            modal: true
        })
    }

    render() {
        return (
            <div>
                {(this.state.modal) && <div className="modalWrap"><div className="modal"><div className="modelContent"><h2>Hello!</h2><p>Welcome to the Posts Page</p><button onClick={this.close}>Закрыть</button></div></div></div>}
            </div>
        )
    }
}

export default WelcomeModal;
