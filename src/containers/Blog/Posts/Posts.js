import React from "react";
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get("/posts")
            .then(response => {
                const posts = response.data.slice(0, 4);
                const newPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Aijaz Ali'
                    }
                });
                this.setState({ posts: newPosts });
            })
            .catch(error => {
                console.log(error);
                //this.setState({ error: true });
            });
    }

    postSelectedHandler = id => {
        this.setState({ selectedPostId: id });
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />
            });
        }

        return (
            <section className="posts">
                {posts}
            </section>
        );
    }
}

export default Posts;