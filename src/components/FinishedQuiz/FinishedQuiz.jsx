import React from 'react';
import FinishContent from '../FinishContent.jsx'

const FinishedQuiz = props => {
    return(
        <div className="FinishedQuiz">
            <FinishContent result={props.result} onRetry={props.onRetry}/>
        </div>
    )
}

export default FinishedQuiz

