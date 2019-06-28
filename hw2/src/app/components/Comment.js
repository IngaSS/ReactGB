import React, { Component } from 'react'
import { Link } from 'react-router';

export default class Comment extends Component {
  render() {
    const styles = {
      color: 'blue',
      textDecoration: 'underline'
    }
    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
        <Link to={`/comments/${this.props.id}`}>
          {this.props.id}
        </Link>
        </div>
        <div className="card-body text-secondary">
          <h3>{this.props.name}</h3>
          <p style={styles}>{this.props.email}</p>
          <p>{this.props.body}</p>
        </div>
      </div>
    )
  }
}

