import React, { Component } from "react";
import PostItems from "../components/PostItems";

export default class Posts extends Component {
  render() {
    return (
      <div>
        {
          (!this.props.children) ?
          (<PostItems/>)
          :
          (this.props.children)
        }
      </div>
    );
  }
}
