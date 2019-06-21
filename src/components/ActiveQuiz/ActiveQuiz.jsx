import React from 'react';
import AnswersList from './AnswersList.jsx';

const ActiveQuiz = props => {
    return (
        <div className="ActiveQuiz">
            <p>
                <span className="mainQuestion">
                    <strong>{props.answerNumber}.&nbsp;</strong>
                    {props.question}
                </span>
                <small>{props.answerNumber} из {props.quizLenght}</small>
            </p>
            <AnswersList 
                unResult={props.unResult}
                result={props.result}
                quizLenght={props.quizLenght}
                answers={props.answers} 
                onAnswerClick={props.onAnswerClick}
                answerState={props.answerState}
                answerId={props.answerId}
            />
        </div>
    )
}

export default ActiveQuiz


