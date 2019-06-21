import React from 'react';
import AnswerItem from './AnswerItem.jsx'

const AnswersList = props => {
    return (
        <ul className="AnswersList">
            {
                props.answers.map((answer, index) => {
                    return (
                        <AnswerItem 
                            unResult={props.unResult}
                            result={props.result}
                            id={index + 1}
                            key={index} 
                            answer={answer} 
                            onAnswerClick={props.onAnswerClick}
                            answerState={props.answerState}
                            answerId={props.answerId}
                            quizLenght={props.quizLenght}
                        />
                    )
                })
            }
        </ul>
    )
}

export default AnswersList
