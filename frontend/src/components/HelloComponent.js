import React, { Component } from "react";
import axiosInstance from '../services/axiosApi'

class HelloComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message:"",
        };

        this.getMessage = this.getMessage.bind(this)
    }

    async getMessage() {
        try {
            let response = axiosInstance.get('/hello/');

            const message = response.data.hello;

            this.setState({
                message: message,
            });

            return message;
        }catch(error){
            console.log("Error: ", JSON.stringify(error, null, 4));

            // throw error;
        }
    }

    componentDidMount() {
        // It's not the most straightforward thing to run an async method in componentDidMount

        const refreshToken = localStorage.getItem('refresh_token');
        const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

        this.setState({
            username:tokenParts.username
        })

        // Version 1 - no async: Console.log will output something undefined.
        this.getMessage();
    }

    render() {
        return (
            <div>
                <p>{this.state.message}, {this.state.username}</p>
            </div>
        )
    }
}

export default HelloComponent;
