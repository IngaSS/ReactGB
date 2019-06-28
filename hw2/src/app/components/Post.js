import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
            {this.props.id}
        </div>
        <div className="card-body text-secondary">
          <h3>{this.props.title}</h3>
          <p>{this.props.body}</p>
        </div>
      </div>
    )
  }
}
