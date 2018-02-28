import React, { Component } from 'react'
import StatSelect from './StatSelect'

class AbilityBonusBuilder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bonuses: [],
            statSelectVal: this.props.stats[0].name,
            statOp: '+',
            modInputVal: 0
        }
    }
    
    // https://reactjs.org/docs/forms.html#handling-multiple-inputs
    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    
    addBonusFromState() {
        let bonuses = [ ...this.state.bonuses ]
        bonuses.push({
            statName: this.state.statSelectVal,
            operator: this.state.statOp,
            value: this.state.modInputVal,
            type: 'num'
        })
        
        this.setState({
            bonuses: bonuses,
            statSelectVal: this.props.stats[0].name,
            statOp: '+',
            modInputVal: 0
        })
    }
    
    handleClick(e) {
        e.preventDefault()
        this.addBonusFromState()
    }
    
    handleSubmit(e) {
        e.preventDefault()
        this.props.handleSubmit(this.state.bonuses)
        this.setState({
            bonuses: [],
            statSelectVal: this.props.stats[0].name,
            statOp: '+',
            modInputVal: 0
        })
    }
    
    render() {
        const addedBonuses = this.state.bonuses.map((bonus, idx) =>
            <span key={idx}>{bonus.statName + ' ' + bonus.operator + ' ' + bonus.value}<br /></span>
        )
        
        return (
            <form onSubmit={e => this.handleSubmit(e)} >
                <label htmlFor="abilityBonusStat">Ability Bonuses:</label>
                <br />
                {addedBonuses}
                <StatSelect stats={this.props.stats} name="statSelectVal" value={this.state.statSelectVal} handleChange={e => this.handleChange(e)} />
                <select name="statOp" onChange={e => this.handleChange(e)} >
                    <option value="+">+</option>
                    <option value="-">-</option>
                </select>
                <input type="number" name="modInputVal" value={this.state.modInputVal} onChange={e => this.handleChange(e)} />
                <button type="button" onClick={e => this.handleClick(e)} >Add bonus</button>
                <br />
                <button type="submit" >Save</button>
            </form>
        )
    }
}

export default AbilityBonusBuilder