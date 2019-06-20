import React, { Component } from 'react';
import  ActiveQuiz from '../../ActiveQuiz/ActiveQuiz.jsx';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz: []
        }
    }
    render () {
        return (
            <div className="Quiz">
                <div className="QuizWrapper">
                    <h1>Quiz</h1>
                    <ActiveQuiz/>
                </div>
            </div>
        )
    }
}

export default Quiz