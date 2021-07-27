import React from 'react';
import PostListViewItem from '../components/posts-list-view-item';

class Posts extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(result => this.setState({ posts: result }))
      .catch(err => console.err(err));
  }

  render() {
    return (
      <h1>
        All Posts
        {this.state.posts.map(item => (
          <PostListViewItem
            key={item.id}
            title={item.title}
            postSubheading={item.body}
          />
        ))}
      </h1>
    );
  }
}

export default Posts;
