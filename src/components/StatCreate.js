import React, { Component } from 'react'
import PropTypes from 'prop-types'

const MOD_TYPES = [
    "num",
    "stat"
]

class StatCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            statName: '',
            modifiers: [],
            modOperator: '',
            selectedModType: "num",
            modInputVal: '0'
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

        if (name === "selectedModType") {
            switch (value) {
                case "num":
                    this.setState({ "modInputVal": 0 })
                    break
                case "stat":
                    this.setState({ "modInputVal": this.props.stats[0].name })
                    break
                default:
                    throw new Error("Invalid Modifier Type " + value)
            }
        }
    }

    resetComponent() {

    }

    handleAddMod(e) {
        let modifier = {
            operator: this.state.modOperator,
            type: this.state.selectedModType,
            value: this.state.modInputVal
        }
        let modifiers = [ ...this.state.modifiers, modifier ]
        let modOperator = '+'
        let selectedModType = "num"
        let modInputVal = '0'
        this.setState({ ...this.state, modifiers, modOperator, selectedModType, modInputVal })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.handleSubmit({ name: this.state.statName, modifiers: this.state.modifiers })
        this.setState({
            statName: '',
            modifiers: [],
            modOperator: '',
            selectedModType: "num",
            modInputVal: '0'
        })
    }

    render() {
        let modifiers = this.state.modifiers.map((mod, idx) =>
            <div style={{display: 'inline-block'}} key={idx} >
                { ( mod.operator === '' ) ? mod.value : (mod.operator + mod.value) }
            </div>
        )

        let modOperatorSelect = (this.state.modifiers.length > 0) ? (
            <select name="modOperator" value={this.state.modOperator} onChange={e => this.handleChange(e)}>
                <option value="+">+</option>
                <option value="-">-</option>
            </select>
        ) : null

        let modTypeRadio = MOD_TYPES.map((type) =>
            <div className="radio" key={type}>
                <label>
                    <input type="radio" value={type}
                        name="selectedModType"
                        checked={this.state.selectedModType === type}
                        onChange={e => this.handleChange(e)} />
                    {type}
                </label>
            </div>
        )

        let modInput
        switch (this.state.selectedModType) {
            case "num":
                modInput = (
                    <input type="number" name="modInputVal" value={this.state.modInputVal} onChange={e => this.handleChange(e)} />
                )
                break
            case "stat":
                let statOptions = this.props.stats.map((stat, idx) =>
                    <option key={idx} value={stat.name}>{stat.name}</option>
                )
                modInput = (
                    <select name="modInputVal" value={this.state.modInputVal} onChange={e => this.handleChange(e)} >
                        {statOptions}
                    </select>
                )
                break
            default:
                break
        }

        return (
            <form >
                <label htmlFor="statName">Stat Name</label>
                <input name="statName" type="string" value={this.state.statName} onChange={e => this.handleChange(e)} />
                <br />
                {modifiers}
                <br />
                {modOperatorSelect}
                {modTypeRadio}
                {modInput}
                <button type="button" onClick={e => this.handleAddMod(e)}>Add Modifier</button>
                <br />
                <button type="submit" onClick={e => this.handleSubmit(e)}>Create Stat</button>
            </form>
        )
    }
}

StatCreate.propTypes = {
    stats: PropTypes.array.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default StatCreate