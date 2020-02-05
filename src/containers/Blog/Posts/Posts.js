import React, { Component } from "react";
import axios from '../../../axios';

import Post from '../../../components/Post/Post';
import './Posts.css'

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Minh'
                    }
                })
                this.setState({
                    posts: updatedPosts
                });
            })
            .catch(error => {
                console.log(error);
            });

            console.log(this.props);
    }

    postClickedHandler = (id => {
        this.setState({ selectedPostId: id })
    })

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postClickedHandler(post.id)}
                    key={post.id} />
            });
        }
        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;