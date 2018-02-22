import React, { Component } from 'react'
import StatSelect from './StatSelect'

class RaceBuilder extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    
    render() {
        return (
            <div>
                <label htmlFor="abilityBonusStat">Ability Bonuses</label>
                <StatSelect stats={this.props.stats} name="abilityBonusStat" value={this.state.modInputVal} handleChange={e => this.handleChange(e)} />
            </div>
        )
    }
}

export default RaceBuilder