import React, { Component } from 'react'
import axiosInstance from '../services/axiosApi'

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {username: "", password: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitWThen = this.handleSubmitWThen.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault();

        try {
            const response = axiosInstance.post('/token/obtain/', {
                username: this.state.username,
                password: this.state.password
            });

            axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;

            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);

            return response;
        } catch (error) {
            throw error;
        }
    }

    handleSubmitWThen(event) {
        event.preventDefault();

        axiosInstance.post('/token/obtain/', {
                username: this.state.username,
                password: this.state.password
            }).then(
                result => {
                    axiosInstance.defaults.headers['Authorization'] = "JWT " + result.data.access;

                    localStorage.setItem('access_token', result.data.access);
                    localStorage.setItem('refresh_token', result.data.refresh);
                }
        ).catch (error => {
            throw error;
        })
    }

    render () {
        return (
            <div>
                <h2>Login page</h2>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                    </label>

                    <label>
                        Password:
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
