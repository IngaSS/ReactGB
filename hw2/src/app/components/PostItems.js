import React, { Component } from 'react'
import Post from './Post';

export default class PostItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  render() {
    if(!this.props.posts.length) {
      return null;
    }

    const posts = this.props.posts.map((post, index) => {
      return <Post key={index} { ...post } />
    });

    return (
      <div> 
        <h1>Посты</h1>
        { posts }
      </div>
    )
  }
}
