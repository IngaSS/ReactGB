import React from "react";

class Menu extends React.Component {
    render() {
        const MenuItems = this.props.items.map(item => {
            return <li className="nav-links" key={item.title.toString()}><a href={item.link}>{item.title}</a></li>
        })
        return (
            <ul className="nav-bar">
                {MenuItems}
            </ul>
        )
    }
}

export default Menu;
