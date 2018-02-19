import React, { Component } from 'react'
import PropTypes from 'prop-types'

class StatInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stats: props.stats
        }
    }

    handleChange(stat, e) {
        let stats = { ...this.state.stats }
        stats[stat] = e.target.value
        this.setState({ stats })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.handleSubmit(this.state.stats)
    }

    render() {
        let statInputs = this.state.stats.map((input) =>
            <div key={input.name}>
                <label htmlFor={input.name + "-input"}>{input.name}</label>
                <input id={input.name + "-input"} type="number" value={input.value} onChange={e => this.handleChange(input.name, e)} />
                <br />
            </div>
        )

        return (
            <form
                onSubmit={e => this.handleSubmit(e)}
            >
                {statInputs}
                <button type="submit">
                    Submit
                </button>
            </form>
        )
    }
}

StatInput.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    stats: PropTypes.array.isRequired
}

export default StatInput