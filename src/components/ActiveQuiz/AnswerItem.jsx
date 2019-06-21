import React, {Component} from 'react';
import FinishedQuiz from '../FinishedQuiz/FinishedQuiz.jsx';

class AnswerItem extends Component {
    constructor (props) {
        super(props)
        this.state = {
            className: "AnswerItem"
        }
    }
    
    checkState = (id, event) => {
        this.props.onAnswerClick(id);
        if (event.target.id == this.props.answerId) {
            this.props.result();
            this.setState({
                className: "AnswerItem success"
            })
            setTimeout(() => {
                this.setState({
                    className: "AnswerItem"
                })
            }, 1000)
        } 
        if (event.target.id != this.props.answerId) {
            this.props.unResult();
            this.setState({
                className: "AnswerItem error",
            })
            setTimeout(() => {
                this.setState({
                    className: "AnswerItem"
                })
            }, 2000)
        }
    }
    render() {
        return (
            <li className={this.state.className} id={this.props.id}
                onClick={() => this.checkState(this.props.answer.id, event)}>
                    {this.props.answer.text}
            </li>
        );
    }
};


export default AnswerItem;