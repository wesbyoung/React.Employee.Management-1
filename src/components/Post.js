import moment from 'moment';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Post extends Component {
    render() {
        let post = this.props.post;
        // console.log(post)

        return (
            <li className="list-group-item">
                <p>
                    <h5>
                        {/* <a href="{{ url_for('blog.get_post', id=p.id) }}">{{ p.body }}</a> */}
                        <Link to={`/blog/${post.id}`}>{post.body}</Link>
                    </h5>
                </p>
                <cite>
                    {/* &mdash; {{ "{} {}".format(p.user.first_name, p.user.last_name) }} @ {{ moment(p.created_on).fromNow() }} */}
                    &mdash; {post.user.first_name} {post.user.last_name} @ {moment(post.created_on).fromNow()}
                </cite>
            </li>
        )
    }
}
