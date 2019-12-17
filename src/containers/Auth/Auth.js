import React, { Component } from 'react'
import classes from './Auth.css'
import Input from "../../components/Input/Input";

export default class Auth extends Component{
    loginHandler = () => {

    };

    submitHandler = event => {
        event.preventDefault();
    };


    render(){
        return (
            <div className = "Auth">
                <div>
                    <h1>Register a new user</h1>
                    <form>
                        <Input
                            placeholder='First Name*'
                            errorMessage={'Test'}
                        />
                        <Input
                            placeholder='Last Name*'
                        />
                        <Input
                            placeholder='Login*'
                        />
                        <Input
                            placeholder='Email*'
                        />
                        <Input
                            placeholder='Company Name'
                        />
                        <Input
                            placeholder='Password*'
                        />
                        <Input
                            placeholder='Confirm Password*'
                        />

                    <button
                        onClick={this.loginHandler}
                    >
                        Next step
                    </button>
                    </form>
                </div>
            </div>
        )
    }
}