import React, { Component } from 'react'

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
                <h1>Quiz</h1>
            </div>
        )
    }
}

export default Quiz