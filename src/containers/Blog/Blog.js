import React, { Component } from 'react';

import {
    Route,
    Link
} from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    render() {
        return (
            <div className="blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: "/new-post"
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>

                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />


                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                {/* <Posts /> */}
            </div>
        );
    }
}

export default Blog;