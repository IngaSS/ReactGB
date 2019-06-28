import React, { Component } from "react";
import { addPost, getPosts } from '../actions/postActions';
import store from '../stores/postStore'; 
import PostItems from "../components/PostItems";

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
    this.onPostChange = this.onPostChange.bind(this);
    this.newPost = this.newPost.bind(this);
  }

  newPost() {
    const title = 'My post';
    const userId = 152;
    const body = "My post's text";
    addPost(title, userId, body);
  }

  onPostChange() {
    this.setState({ posts: store.posts });
  }

  componentDidMount() {
    getPosts();
    store.on('change', this.onPostChange);
  }

  componentWillUnmount() {
    store.removeListener('change', this.onPostChange);
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.newPost}>Добавить пост</button>
        <PostItems posts={this.state.posts} />
      </div>
    );
  }
}
