import React, { Component } from 'react'

class FinishContent extends Component {
    render () {
        return (
            <div>
                <h1>Ваш результат: {this.props.result}</h1>
                <button onClick={this.props.onRetry}>Повторить</button>
            </div>
        )
    }
}

export default FinishContent