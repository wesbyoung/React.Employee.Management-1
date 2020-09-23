import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default class BlogPost extends Component {
    constructor() {
        super();

        this.state = {
            post: {},
            user: {
                firstName: '',
                lastName: ''
            }
        }
    }

    componentDidMount() {
        // console.log(this.props);

        fetch(`http://localhost:5000/api/blog/${this.props.match.params.postId}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    post: data,
                    user: { 
                        firstName: data.user.first_name,
                        lastName: data.user.last_name
                    }
                })
            })
    }

    render() {
        let post = this.state.post;

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
                    &mdash; {this.state.user.firstName} {this.state.user.lastName} @ {moment(post.created_on).fromNow()}
                </cite>
            </li>
        )
    }
}
