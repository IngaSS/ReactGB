import React from "react";
import Post from "./Post";

class Blog extends React.Component {
    render() {
        const postItem = this.props.postItems.map(item => {
            return <li className="nav-links" key={item.title.toString()}><span className="title">{item.title}</span><p className="text">{item.postBody}</p></li>
        })

        return (
            <ul>
                <Post postItem={postItem} />
            </ul>
        )
    }
}

export default Blog;
