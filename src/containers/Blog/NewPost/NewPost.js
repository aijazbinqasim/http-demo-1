import React, { Component } from 'react';
import axios from 'axios';
import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        body: '',
        author: 'Aijaz Ali'
    }
    
    postDataHandler = () => {
        axios.post("/posts", {
            title: this.state.title,
            body: this.state.body,
            author: this.state.author
        })
            .then(response => {
                console.log(response);
            });
    }

    render() {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Body</label>
                <textarea rows="4" value={this.state.body} onChange={(event) => this.setState({ body: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Aijaz Ali">Aijaz Ali</option>
                    <option value="Musavir">Musavir</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;