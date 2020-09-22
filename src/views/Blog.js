import React, { Component } from 'react'

export default class Blog extends Component {
    render() {
        return (
            <div class="row">
                <div class="col-md-12">
                    <ul class="list-group">
                        {/* {% if current_user.is_authenticated %} */}
                        {/* {% for p in posts %} */}
                        <li class="list-group-item">
                            <p>
                                <h5>
                                    {/* <a href="{{ url_for('blog.get_post', id=p.id) }}">{{ p.body }}</a> */}
                                </h5>
                            </p>
                            <cite>
                                {/* &mdash; {{ "{} {}".format(p.user.first_name, p.user.last_name) }} @ {{ moment(p.created_on).fromNow() }} */}
                            </cite>
                        </li>
                        {/* // {% endfor %} */}
                        {/* // {% else %} */}
                        <h3>No posts to show</h3>
                        {/* // {% endif %} */}
                    </ul>
                </div>
            </div>
        )
    }
}
