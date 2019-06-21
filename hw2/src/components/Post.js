import React from "react";

class Post extends React.Component {
    render() {       
        return (
            <div>
                {this.props.postItem}
            </div>
        )
    }
}

export default Post;
