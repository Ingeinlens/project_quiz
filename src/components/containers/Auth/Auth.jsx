import React, { Component } from 'react';
import classes from './Auth.scss';
import Button from '../../Button/Button.js';

class Auth extends Component {
    loginHandler = () => {

    }
    registerHandler = () => {

    }
    render () {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>
                    <form onSubmit={event => event.preventDefault()} action="">
                    <Button 
                        type="success" 
                        onClick={this.loginHandler} 
                    >
                        Войти
                    </Button>
                    <Button 
                        type="primary" 
                        onClick={this.registerHandler} 
                    >
                        Зарегистрироваться
                    </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth