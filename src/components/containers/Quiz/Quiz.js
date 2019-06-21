import React, { Component } from 'react';
import  ActiveQuiz from '../../ActiveQuiz/ActiveQuiz.jsx';
import FinishedQuiz from '../../FinishedQuiz/FinishedQuiz.jsx';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0,
            tryToHide: '',
            finishClass: 'hide',
            activeQuestion: 0,
            answerState: null, 
            quiz: [
                {
                    question: 'Какого цвета небо?',
                    rightAnswerId: 2,
                    id: 1,
                    answers: [
                        {text: "Черный", id: "1"},
                        {text: "Синий", id: "2"},
                        {text: "Красный", id: "3"},
                        {text: "Зелёный", id: "4"}
                    ]
                },
                {
                    question: 'В каком году основали Санкт-Петербург?',
                    rightAnswerId: 3,
                    id: 2,
                    answers: [
                        {text: "1700", id: "1"},
                        {text: "1706", id: "2"},
                        {text: "1703", id: "3"},
                        {text: "1702", id: "4"}
                    ]
                }
            ]
        }
    }
    onAnswerClickHandler = answerId => {
        const question = this.state.quiz[this.state.activeQuestion];
        if (question.rightAnswerId == answerId) {
            this.setState({
                answerState: 'success',
            })
            const timeout = setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        tryToHide: 'hide',
                        finishClass: null
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1
                    })
                }
                clearTimeout(timeout);
            }, 1000);
        } else {
            this.setState({
                answerState: 'error'
            })
        }
    }
    changeResult = () => {
        this.setState({
            result: this.state.result + 1
        })
    }
    uncoverResult = () => {
        this.setState({
            result: this.state.result - 1
        })
    }
    isQuizFinished() {
        return (this.state.activeQuestion + 1) === this.state.quiz.length
    }
    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            tryToHide: '',
            finishClass: 'hide',
            result: 0
        })
    }
    render () {
        return (
            <div className="Quiz">
                <div className="QuizWrapper">
                    <div className={this.state.tryToHide}>
                        <h1>Ответьте на все вопросы</h1>
                            <ActiveQuiz
                                unResult={this.uncoverResult}
                                result={this.changeResult}
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLenght={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                answerState={this.state.answerState}
                                answerId={this.state.quiz[this.state.activeQuestion].rightAnswerId}
                            />
                    </div>
                </div>
                <div className={this.state.finishClass}>
                    <FinishedQuiz result={this.state.result} onRetry={this.retryHandler}/>
                </div>
            </div>
        )
    }
}

export default Quiz