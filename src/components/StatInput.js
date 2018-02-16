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
        return (
            <form
                onSubmit={e => this.handleSubmit(e)}
            >
                <label htmlFor="str-input">Strength</label>
                <input id="str-input" type="number" value={this.state.stats['str']} onChange={e => this.handleChange('str', e)} />
                <br />
                <label htmlFor="dex-input">Dexterity</label>
                <input id="dex-input" value={this.state.stats['dex']} onChange={e => this.handleChange('dex', e)} />
                <br />
                <label htmlFor="con-input">Constitution</label>
                <input id="con-input" value={this.state.stats['con']} onChange={e => this.handleChange('con', e)} />
                <br />
                <label htmlFor="int-input">Intelligence</label>
                <input id="int-input" value={this.state.stats['int']} onChange={e => this.handleChange('int', e)} />
                <br />
                <label htmlFor="wis-input">Wisdom</label>
                <input id="wis-input" value={this.state.stats['wis']} onChange={e => this.handleChange('wis', e)} />
                <br />
                <label htmlFor="cha-input">Charisma</label>
                <input id="cha-input" value={this.state.stats['cha']} onChange={e => this.handleChange('cha', e)} />
                <br />
                <button type="submit">
                    Submit
                </button>
            </form>
        )
    }
}

StatInput.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    stats: PropTypes.object.isRequired
}

export default StatInput